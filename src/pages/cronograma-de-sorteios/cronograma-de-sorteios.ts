import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ProdutosProvider } from '../../providers/produtos/produtos';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cronograma-de-sorteios',
  templateUrl: 'cronograma-de-sorteios.html',
})
export class CronogramaDeSorteiosPage {
  
  public sorteios: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public sorteioProvider: ProdutosProvider) {
    sorteioProvider.getSorteios().subscribe(snapshot => {
      this.sorteios = snapshot.reverse();
    });
  }
}


