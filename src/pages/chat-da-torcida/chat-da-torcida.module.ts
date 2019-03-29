import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatDaTorcidaPage } from './chat-da-torcida';

@NgModule({
  declarations: [
    ChatDaTorcidaPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatDaTorcidaPage),
  ],
})
export class ChatDaTorcidaPageModule {}
