import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { AuthService } from '../../services/auth.service';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
// import { GroupFormComponent } from '../../groups/group-form/group-form.component';
// import { GroupInfoComponent } from '../../groups/group-info/group-info.component';
import { switchMap, shareReplay } from 'rxjs/operators';
import { GroupInfoPage } from '../../group-info/group-info.page';
import { Router } from '@angular/router';

import { CreateGroupComponent } from './create-group/create-group.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  searchstring = '';
  testGroups;

  constructor(
    private db: DbService,
    private auth: AuthService,
    private modal: ModalController,
    private afs: AngularFirestore,
    public navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
    this.testGroups = this.auth.user$.pipe(
      switchMap(user =>
        this.db.collection$('groups', ref =>
          ref
            .where('memberuids', 'array-contains', user.uid)
            .orderBy('displayName', 'asc')
        )
      ),
      shareReplay(1)
    );
  }

  searchuser(searchbar) {
    const start = this.searchstring;
    const end = start + '\uf8ff';
    const q = searchbar.target.value;
    if (q.trim() === '') {
      this.testGroups = this.auth.user$.pipe(
        switchMap(user =>
          this.db.collection$('groups', ref =>
            ref
              .where('memberuids', 'array-contains', user.uid)
              .orderBy('displayName', 'asc')
          )
        ),
        shareReplay(1)
      );
      return;
    }

    this.testGroups = this.auth.user$.pipe(
      switchMap(user =>
        this.db.collection$('groups', ref =>
          ref
            .where('memberuids', 'array-contains', user.uid)
            .orderBy('displayName', 'asc')
            .startAt(start)
            .endAt(end)
        )
      ),
      shareReplay(1)
    );
  }

  delete(path) {
    this.db.delete(`groups/${path}`);
    return;
  }

  async presentGroupForm() {
    const modal = await this.modal.create({
      component: CreateGroupComponent,
    });

    return await modal.present();
  }

  goToInfo(key) {
    const groupId = key ? key.id : null;
    this.router.navigate(['/group-info', {id: groupId} ]);
  }

}
