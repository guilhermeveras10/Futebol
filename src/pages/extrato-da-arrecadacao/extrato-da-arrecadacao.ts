import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';

/**
 * Generated class for the ExtratoDaArrecadacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-extrato-da-arrecadacao',
  templateUrl: 'extrato-da-arrecadacao.html',
})
export class ExtratoDaArrecadacaoPage {

  public produtos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public produtosProvider: ProdutosProvider) {
    produtosProvider.getExtratoArrecadacao().subscribe(snapshot => {
      this.produtos = snapshot.reverse();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtratoDaArrecadacaoPage');
  }

}
