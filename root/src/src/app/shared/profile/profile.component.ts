import { Component, OnInit, Input } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input()
  user;
  

  constructor(private loadingCtrl: LoadingController) {

  }
  loading;

  ngOnInit() {
  }
  async showLoader(){
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();
  }
  async stopLoad() {
   return await this.loading.dismiss();
  }
}
