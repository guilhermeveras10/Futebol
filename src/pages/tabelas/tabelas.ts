import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { TimesProvider } from '../../providers/times/times';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabelas',
  templateUrl: 'tabelas.html',
})
export class TabelasPage {
  
  public times: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public timesProvider: TimesProvider) {
    timesProvider.getTime().subscribe(snapshot => {
      this.times = snapshot.reverse();
    });
  }
}


