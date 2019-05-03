import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { switchMap, take, map, shareReplay } from 'rxjs/operators';
import { DbService } from './db.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform, AlertController } from '@ionic/angular';

import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;
  constructor(
    private afAuth: AngularFireAuth,
    private db: DbService,
    private router: Router,
    private gplus: GooglePlus,
    private platform: Platform,
    private loadingController: LoadingController,
    private storage: Storage,
    private alertCtrl: AlertController,
    private afs: AngularFirestore
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => (user ? db.doc$(`users/${user.uid}`) : of(null)))
    );
    this.handleRedirect();
  }

  uid() {
    return this.user$
      .pipe(
        take(1),
        map(u => u && u.uid)
      )
      .toPromise();
  }
  addDataToGroupMemebers(data, path) {
    this.db.updateAt(path, data);
    return;
  }

  createGroup(name: any, type: any, members: any, uids: any) {
      // Sets user data to firestore on login

      const data = {
        groupName: name,
        type: type,
        members: members
      };

      for (let i = 0; i < uids.length; ++i) {
        const pathLoop = `users/${uids[i]}/groups`;
        this.addDataToGroupMemebers(data, pathLoop);
      }
      return;
  }

  async getDoc(path) {
    const promise = new Promise((resolve, reject) => {
      const docData = this.db.doc$(path).subscribe((doc) => {
        shareReplay(1);
        resolve(doc);
      });
    });
    return await promise;
  }


  async getAllTransactions() {
    const userId = this.getUserData().uid;
    const temparr = [];
    const promise = new Promise((resolve, reject) => {
      const data = this.afs.collection('bills').ref.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          for (let i = 0; i < doc.data().members.length; ++i) {
            if (doc.data().members[i].uid === userId) {
              temparr.push(doc.data());
            }
          }
          resolve(temparr);
        });
      });
    });
    return await promise;
  }

  // async getAllTransactions() {
  //   const userId = this.getUserData().uid;
  //   const temparr = [];
  //   const tempName = [];
  //   const path = 'users/' + userId + '/bills';
  //   const promise = new Promise((resolve, reject) => {
  //     const data = this.afs.collection(path).ref.get().then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         if (userId === doc.data().uid) {
  //           return;
  //         } else {
  //           temparr.push(doc.data());
  //         }
  //         resolve(temparr);
  //       });
  //     });
  //   });
  //   return await promise;
  // }

  async getallgroups() {
    const temparr = [];
    const userId = this.getUserData().uid;
    const path = 'users/' + userId + '/groups';
    const promise = new Promise((resolve, reject) => {
      const data = this.afs.collection(path).ref.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          temparr.push(doc.data());
          resolve(temparr);
        });
      });
    });
    return await promise;
  }

  createBill(data) {
    this.db.updateAt('bills', data);
    return;
  }

  // createBill({data}, uids) {
  //   for (let i = 0; i < uids.length; ++i) {
  //     const pathLoop = `users/${uids[i]}/bills`;
  //     this.addDataToGroupMemebers(data, pathLoop);
  //   }
  //   return;
  // }
  async getallusers() {
    const userId = this.getUserData().uid;
    const temparr = [];
    const promise = new Promise((resolve, reject) => {
      const data = this.afs.collection('/users').ref.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (userId === doc.data().uid) {
            return;
          } else {
            temparr.push(doc.data());
          }
          resolve(temparr);
        });
      });
    });
    return await promise;

  }
  async getallfriends() {
    const temparr = [];
    const userId = this.getUserData().uid;
    const path = 'users/' + userId + '/friends/';
    const promise = new Promise((resolve, reject) => {
      const data = this.afs.collection(path).ref.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          temparr.push(doc.data().friend);
          resolve(temparr);
        });
      });
    });
    return await promise;
  }

  async anonymousLogin() {
    const credential = await this.afAuth.auth.signInAnonymously();
    return await this.updateUserData(credential.user);
  }

  private updateUserData({ uid, email, displayName, photoURL, isAnonymous }) {
    // Sets user data to firestore on login

    const path = `users/${uid}`;

    const data = {
      uid,
      email,
      displayName,
      photoURL,
      isAnonymous
    };

    return this.db.updateAt(path, data);
  }
  private updateEmailUserData({ uid, email, displayName, photoURL, isAnonymous }, user_name: string, imgUrl) {
    // Sets user data to firestore on login
    const path = `users/${uid}`;

    const data = {
      uid,
      email,
      displayName: user_name,
      photoURL: imgUrl,
      isAnonymous
    };
    return this.db.updateAt(path, data);
  }
  updateProfile(name, photoUrl) {
    const user = this.afAuth.auth.currentUser;
    return user.updateProfile({
      displayName: name,
      photoURL: photoUrl
    });
    // this.updateEmailUserData(user, name, photoUrl);
    // return;
  }
  updateEmailData(name, url) {
    const user = this.afAuth.auth.currentUser;
    this.updateEmailUserData(user, name, url);
    return;
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    // this.user$ = null;
    return this.router.navigate(['/']);
  }
  async reset_password(user_email) {
    return await this.afAuth.auth.sendPasswordResetEmail(user_email);
  }
  //// Email-Based Login

  async signInWithEmail(email: string, password: string) {
    try {
      return await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      return await this.errorCatcher(err);
    }
  }
  async errorCatcher(error) {
    const alert = await this.alertCtrl.create({
      header: error.message,
      buttons: ['OK']
    });
    console.log(error.message);

    return await alert.present();
  }
  async successDelete() {
    const alert = await this.alertCtrl.create({
      header: 'Account Deleted',
      message: `
      <p>We're sad to see you go. Your
      account has been successfully deleted.</p>
    `,
      buttons: ['OK']
    });
    return await alert.present();
  }
  async errorResetCatcher(error) {
    const alert = await this.alertCtrl.create({
      header: error.message,
      message: `
      <p>Make sure you input the correct e-mail.</p>
    `,
      buttons: ['OK']
    });
    console.log(error.message);

    return await alert.present();
  }
  async signUp(email: string, password: string) {
    try {
      return await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      return await this.errorCatcher(err);
    }
  }
  getEmailData(user_name, imgUrl) {
    const user = this.afAuth.auth.currentUser;
    return this.updateEmailUserData(user, user_name, imgUrl);
  }
  getUser() {
    return this.user$;
  }
  delete() {
    const user = this.afAuth.auth.currentUser;
    const tempId = user.uid;
    this.db.delete(`users/${tempId}`);
    this.afAuth.auth.currentUser.delete();
    this.successDelete();
    return this.router.navigate(['/']);
}
  //// GOOGLE AUTH
