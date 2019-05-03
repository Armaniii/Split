import { Component, OnInit } from '@angular/core';
import { SplitService } from '../../services/split.service';
import { DbService } from '../../services/db.service';
import { AuthService } from '../../services/auth.service';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap, shareReplay } from 'rxjs/operators';
import { GroupBillFormComponent } from './group-bill-form/group-bill-form.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {

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
  memberOwes = [];
  id;
  docData$;

  public isenabled = false;

  constructor(
    private splitservice: SplitService,
    private db: DbService,
    private auth: AuthService,
    private modal: ModalController,
    private afs: AngularFirestore,
    private alertController: AlertController,
    private navCtrl: NavController,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    const path = 'groups/' + this.id;
    this.docData$ = this.db.doc$(path);
    // this.ownData.subscribe(res => this.myDoc = res);
  }
  pushPage() {
    this.navCtrl.goBack();
  }

  ionViewWillEnter() {
    // this.members.push(this.myDoc.displayName);
    // this.memberUids.push(this.myDoc.uid);
    // this.memberPhoto.push(this.myDoc.photoURL);
    // this.getAllUsers();
  }

  removeFromList(userId) {
    const index: number = this.memberUids.indexOf(userId);
    if (index !== -1) {
        this.memberUids.splice(index, 1);
        this.members.splice(index, 1);
        this.memberPhoto.splice(index, 1);
        this.memberOwes.splice(index, 1);
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
    const numOwes = this.memberOwes[i] + this.eachMemberOwes[i];
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

  getOwes(val) {
    const tempArr = val.members;
    const newArray = [];
    console.log(tempArr);

    for (let i = 0; i < tempArr.length; ++i) {
      for (let j = 0; j < this.memberUids.length; ++j) {
        if (tempArr[i].uid === this.memberUids[j]) {
          tempArr[i].owes = tempArr[i].owes + this.eachMemberOwes[j];
          console.log(tempArr[i].owes);
        }
      }
      newArray.push(tempArr[i]);
      console.log(newArray);
    }

    return newArray;
  }

async createBill(description, billtype, amount, valAmount, val) {
  // this.auth.getMembersName(this.memberUids);
  const owes = this.splitservice.split(this.memberUids.length, amount);
  const alluids = this.memberUids;
  const name = this.auth.getUserData().displayName;
  const userPhoto = await this.auth.getUserData().photoURL;
  const addedMembers = this.memberOwesData(owes);
    const data = {
      description: description,
      billtype: billtype,
      amount: this.splitservice.decTrans(amount),
      members: addedMembers,
      membersuids: alluids,
      createdAt: Date.now(),
      createdbyuid: this.id,
      createdbyname: name,
      createdbyphoto: userPhoto
    };
    const newAmount = valAmount + amount;
    let groupOwes = [];
    groupOwes = this.getOwes(val);
    const groupData = {
      amount: newAmount,
      members: groupOwes
    };
    this.db.updateAt('bills', data);
    this.db.updateAt(`groups/${this.id}`, groupData);
    this.navCtrl.navigateBack( `/group-info;id=${this.id}`);
    return;
}
  presentAddFriend(key) {
    // this.root.push('FriendsPage');
    if (this.memberUids.includes(key.uid, 0) === true) {
      this.removeFromList(key.uid);
    } else {
      this.members.push(key.name);
      this.memberUids.push(key.uid);
      this.memberPhoto.push(key.photoURL);
      this.memberOwes.push(key.owes);
    }
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
      component: GroupBillFormComponent,
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
