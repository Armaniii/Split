import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ModalController, AlertController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GroupsPage } from '../groups.page';
import { ToastController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { switchMap, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent implements OnInit {

  searchstring = '';
  testUsers;
  members = [];
  memberUids = [];
  userId = this.auth.getUserData().uid;
  groupForm: FormGroup;
  ownDataDoc = this.afs.doc(`users/${this.userId}`);
  ownData = this.ownDataDoc.valueChanges();
  myDoc;
  group;
  name = '';
  type;
  imgPreview = 'assets/icon/anon.svg';

  added = true;
  avatar;
  start = new Subject();
  end = new Subject();

  constructor(
    private db: DbService,
    private auth: AuthService,
    private modal: ModalController,
    private afs: AngularFirestore,
    private alertController: AlertController,
    private fb: FormBuilder, // private params: NavParams.
    public toastController: ToastController,

  ) { }

  ngOnInit() {
    this.testUsers = this.auth.user$.pipe(
      switchMap(user =>
        this.db.collection$('friends', ref =>
          ref
            .where('uid', '==', user.uid)
            .orderBy('displayName', 'asc')
        )
      ),
      shareReplay(1)
    );
    this.ownData.subscribe(res => this.myDoc = res);
  }

  pushPage() {
    this.modal.dismiss();
  }

  // selectPhoto(): void {
  //   Camera.getPicture({
  //     sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
  //     destinationType: Camera.DestinationType.DATA_URL,
  //     quality: 100,
  //     encodingType: Camera.EncodingType.PNG,
  //   }).then(imageData => {
  //     this.myPhoto = imageData;
  //     this.uploadPhoto();
  //   }, error => {
  //     console.log("ERROR -> " + JSON.stringify(error));
  //   });
  // }

  ionViewWillEnter() {
    this.name = '';
    this.type = 'apartment';
    this.members.push(this.myDoc);
    this.memberUids.push(this.userId);
  }

  removeFromList(userId) {
    const index: number = this.memberUids.indexOf(userId);
    if (index !== -1) {
        this.memberUids.splice(index, 1);
        this.members.splice(index, 1);
    }
    return;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Group Created Successfully',
      duration: 2000
    });
    toast.present();
  }

createGroup(name, type) {
  const userName = name;
  const dataType = type;
  const uids = this.memberUids;
  const addedMembers = this.members;
    const data = {
      displayName: userName,
      type: dataType,
      members: addedMembers,
      memberuids: uids,
      photoURL: this.avatar,
    };

    this.db.updateAt('groups', data);
    this.modal.dismiss();
    this.presentToast();
    return;
}
  presentAddFriend(key) {
    // this.root.push('FriendsPage');
    if (this.memberUids.includes(key.friendId, 1) === true) {
      this.removeFromList(key.friendId);
    } else {
      this.members.push(key);
      this.memberUids.push(key.friendId);
    }

    return;
  }

  searchuser(searchbar) {
    const start = this.searchstring;
    const end = start + '\uf8ff';
    const q = searchbar.target.value;
    if (q.trim() === '') {
      return;
    }
    this.testUsers = this.auth.user$.pipe(
      switchMap(user =>
        this.db.collection$('friends', ref =>
          ref
            .where('uid', '==', user.uid)
            .orderBy('displayName', 'asc')
            .startAt(start)
            .endAt(end)
        )
      ),
      shareReplay(1)
    );
  }
}
