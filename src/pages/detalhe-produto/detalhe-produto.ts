import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PayPal, PayPalPayment, PayPalConfiguration, PayPalPaymentDetails } from '@ionic-native/paypal';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private payPal: PayPal) {
    this.produto = this.navParams.data.produto || {};
    this.item_qty = 1;
    this.freteCasa = 0;
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
      console.log(this.valor * this.item_qty);
      this.payPal.init({
        PayPalEnvironmentProduction: '',
        PayPalEnvironmentSandbox: 'AdFooVoJD-JJTRxolApqxaIUajuYMG8TGYpwvl5ngeBer7xdF1Or4eZCOFOATlnv6efysAlQW13NPNTe'
      }).then(() => {
        this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
          acceptCreditCards: true,
          languageOrLocale: 'pt-BR',
          merchantName: 'CanalDoAbranches',
          merchantPrivacyPolicyURL: '',
          merchantUserAgreementURL: ''
        })).then(() => {
          let detail = new PayPalPaymentDetails('19.99', '0.00', '0.00');
          let payment = new PayPalPayment('19.99', 'BRL', 'CanalDoAbranches', 'Sale', detail);
          this.payPal.renderSinglePaymentUI(payment).then((response) => {
            console.log('pagamento efetuado')
          }, () => {
            console.log('erro ao renderizar o pagamento do paypal');
          })
        })
      })
    } else {
      // pagamento sem o valor do frete
      this.valor = parseFloat(this.produto.valor);
      console.log(this.valor * this.item_qty);
      this.payPal.init({
        PayPalEnvironmentProduction: '',
        PayPalEnvironmentSandbox: 'AclR1cpW1qryGYUXNAJtOtDU6b-h5F-3CNQ6WW-VXtz6BB3uMXMzjjba_fMgzaCWZYm-Nmznllb8rYKE'
      }).then(() => {
        this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
          acceptCreditCards: true,
          languageOrLocale: 'pt-BR',
          merchantName: 'CanalDoAbranches',
          merchantPrivacyPolicyURL: '',
          merchantUserAgreementURL: ''
        })).then(() => {
          let detail = new PayPalPaymentDetails('19.99', '0.00', '0.00');
          let payment = new PayPalPayment('19.99', 'BRL', 'CanalDoAbranches', 'Sale', detail);
          this.payPal.renderSinglePaymentUI(payment).then((response) => {
            console.log('pagamento efetuado')
          }, () => {
            console.log('erro ao renderizar o pagamento do paypal');
          })
        })
      })
    }
  }

  frete() {
    if (this.freteCasa == 1) {
      this.freteCasa = 0;
    } else {
      this.freteCasa = 1;
    }
  }

}
