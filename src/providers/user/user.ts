import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  user: any;
  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase, ) { }

  getUserData() { // get current user data from firebase
    return this.afAuth.auth.currentUser;
  }

  getUser(id) { // get driver by id
    return this.db.object('drivers/' + id);
  }

  login(cpf, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(cpf + "@cpf.com", password); // login with email & password
  }

  logout() {
    return this.afAuth.auth.signOut();   // logout from firebase
  }

  // register new account
  register(userInfo) {
    return Observable.create(observer => {
      this.afAuth.auth.createUserWithEmailAndPassword(userInfo.cpf + "@cpf.com", userInfo.password).then((authData: any) => {
        // update driver object
        userInfo.uid = authData.uid;

        this.getUserData().updateProfile({ displayName: userInfo.name, photoURL: "../../assets/imgs/logo.png" });
        this.db.object('torcedores/' + userInfo.uid).update(userInfo);

        observer.next();
      }).catch((error: any) => {
        if (error) {
          observer.error(error);
        }
      });
    });
  }
}

