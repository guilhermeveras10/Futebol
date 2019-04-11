import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PayPal, PayPalPayment, PayPalConfiguration, PayPalPaymentDetails } from '@ionic-native/paypal';
import { ProdutosProvider } from '../../providers/produtos/produtos';

import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the DetalheProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-produto',
  templateUrl: 'detalhe-produto.html',
})
export class DetalheProdutoPage {

  produto: any;
  item_qty: any;
  freteCasa: any;
  obs: any;
  valor: any;
  valorString: any;
  torcedor: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private payPal: PayPal, public produtosProvider: ProdutosProvider, private authProvider: UserProvider, public toastCtrl: ToastController) {
    this.produto = this.navParams.data.produto || {};
    this.item_qty = 1;
    this.freteCasa = 0;
    authProvider.getTorcedor().subscribe(snapshot => {
      this.torcedor = snapshot;
    });
  }
  // increment item 
  inc() {
    this.item_qty += 1;
  }

  //decrements item

  dec() {
    if (this.item_qty - 1 < 1) {
      this.item_qty = 1;
    }
    else {
      this.item_qty -= 1;
    }
  }

  comprar() {
    if (this.freteCasa == 1) {
      // pagamento com o valor do frete
      this.valor = parseFloat(this.produto.valor) + parseFloat("38.00");
      this.valorString = this.valor * this.item_qty;
      console.log(this.valorString);
      this.torcedor.pontos = parseInt(this.torcedor.pontos) + parseInt(this.produto.pontos);
      this.authProvider.getTorcedor().update(this.torcedor).then(data => {
        this.produtosProvider.setProdutoPontosExtrato(this.produto).then(() => {
          this.produtosProvider.setProdutoArrecadacaoExtrato(this.produto, this.valorString).then(() => {
            this.produtosProvider.setProdutoPedidosCasa(this.produto, this.torcedor).then(() => {
              this.displayToast("O produto chegará em sua casa")
            });
          });
        });
      });
      // this.payPal.init({
      //   PayPalEnvironmentProduction: '',
      //   PayPalEnvironmentSandbox: 'AdFooVoJD-JJTRxolApqxaIUajuYMG8TGYpwvl5ngeBer7xdF1Or4eZCOFOATlnv6efysAlQW13NPNTe'
      // }).then(() => {
      //   this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
      //     acceptCreditCards: true,
      //     languageOrLocale: 'pt-BR',
      //     merchantName: 'Produto',
      //     merchantPrivacyPolicyURL: '',
      //     merchantUserAgreementURL: ''
      //   })).then(() => {
      //     let detail = new PayPalPaymentDetails(this.valorString, '0.00', '0.00');
      //     let payment = new PayPalPayment(this.valorString, 'BRL', 'Produto', 'Sale', detail);
      //     this.payPal.renderSinglePaymentUI(payment).then((response) => {
      //       console.log('pagamento efetuado')
      //     }, () => {
      //       console.log('erro ao renderizar o pagamento do paypal');
      //     })
      //   })
      // })
    } else {
      // pagamento sem o valor do frete
      this.valor = parseFloat(this.produto.valor);
      this.valorString = this.valor * this.item_qty;
      console.log(this.valorString);
      this.torcedor.pontos = parseInt(this.torcedor.pontos) + parseInt(this.produto.pontos);
      this.authProvider.getTorcedor().update(this.torcedor).then(data => {
        this.produtosProvider.setProdutoPontosExtrato(this.produto).then(() => {
          this.produtosProvider.setProdutoArrecadacaoExtrato(this.produto, this.valorString).then(() => {
            this.produtosProvider.setProdutoPontosPedidos(this.produto, this.torcedor).then(() => {
              this.displayToast("Retire seu produto na loja")
            });
          });
        });
      });
      // this.payPal.init({
      //   PayPalEnvironmentProduction: '',
      //   PayPalEnvironmentSandbox: 'AclR1cpW1qryGYUXNAJtOtDU6b-h5F-3CNQ6WW-VXtz6BB3uMXMzjjba_fMgzaCWZYm-Nmznllb8rYKE'
      // }).then(() => {
      //   this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
      //     acceptCreditCards: true,
      //     languageOrLocale: 'pt-BR',
      //     merchantName: 'Produto',
      //     merchantPrivacyPolicyURL: '',
      //     merchantUserAgreementURL: ''
      //   })).then(() => {
      //     let detail = new PayPalPaymentDetails(this.valorString, '0.00', '0.00');
      //     let payment = new PayPalPayment(this.valorString, 'BRL', 'Produto', 'Sale', detail);
      //     this.payPal.renderSinglePaymentUI(payment).then((response) => {

      //       this.torcedor.pontos = this.torcedor.pontos + this.produto.pontos;
      //       this.authProvider.getTorcedor().update(this.torcedor).then(data => {
      //         this.produtosProvider.setProdutoPontosExtrato(this.produto).then(() => {
      //           this.produtosProvider.setProdutoArrecadacaoExtrato(this.produto).then(() => {
      //             this.produtosProvider.setProdutoPontosPedidos(this.produto, this.torcedor).then(() => {
      //               this.displayToast("Retire seu produto na loja")
      //             });
      //           });
      //         });
      //       });

      //     }, () => {
      //       this.displayToast("erro ao renderizar o pagamento do paypal")
      //     })
      //   })
      // })
    }
  }

  frete() {
    if (this.freteCasa == 1) {
      this.freteCasa = 0;
    } else {
      this.freteCasa = 1;
    }
  }

  displayToast(message) {
    this.toastCtrl.create({ duration: 2000, message }).present();
  }
}
