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
  setProdutoPontosExtrato(produto) {
    let user = this.authService.getUserData();
    return this.db.list('extratoPontos/' + user.uid).push({
      nome: produto.nome,
      url: produto.url,
      pontos: produto.pontos,
      timestamp: Date.now()
    });
  }
  setProdutoPontosPedidos(produto, torcedor) {
    return this.db.list('pedidosFeitosParaRetirarNaLoja/').push({
      torcedor_nome: torcedor.nome,
      torcedor_cpf: torcedor.cpf,
      torcedor_uid: torcedor.uid,
      nome: produto.nome,
      url: produto.url,
      pontos: produto.pontos,
      timestamp: Date.now(),
      status: "PENDENTE"
    });
  }

  setProdutoPedidosCasa(produto, torcedor) {
    return this.db.list('pedidosFeitosParaEntregar/').push({
      torcedor_nome: torcedor.nome,
      torcedor_cpf: torcedor.cpf,
      torcedor_uid: torcedor.uid,
      nome: produto.nome,
      url: produto.url,
      pontos: produto.pontos,
      timestamp: Date.now(),
      status: "PENDENTE"
    });
  }
  setProdutoArrecadacaoExtrato(produto, valorString) {
    let user = this.authService.getUserData();
    return this.db.list('extratoArrecadacao/' + user.uid).push({
      nome: produto.nome,
      url: produto.url,
      pontos: produto.pontos,
      valor: produto.valor,
      valorTotal: valorString,
      timestamp: Date.now()
    });
  }
  getExtratoPontos() {
    let user = this.authService.getUserData();
    return this.db.list('extratoPontos/' + user.uid);
  }
  getExtratoArrecadacao() {
    let user = this.authService.getUserData();
    return this.db.list('extratoArrecadacao/' + user.uid);
  }
}
