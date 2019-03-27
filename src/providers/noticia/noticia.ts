import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database/database";
import { UserProvider } from "../../providers/user/user";

/*
  Generated class for the NoticiaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoticiaProvider {
  constructor(public db: AngularFireDatabase, public authService: UserProvider) {
  }

  getNoticia() {
    let user = this.authService.getUserData();
    return this.db.list('noticias');
  }
  getVideo() {
    let user = this.authService.getUserData();
    console.log(user);
    return this.db.list('videos');
  }
}
