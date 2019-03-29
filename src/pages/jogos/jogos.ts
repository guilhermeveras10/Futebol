import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { JogodProvider } from '../../providers/jogod/jogod';

/**
 * Generated class for the JogosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jogos',
  templateUrl: 'jogos.html',
})
export class JogosPage {

  public jogos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public jogoProvider: JogodProvider) {
    jogoProvider.getJogo().subscribe(snapshot => {
      this.jogos = snapshot.reverse();
      console.log(this.jogos);
    });
  }
  

}
