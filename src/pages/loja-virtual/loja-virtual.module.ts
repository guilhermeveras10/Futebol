import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LojaVirtualPage } from './loja-virtual';

@NgModule({
  declarations: [
    LojaVirtualPage,
  ],
  imports: [
    IonicPageModule.forChild(LojaVirtualPage),
  ],
})
export class LojaVirtualPageModule {}
