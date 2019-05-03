import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import 'rxjs/add/operator/toPromise';
import { FcmService } from '../services/fcm.service';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  signupError: any;
  reg_bool = true;
  tmp;
  docData$;
  constructor(public auth: AuthService, private navCtrl: NavController,
      private alertController: AlertController, public fcm: FcmService,
      private db: DbService, ) { }

  ngOnInit() {
    this.docData$ = this.db.doc$(`users/${this.auth.getUserData().uid}`);
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Upload Picture',
    inputs: [
      {
        name: 'imageUrl',
        type: 'text',
        label: 'Enter URL',
        placeholder: 'https://sauldesigns.me/image/avatar.png'
      }
    ],
    buttons: [
      {
        text: 'Submit',
        role: 'submit',
        cssClass: 'secondary',
        handler: data => {
          this.updateUrl(data.imageUrl);
        }
      }
    ]
    });
    return await alert.present();

  }
  async presentAlertChangeName() {
    const alert = await this.alertController.create({
      header: 'Change Name',
      message: 'Enter the new name in order to update profile',
    inputs: [
      {
        name: 'name',
        type: 'text',
        label: 'Enter Name:',
        placeholder: 'John Smith'
      }
    ],
    buttons: [
      {
        text: 'Submit',
        role: 'submit',
        cssClass: 'secondary',
        handler: data => {
          this.updateName(data.name);
        }
      }
    ]
    });
    return await alert.present();

  }
  updateName(newName) {
    const user = this.auth.getUserData();
    const imgUrl = user.photoURL;

    this.updateUser(newName, imgUrl);
    this.auth.updateEmailData(newName, imgUrl);
    return;
  }
  updateUrl(imgUrl) {
    const user = this.auth.getUserData();
    this.auth.updateProfile(user.displayName, imgUrl).then(() =>
    this.auth.updateEmailData(user.displayName, imgUrl));
    return;
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Delete Account!',
      message: `<p>Are you sure you want to
      <stong>delete</strong> the account?</p>`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Delete',
          handler: () => {
            this.auth.delete();
          }
        }
      ]
    });
    return await alert.present();
  }
  async presentAlertReset() {
    const alert = await this.alertController.create({
      header: 'E-mail Sent',
      message: `<p>E-mail that allows you to reset
      password has been sent.</p>`,
      buttons: [
        {
          text: 'Okay',
          role: 'okay',
          cssClass: 'secondary',
          handler: () => {
            console.log('e-mail sent');
          }
        }
      ]
    });
    return await alert.present();
  }
  reset_password(email) {
    this.auth.reset_password(email).then( () =>
      this.presentAlertReset()
    );
  }
  updateUser(disName, imgUrl) {
    this.auth.updateProfile(disName, imgUrl);
    this.auth.updateEmailData(disName, imgUrl);
    return disName;
  }
  get_user() {
    return this.auth.user$;
  }
  get_auth() {
    return this.auth;
  }

  changeProfile() {
    const user = this.auth.getUserData();
  }

  // FCM --------------------------------------------------------------------
  getPermission(key?: any) {
    this.fcm.getPermission().subscribe();
  }

  pushNotifications(val?: any) {
    let pushbool;
    if (val === 'false') {
      pushbool = 'true';
      this.fcm.sub('discounts');
    } else {
      pushbool = 'false';
      this.fcm.unsub('discounts');
    }
    const data = {
      status: pushbool
    }
    this.db.updateAt(`users/${this.auth.getUserData().uid}`, data);
  }

  randomDiscount() {
    const random = Math.round(Math.random() * 100);

    const headline = `New Features Have Been Added, Go Update The App!`;

    this.db.updateAt('discounts', { headline });
  }

}
