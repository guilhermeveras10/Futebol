import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database/database";
import { UserProvider } from "../../providers/user/user";

/*
  Generated class for the EnqueteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutosProvider {
  constructor(public db: AngularFireDatabase, public authService: UserProvider) {
  }

  getProdutosLoja() {
    return this.db.list('produtosLoja');
  }
  getProdutosPontos() {
    return this.db.list('produtosPontos');
  }
  getSorteios() {
    return this.db.list('sorteios');
  }
}
