
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
    return this.db.list('jogos');
  }
  setIngressoCamprado(jogo, torcedor) {
    return this.db.list('ingressosComprados/').push({
      torcedor_nome: torcedor.nome,
      torcedor_cpf: torcedor.cpf,
      torcedor_uid: torcedor.uid,
      nome: jogo.nomeDoOponente,
      timestamp: Date.now(),
      status: "PENDENTE"
    });
  }
  setJogoArrecadacaoExtrato(jogo, valorPontos, valorIngresso) {
    let user = this.authService.getUserData();
    return this.db.list('extratoArrecadacao/' + user.uid).push({
      nome: jogo.nomeDoOponente,
      url: jogo.escudooponente,
      pontos: valorPontos,
      valorTotal: valorIngresso,
      timestamp: Date.now()
    });
  }
  setIngressoPontosExtrato(jogo, valorPontos) {
    let user = this.authService.getUserData();
    return this.db.list('extratoPontos/' + user.uid).push({
      nome: jogo.nomeDoOponente,
      url: jogo.escudooponente,
      pontos: valorPontos,
      timestamp: Date.now()
    });
  }
}
