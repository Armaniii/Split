import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DbService } from '../services/db.service';
import { ModalController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { SplitFormComponent } from './split-form/split-form.component';
import { SplitService } from '../services/split.service';
import { SplitInfoComponent} from './split-info/split-info.component';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map, shareReplay } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';
import { DecimalPipe } from '@angular/common';



@Component({
  selector: 'app-split',
  templateUrl: './split.page.html',
  styleUrls: ['./split.page.scss'],
})
export class SplitPage implements OnInit {
  searchstring = '';
  split;
  filtered;
  searchfilter;
  testgroup;

  start = new Subject();
  end = new Subject();
  filter = new BehaviorSubject(null);
  constructor(
    private route: ActivatedRoute,
    private db: DbService,
    private auth: AuthService,
    private modal: ModalController,
    private afs: AngularFirestore,
    private splitservice: SplitService,
    private navCtrl: NavController,
    private dec: DecimalPipe
  ) {}
  ngOnInit() {

    this.testgroup = this.auth.user$.pipe(
      switchMap(user =>
        this.db.collection$('bills', ref =>
          ref
            .where('membersuids', 'array-contains', user.uid)
            .orderBy('description', 'asc')
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
      this.testgroup = this.auth.user$.pipe(
        switchMap(user =>
          this.db.collection$('bills', ref =>
            ref
              .where('membersuids', 'array-contains', user.uid)
              .orderBy('description', 'asc')
          )
        ),
        shareReplay(1)
      );
      return;
    }

    this.testgroup = this.auth.user$.pipe(
      switchMap(user =>
        this.db.collection$('bills', ref =>
          ref
            .where('membersuids', 'array-contains', user.uid)
            .orderBy('description', 'asc')
            .startAt(start)
            .endAt(end)
        )
      ),
      shareReplay(1)
    );

  }
  delete(id) {
    const path = 'bills/' + id;
    this.db.delete(`bills/${id}`);
  }

  get_auth() {
    return this.auth;
  }

  async presentSplitForm(split?: any) {
    const modal = await this.modal.create({
      component: SplitFormComponent,
      componentProps: { split }
    });
    return await modal.present();
  }

  async presentSplitInfo(split?: any) {

    const modal = await this.modal.create({
      component: SplitInfoComponent,
      componentProps: { split }
    });
    return await modal.present();
  }

  trackById(idx, todo) {
    return todo.id;
  }

  pushBillPage() {
    this.navCtrl.navigateForward('bill');
  }

  decTrans(num): any {
    return this.dec.transform(num, '1.2-2');
  }
}
