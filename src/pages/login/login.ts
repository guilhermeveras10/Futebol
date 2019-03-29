import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, ToastController, IonicPage } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { NoticiasPage } from '../noticias/noticias';
import { UserProvider } from "../../providers/user/user";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userInfo: any = {};
  constructor(public nav: NavController, public authService: UserProvider, public alertCtrl: AlertController,public loadingCtrl: LoadingController, public toast: ToastController) {

  }

  signup() {
    this.nav.setRoot(CadastroPage);
  }
  // go to login page
  login() {
    let loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
    loading.present();

    this.authService.login(this.userInfo.cpf, this.userInfo.password).then(authData => {
      loading.dismiss();
      this.nav.setRoot(NoticiasPage);
    }, error => {
      loading.dismiss();
      let alert = this.alertCtrl.create({
        message: 'Error, por favor tente mais tarde',
        buttons: ['OK']
      });
      alert.present();
    });
  }

}
