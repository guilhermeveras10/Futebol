import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
import { AngularFireAuth } from "angularfire2/auth/auth";
import { LoginPage } from '../pages/login/login';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';

import { UserProvider } from '../providers/user/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  torcedor: any;
  rootPage: any;
  user = {};

  pages: Array<{ title: string, component: any }>;
  pagesTorcedor: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private authProvider: UserProvider, public afAuth: AngularFireAuth) {
 
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // check for login stage, then redirect
      afAuth.authState.take(1).subscribe(authData => {
        if (authData) {
          this.nav.setRoot(TabelasPage);
        } else {
          this.nav.setRoot(LoginPage);
        }
      });

      // get user data
      afAuth.authState.subscribe(authData => {
        console.log(authData);
        if (authData) {
          this.user = authProvider.getUserData();

          // get user info from service
          authProvider.setUser(this.user);
          authProvider.getTorcedor().subscribe(snapshot => {
            this.torcedor = snapshot;
          });
        } else {
          this.torcedor = null;
        }
      });
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Notícias', component: NoticiasPage },
      { title: 'Vídeos', component: VideosPage },
      { title: 'Tabelas', component: TabelasPage },
      { title: 'Jogos', component: JogosPage },
      { title: 'Estatísticas', component: EstatisticasPage },
      { title: 'Elenco', component: ElencoPage },
      { title: 'Minha Escalação', component: MinhaEscalacaoPage },
      { title: 'História do Clube', component: HistoriaDoClubePage },
      { title: 'Chat da Torcida', component: ChatDaTorcidaPage },
      { title: 'Enquetes', component: EnquetesPage },
      { title: 'Redes Sociais', component: RedesSociaisPage },
      { title: 'Loja virtual', component: LojaVirtualPage },
      { title: 'Compra de Ingressos', component: CompraDeIngressosPage },
      { title: 'Seja Sócio', component: SejaSocioPage }
    ];

    this.pagesTorcedor = [
      { title: 'Ajude o Clube', component: AjudeOClubePage },
      { title: 'Extrato de arrecadação', component: ExtratoDaArrecadacaoPage },
      { title: 'Programa de Pontos', component: ProgramaDePontosPage },
      { title: 'Cronograma de Sorteios', component: CronogramaDeSorteiosPage }
    ];

  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.authProvider.logout();
    this.nav.setRoot('LoginPage');
  }

  config() {
    this.nav.setRoot(ConfiguracoesPage, {
      user: this.user
    });
  }
}
