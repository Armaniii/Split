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


@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.scss']
})
export class GroupInfoComponent implements OnInit {

  searchstring = '';
  filteredgroups = [];
  testGroups = [];
  groups;
  split;

  members = this.navParams.get('group');
  groupname = this.navParams.get('displayName');

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
    private navParams: NavParams
  ) {}

  pushPage() {
    this.modal.dismiss();
  }

  ngOnInit() {

  }

  get_auth() {
    return this.auth;
  }

  }
