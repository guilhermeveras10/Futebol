import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramaDePontosPage } from './programa-de-pontos';

@NgModule({
  declarations: [
    ProgramaDePontosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgramaDePontosPage),
  ],
})
export class ProgramaDePontosPageModule {}
