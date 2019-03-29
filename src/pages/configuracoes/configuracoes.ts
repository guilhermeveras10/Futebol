import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {
  user:any = { };

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: UserProvider, public toastCtrl: ToastController) {
    let userx = navParams.get('user');
    this.authProvider.getUser(userx.uid).take(1).subscribe(snapshot => {
      snapshot.uid = snapshot.$key;
      this.user = snapshot;
    });
  }
  
  atualizar() {
    console.log(this.user);
    this.authProvider.getUser(this.user.uid).update(this.user).then(data => {
      this.displayToast("Atualizado com sucesso")
    });
  }

  displayToast(message) {
    this.toastCtrl.create({ duration: 2000, message }).present();
  }
}
