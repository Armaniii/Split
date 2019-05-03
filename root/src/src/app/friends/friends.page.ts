import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ModalController, AlertController } from '@ionic/angular';
import { FriendFormComponent } from './friend-form/friend-form.component';
import { DbService } from '../services/db.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap, shareReplay, map } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {
  searchstring = '';
  testUsers;
  filtered;
  myfriends;

  start = new Subject();
  end = new Subject();
  filter = new BehaviorSubject(null);

  constructor(
    private db: DbService,
    private auth: AuthService,
    private modal: ModalController,
    private afs: AngularFirestore,
    private alertController: AlertController
  ) {
    // this.getAllUsers();
  }

  ngOnInit() {

    this.testUsers = this.auth.user$.pipe(
      switchMap(user =>
        this.db.collection$('users', ref =>
          ref
            .orderBy('displayName', 'asc')
        )
      ),
      shareReplay(1)
    );

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sorry',
      message: `
      <p>You cannot add yourself as a friend.</p>
    `,
      buttons: ['OK']
    });

    return await alert.present();
  }
  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Friend Added',
      message: `
      <p>You have successfully added this user.</p>
    `,
      buttons: ['OK']
    });

    return await alert.present();
  }

  presentAddFriend(type_user: any) {
    const userId = this.auth.getUserData().uid;
    if (type_user.uid === userId) {
      this.presentAlert();
      return;
    }
    const data = {
      displayName: type_user.displayName,
      friendId: type_user.uid,
      photoURL: type_user.photoURL,
      email: type_user.email,
      createdAt: Date.now(),
      uid: userId,
      status: true
    };
    const path = 'friends/' + type_user.uid;
    this.db.updateAt(path, data);
    this.presentSuccessAlert();
    return;
  }


  searchuser(searchbar) {
    const start = this.searchstring;
    const end = start + '\uf8ff';
    const q = searchbar.target.value;
    if (q.trim() === '') {
      this.testUsers = this.auth.user$.pipe(
        switchMap(user =>
          this.db.collection$('users', ref =>
            ref
              .orderBy('displayName', 'asc')
          )
        ),
        shareReplay(1)
      );
      return;
    }

    this.testUsers = this.auth.user$.pipe(
      switchMap(user =>
        this.db.collection$('users', ref =>
          ref
            .orderBy('displayName', 'asc')
            .startAt(start)
            .endAt(end)
        )
      ),
      shareReplay(1)
    );
  }

}
