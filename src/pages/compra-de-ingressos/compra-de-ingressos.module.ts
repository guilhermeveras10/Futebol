import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompraDeIngressosPage } from './compra-de-ingressos';

@NgModule({
  declarations: [
    CompraDeIngressosPage,
  ],
  imports: [
    IonicPageModule.forChild(CompraDeIngressosPage),
  ],
})
export class CompraDeIngressosPageModule {}
