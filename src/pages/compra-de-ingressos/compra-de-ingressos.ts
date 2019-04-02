import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { JogodProvider } from '../../providers/jogod/jogod';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compra-de-ingressos',
  templateUrl: 'compra-de-ingressos.html',
})
export class CompraDeIngressosPage {
  
  public jogos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public ingressosProvider: JogodProvider) {
    ingressosProvider.getJogo().subscribe(snapshot => {
      this.jogos = snapshot.reverse();
    });
  }
}


