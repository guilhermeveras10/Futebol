import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { NoticiasPage } from '../pages/noticias/noticias';
import { VideosPage } from '../pages/videos/videos';
import { TabelasPage } from '../pages/tabelas/tabelas';
import { JogosPage } from '../pages/jogos/jogos';
import { EstatisticasPage } from '../pages/estatisticas/estatisticas';
import { ElencoPage } from '../pages/elenco/elenco';
import { MinhaEscalacaoPage } from '../pages/minha-escalacao/minha-escalacao';
import { HistoriaDoClubePage } from '../pages/historia-do-clube/historia-do-clube';
import { ChatDaTorcidaPage } from '../pages/chat-da-torcida/chat-da-torcida';
import { EnquetesPage } from '../pages/enquetes/enquetes';
import { RedesSociaisPage } from '../pages/redes-sociais/redes-sociais';
import { LojaVirtualPage } from '../pages/loja-virtual/loja-virtual';
import { CompraDeIngressosPage } from '../pages/compra-de-ingressos/compra-de-ingressos';
import { SejaSocioPage } from '../pages/seja-socio/seja-socio';
import { AjudeOClubePage } from '../pages/ajude-o-clube/ajude-o-clube';
import { ExtratoDaArrecadacaoPage } from '../pages/extrato-da-arrecadacao/extrato-da-arrecadacao';
import { ProgramaDePontosPage } from '../pages/programa-de-pontos/programa-de-pontos';
import { CronogramaDeSorteiosPage } from '../pages/cronograma-de-sorteios/cronograma-de-sorteios';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { LoginPage } from '../pages/login/login';
import { DetalheNoticiaPage } from '../pages/detalhe-noticia/detalhe-noticia';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// Import your library
import { IonMaskModule } from '@pluritech/ion-mask';
// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { StreamingMedia } from '@ionic-native/streaming-media';
// Import moment module
import { MomentModule } from 'angular2-moment';
import { DetalheNoticiaPageModule } from '../pages/detalhe-noticia/detalhe-noticia.module';
import { LoginPageModule } from '../pages/login/login.module';
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module';
// import providers
import { UserProvider } from '../providers/user/user';
import { JogadoresProvider } from '../providers/jogadores/jogadores';
import { NoticiaProvider } from '../providers/noticia/noticia';
import { JogodProvider } from '../providers/jogod/jogod';
import { TimesProvider } from '../providers/times/times';
import { EnquetesPageModule } from '../pages/enquetes/enquetes.module';
import { EnqueteProvider } from '../providers/enquete/enquete';

export const firebaseConfig = {
  apiKey: "AIzaSyDHeksMw52dDwN9ULGTSjD1567Z8ykEA1c",
    authDomain: "patrociniopremiado-ddabd.firebaseapp.com",
    databaseURL: "https://patrociniopremiado-ddabd.firebaseio.com",
    projectId: "patrociniopremiado-ddabd",
    storageBucket: "patrociniopremiado-ddabd.appspot.com",
    messagingSenderId: "144670116619"
};


@NgModule({
  declarations: [
    MyApp,
    NoticiasPage,
    VideosPage,
    TabelasPage,
    JogosPage,
    EstatisticasPage,
    ElencoPage,
    MinhaEscalacaoPage,
    HistoriaDoClubePage,
    ChatDaTorcidaPage,
    RedesSociaisPage,
    LojaVirtualPage,
    CompraDeIngressosPage,
    SejaSocioPage,
    AjudeOClubePage,
    ExtratoDaArrecadacaoPage,
    ProgramaDePontosPage,
    CronogramaDeSorteiosPage,
    CadastroPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MomentModule,
    IonicModule.forRoot(MyApp),
    DetalheNoticiaPageModule,
    ConfiguracoesPageModule,
    LoginPageModule,
    EnquetesPageModule,
    IonMaskModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NoticiasPage,
    VideosPage,
    TabelasPage,
    JogosPage,
    EstatisticasPage,
    ElencoPage,
    MinhaEscalacaoPage,
    HistoriaDoClubePage,
    ChatDaTorcidaPage,
    EnquetesPage,
    RedesSociaisPage,
    LojaVirtualPage,
    CompraDeIngressosPage,
    SejaSocioPage,
    AjudeOClubePage,
    ExtratoDaArrecadacaoPage,
    ProgramaDePontosPage,
    CronogramaDeSorteiosPage,
    CadastroPage,
    LoginPage,
    DetalheNoticiaPage,
    ConfiguracoesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StreamingMedia,
    UserProvider,
    NoticiaProvider,
    EnqueteProvider,
    JogadoresProvider,
    TimesProvider,
    JogodProvider
  ]
})
export class AppModule {}
