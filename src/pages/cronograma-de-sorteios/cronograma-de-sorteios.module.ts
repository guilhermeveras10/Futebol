import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CronogramaDeSorteiosPage } from './cronograma-de-sorteios';

@NgModule({
  declarations: [
    CronogramaDeSorteiosPage,
  ],
  imports: [
    IonicPageModule.forChild(CronogramaDeSorteiosPage),
  ],
})
export class CronogramaDeSorteiosPageModule {}
