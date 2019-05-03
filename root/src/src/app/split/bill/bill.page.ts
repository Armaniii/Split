import { Component, OnInit } from '@angular/core';
import { SplitService } from '../../services/split.service';
import { AuthService } from '../../services/auth.service';
import { DbService } from '../../services/db.service';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
import {BillFormComponent} from '../bill/bill-form/bill-form.component';
import {SplitFormComponent} from '../split-form/split-form.component';
import { NavParams } from '@ionic/angular';
import { switchMap, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.page.html',
  styleUrls: ['./bill.page.scss'],
})
export class BillPage implements OnInit {
  searchstring = '';
  filteredusers = [];
  testUsers = [];
  members = [];
  memberUids = [];
  memberPhoto = [];
  userId = this.auth.getUserData().uid;
  ownDataDoc = this.afs.doc(`users/${this.userId}`);
  ownData = this.ownDataDoc.valueChanges();
  myDoc;
  group;
  description;
  billtype;
  name = [];
  amount;
  splitType = 'Equally';
  myFriends;
  eachMemberOwes = [];

  public isenabled = false;

  constructor(
    private splitservice: SplitService,
    private db: DbService,
    private auth: AuthService,
    private modal: ModalController,
    private afs: AngularFirestore,
    private alertController: AlertController,
    private navCtrl: NavController

  ) { }

  ngOnInit() {
    this.myFriends = this.auth.user$.pipe(
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
    this.navCtrl.goBack();
  }

  ionViewWillEnter() {
    this.members.push(this.myDoc.displayName);
    this.memberUids.push(this.myDoc.uid);
    this.memberPhoto.push(this.myDoc.photoURL);
    // this.getAllUsers();
  }

  removeFromList(userId) {
    const index: number = this.memberUids.indexOf(userId);
    if (index !== -1) {
        this.memberUids.splice(index, 1);
        this.members.splice(index, 1);
        this.memberPhoto.splice(index, 1);
    }
    return;
  }

  // getAllUsers() {
  //   this.auth.getallfriends().then((res: any) => {
  //     this.filteredusers = res;
  //     this.testUsers = res;
  //   });
  //   return;
  // }

  // async presentToast() {
  //   const toast = await this.toastController.create({
  //     message: 'Group Created Successfully',
  //     duration: 2000
  //   });
  //   toast.present();
  // }

memberOwesData(owes) {
  const arr = [];
  for (let i = 0; i < this.memberUids.length; ++i) {
    arr.push({name: this.members[i], uid: this.memberUids[i], owes: this.eachMemberOwes[i], photoURL: this.memberPhoto[i]});
  }
  return arr;
}

  // createBill() {
  //   const uid = await this.auth.uid();

  // const userName = await this.auth.getUserData().displayName;
  // const id = this.split ? this.split.id : '';
  // const alluids = this.memberUids;
  // const userPhoto = await this.auth.getUserData().photoURL;
  // const fbValues = this.splitForm.value;
  // const owes = this.splitservice.split(this.memberUids.length, fbValues.amount);
  // const addedMembers = this.memberOwesData(owes);
  // const data = {
  //   createdbyuid: uid,
  //   createdbyname: userName,
  //   createdbyphoto: userPhoto,
  //   createdAt: Date.now(),
  //   members: addedMembers,
  //   membersuids: alluids,
  //   ...this.split,
  //   ...this.splitForm.value
  // };

  // this.db.updateAt(`bills/${id}`, data);
  // this.modal.dismiss();
  // // this.presentToast();
  // return;
  // }
async createBill(description, billtype, amount) {
  // this.auth.getMembersName(this.memberUids);
  const owes = this.splitservice.split(this.memberUids.length, amount);
  const uid = this.memberUids[0];
  const alluids = this.memberUids;
  const name = this.members[0];
  const userPhoto = await this.auth.getUserData().photoURL;
  const addedMembers = this.memberOwesData(owes);
    const data = {
      description: description,
      billtype: billtype,
      amount: this.splitservice.decTrans(amount),
      members: addedMembers,
      membersuids: alluids,
      createdAt: Date.now(),
      createdbyuid: uid,
      createdbyname: name,
      createdbyphoto: userPhoto
    };
    console.log(data);
    this.db.updateAt('bills', data);
    this.navCtrl.goBack();
    return;
}
  presentAddFriend(key) {
    // this.root.push('FriendsPage');
    if (this.memberUids.includes(key.friendId, 1) === true) {
      this.removeFromList(key.friendId);
    } else {
      this.members.push(key.displayName);
      this.memberUids.push(key.friendId);
      this.memberPhoto.push(key.photoURL);
    }
    console.log(this.memberUids);
    console.log(this.memberUids);
    return;
  }

  searchuser(searchbar) {
    const start = this.searchstring;
    const end = start + '\uf8ff';
    const q = searchbar.target.value;
    if (q.trim() === '') {
      this.myFriends = this.auth.user$.pipe(
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

    this.myFriends = this.auth.user$.pipe(
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

  async presentBillForm(split?: any, checkedMembers?: any, amount?: any) {
    checkedMembers = this.members;
    amount = this.amount;
    let retrievedData;
    const modal = await this.modal.create({
      component: BillFormComponent,
      componentProps: { split, checkedMembers, amount }
    });
    modal.onDidDismiss()
    .then((data) => {
      retrievedData = data['data'];
      // this.splitType = data['how'];
      // console.log(this.splitType);
      console.log(this.eachMemberOwes);
      this.eachMemberOwes = retrievedData['data'];
      this.splitType = retrievedData['splitType'];
      console.log(this.eachMemberOwes);
      console.log(this.splitType);
  });
    return await modal.present();
  }

  checkInput(amount?: any) {
    if (amount != null) {
      this.isenabled = true;
    } else {
      this.isenabled = false;
    }
  }
}
