import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheCompraDeIngressosPage } from './detalhe-compra-de-ingressos';

@NgModule({
  declarations: [
    DetalheCompraDeIngressosPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheCompraDeIngressosPage),
  ],
})
export class DetalheCompraDeIngressosPageModule {}
