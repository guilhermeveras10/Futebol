import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';

/**
 * Generated class for the ExtratoDePontosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-extrato-de-pontos',
  templateUrl: 'extrato-de-pontos.html',
})
export class ExtratoDePontosPage {


  public produtos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public produtosProvider: ProdutosProvider) {
    produtosProvider.getExtratoPontos().subscribe(snapshot => {
      this.produtos = snapshot.reverse();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtratoDePontosPage');
  }

}
