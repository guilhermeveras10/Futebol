import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { EnqueteProvider } from '../../providers/enquete/enquete';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enquetes',
  templateUrl: 'enquetes.html',
})
export class EnquetesPage {
  
  public enquetes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public enquetesProvider: EnqueteProvider) {
    enquetesProvider.getEnquete().subscribe(snapshot => {
      this.enquetes = snapshot.reverse();
    });
  }
}


