import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalheProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-produto',
  templateUrl: 'detalhe-produto.html',
})
export class DetalheProdutoPage {

  produto: any;
  item_qty: any;
  obs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.produto = this.navParams.data.produto || {};
    this.item_qty = 1;
  }
  // increment item 
  inc() {
    this.item_qty += 1;
  }

  //decrements item

  dec() {
    if (this.item_qty - 1 < 1) {
      this.item_qty = 1;
    }
    else {
      this.item_qty -= 1;
    }
  }

  comprar() {
    
  }

}
