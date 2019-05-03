import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { switchMap, shareReplay } from 'rxjs/operators';
import { DbService } from '../services/db.service';
import { SplitFormComponent } from '../split/split-form/split-form.component';
import { ModalController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AddFriendComponent } from '../shared/myfriends/add-friend/add-friend.component';
import { CreateGroupComponent } from '../shared/groups/create-group/create-group.component';

// import { Plugins } from '@capacitor/core';
// const { Device } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  // device;
  testgroup;
  loading: any;
  event: any;
  constructor(private auth: AuthService,
    private db: DbService,
    private modal: ModalController,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // this.event = 'activity';
  }

  ngOnInit() {
    this.event = this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : 'activity';
  }

  get_auth() {
    return this.auth;
  }
  async gotoAddFriend() {
    const modal = await this.modal.create({
      component: AddFriendComponent,
    });
    return await modal.present();
  }

  async presentGroupForm() {
    const modal = await this.modal.create({
      component: CreateGroupComponent,
    });

    return await modal.present();
  }

  gotoBillForm() {
    this.router.navigate(['/bill']);
  }
}
