import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalheCompraDeIngressosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-compra-de-ingressos',
  templateUrl: 'detalhe-compra-de-ingressos.html',
})
export class DetalheCompraDeIngressosPage {

  escolha: any;
  jogo: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jogo = this.navParams.data.jogo || {};
  }
  escolha1() {
    this.escolha = 1;
  }
  escolha2() {
    this.escolha = 2;
  }
  escolha3() {
    this.escolha = 3;
  }
  escolha4() {
    this.escolha = 4;
  }
  escolha5() {
    this.escolha = 5;
  }
  escolha6() {
    this.escolha = 6;
  }
  comprar() {
    if (this.escolha == 1) {

    } else if (this.escolha == 2) {

    } else if (this.escolha == 3) {
      
    } else if (this.escolha == 4) {
      
    } else if (this.escolha == 5) {
      
    } else if (this.escolha == 6) {
      
    }
  }
}
