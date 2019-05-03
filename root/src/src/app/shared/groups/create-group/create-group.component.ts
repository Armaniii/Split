import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ModalController, AlertController } from '@ionic/angular';
import { DbService } from '../../../services/db.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { GroupsPage } from '../groups.page';
import { ToastController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { switchMap, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

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
  status = false;
  name = '';
  type;
  imgPreview = 'assets/icon/anon.svg';

  added = true;
  avatar;
  start = new Subject();
  end = new Subject();

  typeData = [];
  typeSet;

  constructor(
    private db: DbService,
    private auth: AuthService,
    private modal: ModalController,
    private afs: AngularFirestore,
    private alertController: AlertController,
    private fb: FormBuilder, // private params: NavParams.
    public toastController: ToastController,
  ) {
    this.typeData = [
      { text: 'Apartment', value: 'apartment'},
      { text: 'House', value: 'house'},
      { text: 'Tip', value: 'tip'},
      { text: 'Other', value: 'other'},
    ];
    this.typeSet = { text: 'Apartment', value: 'apartment'};
   }

  ngOnInit() {
    this.testUsers = this.auth.user$.pipe(
      switchMap(user =>
        this.db.collection$(`users/${user.uid}/friends`, ref =>
          ref
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

  ionViewWillEnter() {
    this.name = '';
    this.type = this.typeSet.value;
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

  memberOwesData() {
    const arr = [];
    for (let i = 0; i < this.memberUids.length; ++i) {
      arr.push({name: this.members[i].displayName, uid: this.memberUids[i], owes: 0, photoURL: this.members[i].photoURL});
    }
    return arr;
  }

createGroup(name, type) {
  const userName = name;
  const dataType = type;
  const uids = this.memberUids;
  const addedMembers = this.memberOwesData();
  console.log(addedMembers);
    const data = {
      displayName: userName,
      type: dataType.text,
      members: addedMembers,
      memberuids: uids,
      status: this.status,
      amount: 0,
      photoURL: 'https://goo.gl/v9kRe7',
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
      this.status = false;
    } else {
      this.members.push(key);
      this.memberUids.push(key.friendId);
      this.status = true;
    }
    console.log(this.members);

    return;
  }

  searchuser(searchbar) {
    const start = this.searchstring;
    const end = start + '\uf8ff';
    const q = searchbar.target.value;
    if (q.trim() === '') {
      this.testUsers = this.auth.user$.pipe(
        switchMap(user =>
          this.db.collection$(`users/${user.uid}/friends`, ref =>
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
        this.db.collection$(`users/${user.uid}/friends`, ref =>
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
