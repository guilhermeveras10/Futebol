import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ProdutosProvider } from '../../providers/produtos/produtos';

import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-programa-de-pontos',
  templateUrl: 'programa-de-pontos.html',
})
export class ProgramaDePontosPage {

  public produtos: any;
  torcedor: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public produtosProvider: ProdutosProvider, private authProvider: UserProvider, public toastCtrl: ToastController) {
    produtosProvider.getProdutosPontos().subscribe(snapshot => {
      this.produtos = snapshot.reverse();
    });
    authProvider.getTorcedor().subscribe(snapshot => {
      this.torcedor = snapshot;
    });
  }
  comprar(produto: any) {
    if (this.torcedor.pontos < produto.pontos) {
      this.displayToast("Sua quantidade de pontos é insuficiente")
    } else {
      this.torcedor.pontos = this.torcedor.pontos - produto.pontos;
      this.authProvider.getTorcedor().update(this.torcedor).then(data => {
        this.produtosProvider.setProdutoPontosExtrato(produto).then(() => {
          this.produtosProvider.setProdutoPontosPedidos(produto, this.torcedor).then(() => {
            this.displayToast("Retire seu produto na loja")
          });
        });
      });
    }
  }
  extrato() {
    this.navCtrl.push('ExtratoDePontosPage');
  }

  displayToast(message) {
    this.toastCtrl.create({ duration: 2000, message }).present();
  }
}


