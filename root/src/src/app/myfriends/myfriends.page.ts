import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ModalController, NavController, Nav } from '@ionic/angular';
import { DbService } from '../services/db.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { shareReplay, switchMap } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
import { whenRendered } from '@angular/core/src/render3';


@Component({
  selector: 'app-myfriends',
  templateUrl: './myfriends.page.html',
  styleUrls: ['./myfriends.page.scss'],
})
export class MyfriendsPage implements OnInit {
  searchstring = '';
  testUsers;

  start = new Subject();
  end = new Subject();
  filter = new BehaviorSubject(null);

  constructor(
    private db: DbService,
    private auth: AuthService,
    private modal: ModalController,
    private afs: AngularFirestore,
    private router: Router
  ) {
     // this.getAllFriends();
  }
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



  }

  delete_friend(type_user: any) {
    const friendId = type_user.id;
    const path = 'friends/' + friendId;
    this.db.delete(path);
    return;
  }

  searchuser(searchbar) {
    const start = this.searchstring;
    const end = start + '\uf8ff';
    const q = searchbar.target.value;
    if (q.trim() === '') {
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
