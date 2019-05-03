import { Component, OnInit } from '@angular/core';
import { SplitService } from '../../services/split.service';
import { AuthService } from '../../services/auth.service';
import { DbService } from '../../services/db.service';
import { ModalController, AlertController, ToastController, NavParams } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { switchMap, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-split-form',
  templateUrl: './split-form.component.html',
  styleUrls: ['./split-form.component.scss']
})
export class SplitFormComponent implements OnInit {
  searchstring = '';
  testUsers;
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
  orders = [];
  controls;
  splitForm: FormGroup;
  split;

  constructor(
    private splitservice: SplitService,
    private db: DbService,
    private auth: AuthService,
    private modal: ModalController,
    private afs: AngularFirestore,
    private alertController: AlertController,
    private fb: FormBuilder,
    private toastController: ToastController
  ) {
  }

  ngOnInit() {
    this.testUsers = this.auth.user$.pipe(
      switchMap(user =>
        this.db.collection$('friends', ref =>
          ref
            .where('uid', '==', user.uid)
            .orderBy('displayName', 'asc')
            .limit(5)
        )
      ),
      shareReplay(1)
    );
    const data = {
      description: '',
      billtype: '',
      amount: '',
      membersuids: '',
      members: '',
      ...this.split
    };
    if (data.membersuids !== '') {
      this.members = data.members;
      this.memberUids = data.membersuids;
      // this.removeFromList(this.userId);
    }

    this.splitForm = this.fb.group({
      description: [
        data.description,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100)
        ]
      ],
      billtype: [data.billtype, [Validators.required]],
      amount: [data.amount, [Validators.required]],
     // owes: [data.owes, [Validators.required]]
    });

    this.ownData.subscribe(res => this.myDoc = res);
  }
  pushPage() {
    this.modal.dismiss();
  }

  ionViewWillEnter() {
    if (!this.split) {
      this.members.push(this.myDoc.displayName);
      this.memberUids.push(this.userId);
      this.memberPhoto.push(this.myDoc.photoURL);
    }
  }

  removeFromList(userId) {
    const index: number = this.memberUids.indexOf(userId);
    if (index !== -1) {
        this.memberUids.splice(index, 0);
        this.members.splice(index, 0);
        this.memberPhoto.splice(index, 0);
    }

    return;
  }

  async presentToastFriend() {
    const toast = await this.toastController.create({
      message: 'Person successfully added to bill!',
      duration: 2000
    });
    toast.present();
  }

memberOwesData(owes) {
  const arr = [];
  for (let i = 0; i < this.memberUids.length; ++i) {
    arr.push({name: this.members[i], uid: this.memberUids[i], owes: owes, photoURL: this.memberPhoto[i]});
  }
  return arr;
}

async createSplit() {
  const uid = await this.auth.uid();

  const userName = await this.auth.getUserData().displayName;
  const id = this.split ? this.split.id : '';
  const alluids = this.memberUids;
  const userPhoto = await this.auth.getUserData().photoURL;
  const fbValues = this.splitForm.value;
  const owes = this.splitservice.split(this.memberUids.length, fbValues.amount);
  const addedMembers = this.memberOwesData(owes);
  const data = {
    createdbyuid: uid,
    createdbyname: userName,
    createdbyphoto: userPhoto,
    createdAt: Date.now(),
    members: addedMembers,
    membersuids: alluids,
    ...this.split,
    ...this.splitForm.value
  };

  this.db.updateAt(`bills/${id}`, data);
  this.modal.dismiss();
  this.presentToast();
  return;
}
createBill(description, billtype, amount) {
  // this.auth.getMembersName(this.memberUids);
  const owes = this.splitservice.split(this.memberUids.length, amount);
  const uid = this.memberUids[0];
  const alluids = this.memberUids;
  const name = this.members[0];
  const addedMembers = this.memberOwesData(owes);
  console.log(amount);
    const data = {
      description: description,
      billtype: billtype,
      amount: this.splitservice.decTrans(amount),
      members: addedMembers,
      membersuids: alluids,
      createdAt: Date.now(),
      createdbyuid: uid,
      createdbyname: name
    };
    this.auth.createBill({data});
    this.modal.dismiss();
    this.presentToast();
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
    this.presentToastFriend();
    return;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Bill Created Successfully',
      duration: 2000
    });
    toast.present();
  }

  searchuser(searchbar) {
    const start = searchbar.target.value;
    const end = start + '\uf8ff';
    const q = searchbar.target.value;
    if (q.trim() === '') {
      this.testUsers = this.auth.user$.pipe(
        switchMap(user =>
          this.db.collection$('friends', ref =>
            ref
              .where('uid', '==', user.uid)
              .orderBy('displayName', 'asc')
              .limit(5)
          )
        ),
        shareReplay(1)
      );
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
