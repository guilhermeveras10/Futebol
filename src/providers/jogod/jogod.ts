
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database/database";
import { UserProvider } from "../../providers/user/user";

/*
  Generated class for the JogodProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JogodProvider {

  constructor(public db: AngularFireDatabase, public authService: UserProvider) {
  }

  getJogo() {
    let user = this.authService.getUserData();
    console.log(user);
    return this.db.list('jogos');
  }
}
