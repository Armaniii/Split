import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../../services/db.service';
import { BehaviorSubject } from 'rxjs';
import { ModalController, Input } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { SplitService } from '../../services/split.service';
import { switchMap, map, shareReplay } from 'rxjs/operators';
import { NavParams } from '@ionic/angular';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-split-info',
  templateUrl: './split-info.component.html',
  styleUrls: ['./split-info.component.scss']
})
export class SplitInfoComponent  {
  searchstring = '';
  filteredgroups = [];
  testGroups = [];
  groups;
  split;

  value = this.navParams.get('split');

  info;
  info$;

  content;
  filter = new BehaviorSubject(null);

  userId = this.auth.getUserData().uid;
  constructor(
    private route: ActivatedRoute,
    private db: DbService,
    private auth: AuthService,
    private modal: ModalController,
    private database: AngularFirestore,
    private splitservice: SplitService,
    private navParams: NavParams,
    private dec: DecimalPipe
  ) {}

  decTrans(num): any {
    return this.dec.transform(num, '1.2-2');
  }

  pushPage() {
    this.modal.dismiss();
  }

  getAllGroups() {
    this.auth.getAllTransactions().then((res: any) => {
      this.filteredgroups = res;
      this.testGroups = res;
      console.log(this.filteredgroups);

    });
    return;
  }

  viewGroup(key) {
    this.filteredgroups = [];
    this.testGroups = [];

  }

  searchuser(searchbar) {
    this.filteredgroups = this.testGroups;
    const q = searchbar.target.value;
    if (q.trim() === '') {
      return;
    }

    this.filteredgroups = this.filteredgroups.filter((v) => {
      if (v.groupName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    });
  }

  get_auth() {
    return this.auth;
  }

  }
