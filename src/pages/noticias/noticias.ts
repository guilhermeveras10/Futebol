import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { NoticiaProvider } from '../../providers/noticia/noticia';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {
  
  public noticias: any;
  torcedor: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public noticiaProvider: NoticiaProvider) {
    noticiaProvider.getNoticia().subscribe(snapshot => {
      this.noticias = snapshot.reverse();
    });
  }
  
  detalhe(noticia: any) {
    this.navCtrl.push('DetalheNoticiaPage', { noticia: noticia });
  }

}
