import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, IonicPage } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserProvider } from "../../providers/user/user";

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  userInfo: any = {};
  
  constructor(public nav: NavController, public authService: UserProvider, public alertCtrl: AlertController,public loadingCtrl: LoadingController) {}

  signup() {
    let loading = this.loadingCtrl.create({ content: 'Criando Conta...' });
    loading.present();
    this.authService.register(this.userInfo).subscribe(() => {
      loading.dismiss();
      this.alertCtrl.create({ message: 'Conta criada com sucesso', buttons: ['OK'] }).present();
    }, error => {
      loading.dismiss();
      this.alertCtrl.create({ message: error.message, buttons: ['OK'] }).present();
    });
  }

  login() {
    this.nav.setRoot(LoginPage);
  }}
