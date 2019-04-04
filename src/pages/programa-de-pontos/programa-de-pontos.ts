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
  selector: 'page-programa-de-pontos',
  templateUrl: 'programa-de-pontos.html',
})
export class ProgramaDePontosPage {
  
  public produtos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public produtosProvider: ProdutosProvider) {
    produtosProvider.getProdutosPontos().subscribe(snapshot => {
      this.produtos = snapshot.reverse();
    });
  }
  detalhe(produto: any) {

  }
}