getUserData() {
  return this.afAuth.auth.currentUser;
}
  setRedirect(val) {
    this.storage.set('authRedirect', val);
  }

  async isRedirect() {
    return await this.storage.get('authRedirect');
  }

  async googleLogin() {
    try {
      let user;

      if (this.platform.is('cordova')) {
        user = await this.nativeGoogleLogin();
      } else {
        await this.setRedirect(true);
        const provider = new auth.GoogleAuthProvider();
        user = await this.afAuth.auth.signInWithRedirect(provider);
      }

      return await this.updateUserData(user);
    } catch (err) {
      console.log(err);
    }
  }

  // Handle login with redirect for web Google auth
  private async handleRedirect() {
    if ((await this.isRedirect()) !== true) {
      return null;
    }
    const loading = await this.loadingController.create();
    await loading.present();

    const result = await this.afAuth.auth.getRedirectResult();

    if (result.user) {
      await this.updateUserData(result.user);
    }

    await loading.dismiss();

    await this.setRedirect(false);

    return result;
  }

  async nativeGoogleLogin(): Promise<any> {
    const gplusUser = await this.gplus.login({
      webClientId:
        '938783939410-07e721sgsh2ssnrg5danqde7k96keofe.apps.googleusercontent.com',
      offline: true,
      scopes: 'profile email'
    });

    return await this.afAuth.auth.signInWithCredential(
      auth.GoogleAuthProvider.credential(gplusUser.idToken)
    );
  }
}
