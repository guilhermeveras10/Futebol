import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database/database";
import { UserProvider } from "../../providers/user/user";

/*
  Generated class for the EnqueteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SocioProvider {
  constructor(public db: AngularFireDatabase, public authService: UserProvider) {
  }

  getJogo() {
    return this.db.list('jogos');
  }
}
