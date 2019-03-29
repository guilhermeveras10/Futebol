import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { JogadoresProvider } from '../../providers/jogadores/jogadores';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-elenco',
  templateUrl: 'elenco.html',
})
export class ElencoPage {
  
  public jogadores: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public jogadoresProvider: JogadoresProvider) {
    jogadoresProvider.getElenco().subscribe(snapshot => {
      this.jogadores = snapshot.reverse();
    });
  }
}


