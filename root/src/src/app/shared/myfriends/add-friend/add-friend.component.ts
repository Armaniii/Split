import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
// import { FriendFormComponent } from './friend-form/friend-form.component';
import { DbService } from '../../../services/db.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap, shareReplay, map } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss']
})
export class AddFriendComponent implements OnInit {

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
    private alertController: AlertController,
    private toastCtrl: ToastController
  ) { }

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

  pushPage() {
    this.modal.dismiss();
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
      status: true
    };
    const path = 'users/' + userId + '/friends/' + type_user.uid;
    this.db.updateAt(path, data);
    this.presentSuccessAlert();
    return;
  }

  async presentAlert() {
    const toast = await this.toastCtrl.create({
      message: 'You cannot add yourself as a friend.',
      duration: 2000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'dismiss'
    });

    return toast.present();
  }

  async presentSuccessAlert() {
    const toast = await this.toastCtrl.create({
      message: 'Friend successfully added',
      duration: 2000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'dismiss'
    });

    return toast.present();
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
