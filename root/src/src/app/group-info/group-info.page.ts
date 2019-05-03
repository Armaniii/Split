import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DbService } from '../services/db.service';
import { BehaviorSubject } from 'rxjs';
import { ModalController, Input } from '@ionic/angular';
import { AngularFirestore, docChanges } from '@angular/fire/firestore';
import { SplitService } from '../services/split.service';
import { switchMap, map, shareReplay } from 'rxjs/operators';
import { NavParams } from '@ionic/angular';
import { NavController } from '@ionic/angular/dist/providers/nav-controller';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.page.html',
  styleUrls: ['./group-info.page.scss'],
})
export class GroupInfoPage implements OnInit {

  id: string;
  testGroups;
  group$: any;
  docData;
  groupName;
  balance;
  numMembers;
  groupPhoto;
  action: any;
  newData: Observable<any>;
  testgroup;
  docData$;
  tab: any;
  event: any;
  constructor(
    // private modal: ModalController,
    // private navCtrl: NavController,
    // private navParams: NavParams,
    private route: ActivatedRoute,
    private router: Router,
    private service: AuthService,
    private navCtrl: NavController,
    private auth: AuthService,
    private db: DbService,
    private afs: AngularFirestore
  ) {
      // this.action = 'balance';
      this.tab = 'balance';

    // this.groupName = navParams.get("name");
    // this.groupMembers = navParams.get("members");
  }
  docdata;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    const path = 'groups/' + this.id;
    this.docData$ = this.db.doc$(path);
  }

  // segmentChanged(change: any) {
  //   console.log(this.segType);
  //   if(this.segType !== 'balance' ){
  //     this.segBool = true;
  //     this.testgroup = this.auth.user$.pipe(
  //     switchMap(user =>
  //       this.db.collection$('bills', ref =>
  //         ref
  //           .where('createdbyuid', '==', this.id)
  //           .orderBy('createdAt', 'desc')
  //       )
  //     ),
  //     shareReplay(1)
  //   );
  //   } else {
  //     this.segBool = false;
  //     this.testgroup = this.auth.user$.pipe(
  //       switchMap(user =>
  //         this.db.collection$('bills', ref =>
  //           ref
  //           .where('membersuids', 'array-contains', user.uid)
  //           .orderBy('createdAt', 'desc')
  //         )
  //       ),
  //       shareReplay(1)
  //     );
  //   }
  // }

  gotoBillForm() {
    const groupId = this.id ? this.id : null;
    this.router.navigate(['/group-bill', {id: groupId} ]);
  }

  // segmentChanged(seg: any):void {
  //   let segval = seg.value;
  //   if(segval === "balance") {
  //     this.router.navigate(['/group-balance']);
  //   }
  //   else if(segval === "transactions") {
  //     this.router.navigate(['/split']);
  //   }
  // }

  // closeModal() {
  //   this.modal.dismiss();
  // }

}
