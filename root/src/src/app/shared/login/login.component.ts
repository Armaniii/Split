import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signupError: any;
  reg_bool = true;
  email = '';
  constructor(public auth: AuthService, private navCtrl: NavController,
     private alertController: AlertController) {
     }

  ngOnInit() {}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Account Created',
      message: `
      <p>You brand new Split account has been created
      :)</p>
    `,
      buttons: ['OK']
    });

    return await alert.present();
  }
  async presentAlertReset() {
    const alert = await this.alertController.create({
      header: 'An email will be sent',
      message: `
      <p>If the account exists then an email will be sent.</p>
    `,
      buttons: ['OK']
    });

    return await alert.present();
  }
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Forgot Password',
      message: `<p>Enter the e-mail that is
          associated with the account in order
          to send a reset email. This will allow
          you to reset your password.</p>`,
      inputs: [
        {
          name: 'email',
          type: 'email',
          label: 'E-mail',
          placeholder: 'johnsmith@email.com'
        }
      ],
      buttons: [
        {
          text: 'Send E-mail',
          role: 'send_email',
          cssClass: 'secondary',
          handler: data => {
            this.resetPassword(data.email);
          }
        }
      ]
    });
    return await alert.present();
  }
  change_bool() {
    return this.reg_bool = true;
  }
  private signIn(email: any, password: any) {
    this.auth.signInWithEmail(email, password);
    return;
  }
  resetPassword(email) {
    this.auth.reset_password(email);
    return this.presentAlertReset();
  }
  updateUser(name) {
    // this.auth.updateProfile(name);
    console.log(this.auth.getUserData().displayName);
    return name;
  }
  resetPasswordPrompt() {
    return this.presentAlertPrompt();
  }
  signOut() {
    return this.auth.signOut();
  }
  check_user(userName, imgUrl) {
    if (this.auth.getUserData() != null) {
      this.auth.getEmailData(userName, imgUrl).then(
          () => this.presentAlert().then(
            () => this.change_bool()
          )
      );
      this.auth.updateProfile(userName, imgUrl);
      return console.log('success');
    } else {
      return console.log('error');
    }
    return console.log('success');
  }
  signUp(email: string, password: string, user_name: string) {
    const imgUrl = 'https://goo.gl/v9kRe7';
    this.auth.signUp(email, password).then(
      () => this.check_user(user_name, imgUrl)
    );
    return;
  }
}



