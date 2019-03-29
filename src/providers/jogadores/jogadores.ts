import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database/database";
import { UserProvider } from "../../providers/user/user";

/*
  Generated class for the EnqueteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JogadoresProvider {
  constructor(public db: AngularFireDatabase, public authService: UserProvider) {
  }

  getArtilheiro() {
    return this.db.list('artilheiros');
  }
  getElenco() {
    return this.db.list('jogadores');
  }
}
