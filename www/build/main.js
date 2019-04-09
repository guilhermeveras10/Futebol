webpackJsonp([17],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_database__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the NoticiaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NoticiaProvider = (function () {
    function NoticiaProvider(db, authService) {
        this.db = db;
        this.authService = authService;
    }
    NoticiaProvider.prototype.getNoticia = function () {
        return this.db.list('noticias');
    };
    NoticiaProvider.prototype.getVideo = function () {
        return this.db.list('videos');
    };
    NoticiaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
    ], NoticiaProvider);
    return NoticiaProvider;
}());

//# sourceMappingURL=noticia.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JogadoresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_database__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the EnqueteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var JogadoresProvider = (function () {
    function JogadoresProvider(db, authService) {
        this.db = db;
        this.authService = authService;
    }
    JogadoresProvider.prototype.getArtilheiro = function () {
        return this.db.list('artilheiros');
    };
    JogadoresProvider.prototype.getElenco = function () {
        return this.db.list('jogadores');
    };
    JogadoresProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
    ], JogadoresProvider);
    return JogadoresProvider;
}());

//# sourceMappingURL=jogadores.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquetesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_enquete_enquete__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnquetesPage = (function () {
    function EnquetesPage(navCtrl, navParams, http, enquetesProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.enquetesProvider = enquetesProvider;
        enquetesProvider.getEnquete().subscribe(function (snapshot) {
            _this.enquetes = snapshot.reverse();
        });
    }
    EnquetesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-enquetes',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/enquetes/enquetes.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Enquetes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row>\n          <ion-card *ngFor="let enquete of enquetes">\n              <div class="titulo">{{enquete.titulo}}</div>\n              <img class="opcao1Img" src="../../assets/imgs/circulo.png" style="width:30px;height:30px;">\n              <div class="opcao1">{{enquete.opcao1}}</div>\n              <img class="opcao2Img" src="../../assets/imgs/circulo.png" style="width:30px;height:30px;">\n              <div class="opcao2">{{enquete.opcao2}}</div>\n              <img class="opcao3Img" src="../../assets/imgs/circulo.png" style="width:30px;height:30px;">\n              <div class="opcao3">{{enquete.opcao3}}</div>\n              <img class="opcao4Img" src="../../assets/imgs/circulo.png" style="width:30px;height:30px;">\n              <div class="opcao4">{{enquete.opcao4}}</div>\n            </ion-card>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/enquetes/enquetes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_enquete_enquete__["a" /* EnqueteProvider */]])
    ], EnquetesPage);
    return EnquetesPage;
}());

//# sourceMappingURL=enquetes.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfiguracoesPage = (function () {
    function ConfiguracoesPage(navCtrl, navParams, authProvider, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.toastCtrl = toastCtrl;
        this.user = {};
        var userx = navParams.get('user');
        this.authProvider.getUser(userx.uid).take(1).subscribe(function (snapshot) {
            snapshot.uid = snapshot.$key;
            _this.user = snapshot;
        });
    }
    ConfiguracoesPage.prototype.atualizar = function () {
        var _this = this;
        console.log(this.user);
        this.authProvider.getUser(this.user.uid).update(this.user).then(function (data) {
            _this.displayToast("Atualizado com sucesso");
        });
    };
    ConfiguracoesPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ duration: 2000, message: message }).present();
    };
    ConfiguracoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-configuracoes',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/configuracoes/configuracoes.html"*/'<!--\n  Generated template for the ConfiguracoesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{user.nome}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div style="text-align:center">\n    <img src="../../assets/imgs/logo.png" style="width:80px;height:80px;">\n  </div>\n  <h6 class="h6">Nome</h6>\n  <ion-input type="text" placeholder="José" [(ngModel)]="user.nome"></ion-input>\n  <h6 class="h6">CEP</h6>\n  <ion-input type="text" placeholder="99.999-999" [(ngModel)]="user.cep"></ion-input>\n  <h6 class="h6">Endereço</h6>\n  <ion-input type="text" placeholder="Rua Conceição" [(ngModel)]="user.endereco"></ion-input>\n  <h6 class="h6">Número</h6>\n  <ion-input type="text" placeholder="999" [(ngModel)]="user.numero"></ion-input>\n  <h6 class="h6">Complemento</h6>\n  <ion-input type="text" placeholder="apto. 99 bloco 9" [(ngModel)]="user.complemento"></ion-input>\n  <h6 class="h6">Telefone</h6>\n  <ion-input type="text" placeholder="(11) 9 9999-9999" [(ngModel)]="user.telefone"></ion-input>\n  <h6 class="h6">Senha</h6>\n  <ion-input type="password" placeholder="Mínimo de 6 caracteres" [(ngModel)]="user.password"></ion-input>\n  <br>\n  <div style="text-align:center">\n    <button ion-button padding round color="vermelhoEscuro" (click)="atualizar()">Confirma</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/configuracoes/configuracoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], ConfiguracoesPage);
    return ConfiguracoesPage;
}());

//# sourceMappingURL=configuracoes.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LojaVirtualPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_produtos_produtos__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LojaVirtualPage = (function () {
    function LojaVirtualPage(navCtrl, navParams, http, produtosProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.produtosProvider = produtosProvider;
        produtosProvider.getProdutosLoja().subscribe(function (snapshot) {
            _this.produtos = snapshot.reverse();
        });
    }
    LojaVirtualPage.prototype.detalhe = function (produto) {
        this.navCtrl.push('DetalheProdutoPage', { produto: produto });
    };
    LojaVirtualPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loja-virtual',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/loja-virtual/loja-virtual.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Loja virtual</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col *ngFor="let produto of produtos" col-5 (click)="detalhe(produto)">\n            <ion-card>\n                <div style="text-align:center">\n                    <img src="{{produto.url}}" style="width:130px;height:130px;">\n                  </div>\n              <div class="nome">{{produto.nome}}</div>\n              <div class="valor">R$ {{produto.valor}}</div>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/loja-virtual/loja-virtual.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_produtos_produtos__["a" /* ProdutosProvider */]])
    ], LojaVirtualPage);
    return LojaVirtualPage;
}());

//# sourceMappingURL=loja-virtual.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjudeOClubePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AjudeOClubePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AjudeOClubePage = (function () {
    function AjudeOClubePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AjudeOClubePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AjudeOClubePage');
    };
    AjudeOClubePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ajude-o-clube',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/ajude-o-clube/ajude-o-clube.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ajude o clube</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/ajude-o-clube/ajude-o-clube.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AjudeOClubePage);
    return AjudeOClubePage;
}());

//# sourceMappingURL=ajude-o-clube.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompraDeIngressosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_jogod_jogod__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompraDeIngressosPage = (function () {
    function CompraDeIngressosPage(navCtrl, navParams, http, ingressosProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.ingressosProvider = ingressosProvider;
        ingressosProvider.getJogo().subscribe(function (snapshot) {
            _this.jogos = snapshot.reverse();
        });
    }
    CompraDeIngressosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-compra-de-ingressos',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/compra-de-ingressos/compra-de-ingressos.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ingressos</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n      <ion-row>\n        <ion-card *ngFor="let jogo of jogos">\n          <div class="data" style="text-align:center">{{jogo.dataDoJogo}}</div>\n          <div class="campeonato" style="text-align:center">{{jogo.nomeDoCampeonato}}</div>\n          <div class="nomeDoMeuTime">{{jogo.nomeDoTime}}</div>\n          <img class="meuescudo" src="{{jogo.meuescudo}}" style="width:20px;height:25px;" />\n          <div class="minhaQuantidadeDeGols">X</div>\n          <img class="escudoOponente" src="{{jogo.escudooponente}}" style="width: 20px;height: 25px;" />\n          <div class="nomeDoOponente">{{jogo.nomeDoOponente}}</div>\n          <button class="button" ion-button padding round color="dark" (click)="detalhes()">Comprar Ingresso</button>\n        </ion-card>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/compra-de-ingressos/compra-de-ingressos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_jogod_jogod__["a" /* JogodProvider */]])
    ], CompraDeIngressosPage);
    return CompraDeIngressosPage;
}());

//# sourceMappingURL=compra-de-ingressos.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroPage = (function () {
    function CadastroPage(nav, authService, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userInfo = {};
    }
    CadastroPage.prototype.signup = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Criando Conta...' });
        loading.present();
        this.authService.register(this.userInfo).subscribe(function () {
            loading.dismiss();
            _this.alertCtrl.create({ message: 'Conta criada com sucesso', buttons: ['OK'] }).present();
        }, function (error) {
            loading.dismiss();
            _this.alertCtrl.create({ message: error.message, buttons: ['OK'] }).present();
        });
    };
    CadastroPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cadastro',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/cadastro/cadastro.html"*/'<!--\n  Generated template for the CadastroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <div style="text-align:center">\n    <img src="../../assets/imgs/logo.png" style="width:150px;height:180px;">\n  </div>\n  <h6 class="h6">Nome</h6>\n  <ion-input type="text" placeholder="José" [(ngModel)]="userInfo.nome"></ion-input>\n  <h6 class="h6">CPF</h6>\n  <ion-input type="text" placeholder="xxx.xxx.xxx-xx" [(ngModel)]="userInfo.cpf"></ion-input>\n  <h6 class="h6">Senha</h6>\n  <ion-input type="password" placeholder="Mínimo de 6 caracteres" [(ngModel)]="userInfo.password"></ion-input>\n  <br>\n  <div style="text-align:center">\n    <button ion-button padding round color="vermelhoEscuro" (click)="signup()">Cadastrar</button>\n    <br>\n    <br>\n    <br>\n    <button class="button" ion-button padding round color="amareloEscuro" (click)="login()">Login</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/cadastro/cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CronogramaDeSorteiosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_produtos_produtos__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CronogramaDeSorteiosPage = (function () {
    function CronogramaDeSorteiosPage(navCtrl, navParams, http, sorteioProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.sorteioProvider = sorteioProvider;
        sorteioProvider.getSorteios().subscribe(function (snapshot) {
            _this.sorteios = snapshot.reverse();
        });
    }
    CronogramaDeSorteiosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cronograma-de-sorteios',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/cronograma-de-sorteios/cronograma-de-sorteios.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cronograma</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/cronograma-de-sorteios/cronograma-de-sorteios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_produtos_produtos__["a" /* ProdutosProvider */]])
    ], CronogramaDeSorteiosPage);
    return CronogramaDeSorteiosPage;
}());

//# sourceMappingURL=cronograma-de-sorteios.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElencoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_jogadores_jogadores__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ElencoPage = (function () {
    function ElencoPage(navCtrl, navParams, http, jogadoresProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.jogadoresProvider = jogadoresProvider;
        jogadoresProvider.getElenco().subscribe(function (snapshot) {
            _this.jogadores = snapshot.reverse();
        });
    }
    ElencoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-elenco',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/elenco/elenco.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Elenco</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let jogador of jogadores" col-5 (click)="detalhe(noticia)">\n        <ion-card class="col6">\n          <img src="{{jogador.url}}" />\n          <div class="nome">{{jogador.nome}}</div>\n          <div class="sobrenome">{{jogador.sobrenome}}</div>\n          <div class="posicao">{{jogador.posicao}}</div>\n          <div class="nascimento">{{jogador.nascimento}} ({{jogador.idade}})</div>\n          <div class="de">{{jogador.localdenascimento}}</div>\n          <div class="nacionalidade">{{jogador.nacionalidade}}</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/elenco/elenco.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_jogadores_jogadores__["a" /* JogadoresProvider */]])
    ], ElencoPage);
    return ElencoPage;
}());

//# sourceMappingURL=elenco.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatDaTorcidaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatDaTorcidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatDaTorcidaPage = (function () {
    function ChatDaTorcidaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatDaTorcidaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatDaTorcidaPage');
    };
    ChatDaTorcidaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat-da-torcida',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/chat-da-torcida/chat-da-torcida.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Chat</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/chat-da-torcida/chat-da-torcida.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ChatDaTorcidaPage);
    return ChatDaTorcidaPage;
}());

//# sourceMappingURL=chat-da-torcida.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstatisticasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_jogadores_jogadores__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstatisticasPage = (function () {
    function EstatisticasPage(navCtrl, navParams, http, jogadoresProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.jogadoresProvider = jogadoresProvider;
        jogadoresProvider.getArtilheiro().subscribe(function (snapshot) {
            _this.jogadores = snapshot.reverse();
        });
    }
    EstatisticasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-estatisticas',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/estatisticas/estatisticas.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Estatística</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n    <div class="artilheiros">Artilheiros</div>\n  <ion-grid>\n    <ion-row *ngFor="let jogador of jogadores">\n        <ion-card class="col6">\n          <img src="{{jogador.url}}" />\n          <div class="nome">{{jogador.nome}}</div>\n          <div class="sobrenome">{{jogador.sobrenome}}</div>\n          <div class="posicao">{{jogador.posicao}}</div>\n          <div class="gols">{{jogador.gols}}</div>\n          <div class="de">{{jogador.localdenascimento}}</div>\n          <div class="nacionalidade">{{jogador.nacionalidade}}</div>\n        </ion-card>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/estatisticas/estatisticas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_jogadores_jogadores__["a" /* JogadoresProvider */]])
    ], EstatisticasPage);
    return EstatisticasPage;
}());

//# sourceMappingURL=estatisticas.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtratoDaArrecadacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ExtratoDaArrecadacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExtratoDaArrecadacaoPage = (function () {
    function ExtratoDaArrecadacaoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExtratoDaArrecadacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExtratoDaArrecadacaoPage');
    };
    ExtratoDaArrecadacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-extrato-da-arrecadacao',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/extrato-da-arrecadacao/extrato-da-arrecadacao.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Extrato</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/extrato-da-arrecadacao/extrato-da-arrecadacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ExtratoDaArrecadacaoPage);
    return ExtratoDaArrecadacaoPage;
}());

//# sourceMappingURL=extrato-da-arrecadacao.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriaDoClubePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HistoriaDoClubePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoriaDoClubePage = (function () {
    function HistoriaDoClubePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoriaDoClubePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoriaDoClubePage');
    };
    HistoriaDoClubePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-historia-do-clube',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/historia-do-clube/historia-do-clube.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>História do clube</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/historia-do-clube/historia-do-clube.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], HistoriaDoClubePage);
    return HistoriaDoClubePage;
}());

//# sourceMappingURL=historia-do-clube.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JogosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_jogod_jogod__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the JogosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JogosPage = (function () {
    function JogosPage(navCtrl, navParams, http, jogoProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.jogoProvider = jogoProvider;
        jogoProvider.getJogo().subscribe(function (snapshot) {
            _this.jogos = snapshot.reverse();
            console.log(_this.jogos);
        });
    }
    JogosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-jogos',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/jogos/jogos.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Jogos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row>\n          <ion-card *ngFor="let jogo of jogos">\n            <img class="campeonato" src="{{jogo.campeonato}}" style="width:30px;height:25px;" />\n            <div class="nomeDoCampeonato">{{jogo.nomeDoCampeonato}}</div>\n            <div class="data" style="text-align:center">{{jogo.dataDoJogo}}</div>\n            <div class="nomeDoMeuTime">{{jogo.nomeDoTime}}</div>\n            <img class="meuescudo" src="{{jogo.meuescudo}}" style="width:20px;height:25px;" />\n            <div class="minhaQuantidadeDeGols">{{jogo.suaQuantidadeDeGols}} X {{jogo.quantidadeDeGolsDoOponente}}</div>\n            <img class="escudoOponente" src="{{jogo.escudooponente}}" style="width: 20px;height: 25px;" />\n            <div class="nomeDoOponente">{{jogo.nomeDoOponente}}</div>\n          </ion-card>\n        </ion-row>\n      </ion-grid>\n    </ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/jogos/jogos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_jogod_jogod__["a" /* JogodProvider */]])
    ], JogosPage);
    return JogosPage;
}());

//# sourceMappingURL=jogos.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinhaEscalacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MinhaEscalacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MinhaEscalacaoPage = (function () {
    function MinhaEscalacaoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MinhaEscalacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MinhaEscalacaoPage');
    };
    MinhaEscalacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-minha-escalacao',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/minha-escalacao/minha-escalacao.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Minha escalação</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/minha-escalacao/minha-escalacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MinhaEscalacaoPage);
    return MinhaEscalacaoPage;
}());

//# sourceMappingURL=minha-escalacao.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramaDePontosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_produtos_produtos__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProgramaDePontosPage = (function () {
    function ProgramaDePontosPage(navCtrl, navParams, http, produtosProvider, authProvider, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.produtosProvider = produtosProvider;
        this.authProvider = authProvider;
        this.toastCtrl = toastCtrl;
        this.torcedor = {};
        produtosProvider.getProdutosPontos().subscribe(function (snapshot) {
            _this.produtos = snapshot.reverse();
        });
        authProvider.getTorcedor().subscribe(function (snapshot) {
            _this.torcedor = snapshot;
        });
    }
    ProgramaDePontosPage.prototype.comprar = function (produto) {
        var _this = this;
        if (this.torcedor.pontos < produto.pontos) {
            this.displayToast("Sua quantidade de pontos é insuficiente");
        }
        else {
            this.torcedor.pontos = this.torcedor.pontos - produto.pontos;
            this.authProvider.getTorcedor().update(this.torcedor).then(function (data) {
                _this.produtosProvider.setProdutoPontosExtrato(produto).then(function () {
                    _this.produtosProvider.setProdutoPontosPedidos(produto, _this.torcedor).then(function () {
                        _this.displayToast("Retire seu produto na loja");
                    });
                });
            });
        }
    };
    ProgramaDePontosPage.prototype.extrato = function () {
        this.navCtrl.push('ExtratoDePontosPage');
    };
    ProgramaDePontosPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ duration: 2000, message: message }).present();
    };
    ProgramaDePontosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-programa-de-pontos',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/programa-de-pontos/programa-de-pontos.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Programa de pontos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n    <div class="pontos">{{(torcedor)?.pontos}} Pontos</div>\n    <button class="extrato" ion-button (click)="extrato()">Extrato de pontos</button>\n    <ion-grid>\n        <ion-row>\n            <ion-col *ngFor="let produto of produtos" col-5>\n            <ion-card>\n                <div style="text-align:center">\n                    <img src="{{produto.url}}" style="width:130px;height:130px;">\n              <div class="nome">{{produto.nome}}</div>\n              <button class="button" ion-button padding round color="vermelhoEscuro" (click)="comprar(produto)">{{produto.pontos}} Pts</button>\n                  </div>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/programa-de-pontos/programa-de-pontos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_produtos_produtos__["a" /* ProdutosProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], ProgramaDePontosPage);
    return ProgramaDePontosPage;
}());

//# sourceMappingURL=programa-de-pontos.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedesSociaisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RedesSociaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RedesSociaisPage = (function () {
    function RedesSociaisPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RedesSociaisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RedesSociaisPage');
    };
    RedesSociaisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-redes-sociais',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/redes-sociais/redes-sociais.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Redes Sociais</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div style="text-align:center">\n    <img src="../../assets/imgs/logo.png" style="width:150px;height:180px;">\n  </div>\n  <br>\n  <div class="acompanhe">Acompanhe mais de perto seu time favorito</div>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <img src="../../assets/imgs/fb-logo.png" style="width:30px;height:34px;" class="imgFace">\n  <div class="face">@Jec</div>\n  <img src="../../assets/imgs/md_5a9797d18f418.png" style="width:40px;height:44px;" class="imgInsta">\n  <div class="insta">@Jec</div>\n  <img src="../../assets/imgs/md_5a9797d302f17.png" style="width:40px;height:44px;" class="imgTwintter">\n  <div class="twintter">@Jec</div>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/redes-sociais/redes-sociais.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], RedesSociaisPage);
    return RedesSociaisPage;
}());

//# sourceMappingURL=redes-sociais.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SejaSocioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SejaSocioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SejaSocioPage = (function () {
    function SejaSocioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SejaSocioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SejaSocioPage');
    };
    SejaSocioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-seja-socio',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/seja-socio/seja-socio.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Seja sócio</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/seja-socio/seja-socio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], SejaSocioPage);
    return SejaSocioPage;
}());

//# sourceMappingURL=seja-socio.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabelasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_times_times__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabelasPage = (function () {
    function TabelasPage(navCtrl, navParams, http, timesProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.timesProvider = timesProvider;
        timesProvider.getTime().subscribe(function (snapshot) {
            _this.times = snapshot.reverse();
        });
    }
    TabelasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabelas',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/tabelas/tabelas.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Tabelas</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content >\n    <div class="artilheiros">Brasileirão Série C</div>\n    <br>\n    <table>\n        <thead>\n          <th></th>\n          <th></th>\n          <th></th>\n          <th>J</th>\n          <th>SG</th>\n          <th>Pts</th>\n        </thead>\n        <tbody>\n          <tr *ngFor="let time of times">\n            <td>{{time.posicao}}</td>\n            <td>\n              <img [src]="time.meuescudo">\n            </td>\n            <td>{{time.nomeDoTime}}</td>\n            <td>{{time.j}}</td>\n            <td>{{time.sg}}</td>\n            <td>{{time.pts}}</td>\n          </tr  >\n        </tbody>\n      </table>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/tabelas/tabelas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_times_times__["a" /* TimesProvider */]])
    ], TabelasPage);
    return TabelasPage;
}());

//# sourceMappingURL=tabelas.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_noticia_noticia__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_streaming_media__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the VideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideosPage = (function () {
    function VideosPage(navCtrl, navParams, http, noticiaProvider, streamingMedia) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.noticiaProvider = noticiaProvider;
        this.streamingMedia = streamingMedia;
        noticiaProvider.getVideo().subscribe(function (snapshot) {
            _this.videos = snapshot.reverse();
            console.log(_this.videos);
        });
    }
    VideosPage.prototype.startVideo = function (url) {
        var options = {
            successCallback: function () { console.log(); },
            errorCallback: function () { console.log(); },
            orientation: 'portrait'
        };
        this.streamingMedia.playVideo(url, options);
    };
    VideosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-videos',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/videos/videos.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Vídeos</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-card *ngFor="let video of videos">\n        <div class="card-title">{{video.titulo}}</div>\n        <img src="{{video.miniatura}}" style="width:350px;height:200px;" (click)="startVideo(video.url)" />\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/videos/videos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_noticia_noticia__["a" /* NoticiaProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_streaming_media__["a" /* StreamingMedia */]])
    ], VideosPage);
    return VideosPage;
}());

//# sourceMappingURL=videos.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = (function () {
    function UserProvider(afAuth, db) {
        this.afAuth = afAuth;
        this.db = db;
        this.user = this.getUserData();
    }
    UserProvider.prototype.setUser = function (user) {
        this.user = user;
    };
    // get passenger by id
    UserProvider.prototype.getUser = function (id) {
        return this.db.object('torcedores/' + id);
    };
    UserProvider.prototype.getUserData = function () {
        return this.afAuth.auth.currentUser;
    };
    UserProvider.prototype.getTorcedor = function () {
        var user = this.getUserData();
        return this.db.object('torcedores/' + user.uid);
    };
    UserProvider.prototype.login = function (cpf, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(cpf + "@cpf.com", password); // login with email & password
    };
    UserProvider.prototype.logout = function () {
        return this.afAuth.auth.signOut(); // logout from firebase
    };
    // register new account
    UserProvider.prototype.register = function (userInfo) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            _this.afAuth.auth.createUserWithEmailAndPassword(userInfo.cpf + "@cpf.com", userInfo.password).then(function (authData) {
                // update driver object
                userInfo.uid = authData.uid;
                _this.getUserData().updateProfile({ displayName: userInfo.name, photoURL: "../../assets/imgs/logo.png" });
                _this.db.object('torcedores/' + userInfo.uid).update(userInfo);
                observer.next();
            }).catch(function (error) {
                if (error) {
                    observer.error(error);
                }
            });
        });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ajude-o-clube/ajude-o-clube.module": [
		511,
		16
	],
	"../pages/cadastro/cadastro.module": [
		513,
		15
	],
	"../pages/chat-da-torcida/chat-da-torcida.module": [
		516,
		14
	],
	"../pages/compra-de-ingressos/compra-de-ingressos.module": [
		512,
		13
	],
	"../pages/configuracoes/configuracoes.module": [
		210
	],
	"../pages/cronograma-de-sorteios/cronograma-de-sorteios.module": [
		514,
		12
	],
	"../pages/detalhe-noticia/detalhe-noticia.module": [
		205
	],
	"../pages/detalhe-produto/detalhe-produto.module": [
		207
	],
	"../pages/elenco/elenco.module": [
		515,
		11
	],
	"../pages/enquetes/enquetes.module": [
		208
	],
	"../pages/estatisticas/estatisticas.module": [
		517,
		10
	],
	"../pages/extrato-da-arrecadacao/extrato-da-arrecadacao.module": [
		518,
		9
	],
	"../pages/extrato-de-pontos/extrato-de-pontos.module": [
		211
	],
	"../pages/historia-do-clube/historia-do-clube.module": [
		519,
		8
	],
	"../pages/jogos/jogos.module": [
		520,
		7
	],
	"../pages/login/login.module": [
		213
	],
	"../pages/loja-virtual/loja-virtual.module": [
		214
	],
	"../pages/minha-escalacao/minha-escalacao.module": [
		521,
		6
	],
	"../pages/noticias/noticias.module": [
		522,
		5
	],
	"../pages/programa-de-pontos/programa-de-pontos.module": [
		523,
		4
	],
	"../pages/redes-sociais/redes-sociais.module": [
		524,
		3
	],
	"../pages/seja-socio/seja-socio.module": [
		525,
		2
	],
	"../pages/tabelas/tabelas.module": [
		526,
		1
	],
	"../pages/videos/videos.module": [
		527,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 192;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheNoticiaPageModule", function() { return DetalheNoticiaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhe_noticia__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalheNoticiaPageModule = (function () {
    function DetalheNoticiaPageModule() {
    }
    DetalheNoticiaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalhe_noticia__["a" /* DetalheNoticiaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__detalhe_noticia__["a" /* DetalheNoticiaPage */]),
            ],
        })
    ], DetalheNoticiaPageModule);
    return DetalheNoticiaPageModule;
}());

//# sourceMappingURL=detalhe-noticia.module.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheNoticiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetalheNoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalheNoticiaPage = (function () {
    function DetalheNoticiaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noticia = this.navParams.data.noticia || {};
    }
    DetalheNoticiaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalheNoticiaPage');
    };
    DetalheNoticiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detalhe-noticia',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/detalhe-noticia/detalhe-noticia.html"*/'<!--\n  Generated template for the DetalheNoticiaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="vermelhoEscuro">\n    <ion-title>Notícia</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <img src="{{noticia.url}}" style="height:190px;" class="img"/>\n  <img src="../../assets/imgs/logo.png" style="width:30px;height: 34px;" class="logo">\n  <div class="nome">Joinville</div>\n  <div class="fixline2">{{ noticia.timestamp | date: \'dd.MM.yyyy\'}}</div>\n  <div class="fixline">{{noticia.nome}}</div>\n  <img src="../../assets/imgs/barra.png" style="width:200px;height:10px;" class="barra">\n  <div class="fixline3">{{noticia.descricao}}</div>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/detalhe-noticia/detalhe-noticia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], DetalheNoticiaPage);
    return DetalheNoticiaPage;
}());

//# sourceMappingURL=detalhe-noticia.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheProdutoPageModule", function() { return DetalheProdutoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhe_produto__ = __webpack_require__(472);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalheProdutoPageModule = (function () {
    function DetalheProdutoPageModule() {
    }
    DetalheProdutoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalhe_produto__["a" /* DetalheProdutoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__detalhe_produto__["a" /* DetalheProdutoPage */]),
            ],
        })
    ], DetalheProdutoPageModule);
    return DetalheProdutoPageModule;
}());

//# sourceMappingURL=detalhe-produto.module.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquetesPageModule", function() { return EnquetesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enquetes__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EnquetesPageModule = (function () {
    function EnquetesPageModule() {
    }
    EnquetesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__enquetes__["a" /* EnquetesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__enquetes__["a" /* EnquetesPage */]),
            ],
        })
    ], EnquetesPageModule);
    return EnquetesPageModule;
}());

//# sourceMappingURL=enquetes.module.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnqueteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_database__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the EnqueteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EnqueteProvider = (function () {
    function EnqueteProvider(db, authService) {
        this.db = db;
        this.authService = authService;
    }
    EnqueteProvider.prototype.getEnquete = function () {
        return this.db.list('enquetes');
    };
    EnqueteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
    ], EnqueteProvider);
    return EnqueteProvider;
}());

//# sourceMappingURL=enquete.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesPageModule", function() { return ConfiguracoesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracoes__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfiguracoesPageModule = (function () {
    function ConfiguracoesPageModule() {
    }
    ConfiguracoesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__configuracoes__["a" /* ConfiguracoesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__configuracoes__["a" /* ConfiguracoesPage */]),
            ],
        })
    ], ConfiguracoesPageModule);
    return ConfiguracoesPageModule;
}());

//# sourceMappingURL=configuracoes.module.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtratoDePontosPageModule", function() { return ExtratoDePontosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extrato_de_pontos__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExtratoDePontosPageModule = (function () {
    function ExtratoDePontosPageModule() {
    }
    ExtratoDePontosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__extrato_de_pontos__["a" /* ExtratoDePontosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__extrato_de_pontos__["a" /* ExtratoDePontosPage */]),
            ],
        })
    ], ExtratoDePontosPageModule);
    return ExtratoDePontosPageModule;
}());

//# sourceMappingURL=extrato-de-pontos.module.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtratoDePontosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_produtos_produtos__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ExtratoDePontosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExtratoDePontosPage = (function () {
    function ExtratoDePontosPage(navCtrl, navParams, produtosProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.produtosProvider = produtosProvider;
        produtosProvider.getExtratoPontos().subscribe(function (snapshot) {
            _this.produtos = snapshot.reverse();
        });
    }
    ExtratoDePontosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExtratoDePontosPage');
    };
    ExtratoDePontosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-extrato-de-pontos',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/extrato-de-pontos/extrato-de-pontos.html"*/'<!--\n  Generated template for the ExtratoDePontosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="vermelhoEscuro">\n    <ion-title>Extrato de Pontos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row *ngFor="let produto of produtos">\n        <ion-card class="col6">\n          <img src="{{produto.url}}" />\n          <div class="nome">{{produto.nome}}</div>\n          <div class="pontos">{{produto.pontos}} Pts</div>\n        </ion-card>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/extrato-de-pontos/extrato-de-pontos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_produtos_produtos__["a" /* ProdutosProvider */]])
    ], ExtratoDePontosPage);
    return ExtratoDePontosPage;
}());

//# sourceMappingURL=extrato-de-pontos.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LojaVirtualPageModule", function() { return LojaVirtualPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loja_virtual__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LojaVirtualPageModule = (function () {
    function LojaVirtualPageModule() {
    }
    LojaVirtualPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__loja_virtual__["a" /* LojaVirtualPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__loja_virtual__["a" /* LojaVirtualPage */]),
            ],
        })
    ], LojaVirtualPageModule);
    return LojaVirtualPageModule;
}());

//# sourceMappingURL=loja-virtual.module.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_database__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the EnqueteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TimesProvider = (function () {
    function TimesProvider(db, authService) {
        this.db = db;
        this.authService = authService;
    }
    TimesProvider.prototype.getTime = function () {
        return this.db.list('times');
    };
    TimesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
    ], TimesProvider);
    return TimesProvider;
}());

//# sourceMappingURL=times.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(415);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_noticias_noticias__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_videos_videos__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabelas_tabelas__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_jogos_jogos__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_estatisticas_estatisticas__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_elenco_elenco__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_minha_escalacao_minha_escalacao__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_historia_do_clube_historia_do_clube__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_chat_da_torcida_chat_da_torcida__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_enquetes_enquetes__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_redes_sociais_redes_sociais__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_loja_virtual_loja_virtual__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_compra_de_ingressos_compra_de_ingressos__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_seja_socio_seja_socio__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_ajude_o_clube_ajude_o_clube__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_extrato_da_arrecadacao_extrato_da_arrecadacao__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_programa_de_pontos_programa_de_pontos__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_cronograma_de_sorteios_cronograma_de_sorteios__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_cadastro_cadastro__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_login_login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_detalhe_noticia_detalhe_noticia__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_configuracoes_configuracoes__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pluritech_ion_mask__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pluritech_ion_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__pluritech_ion_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angularfire2__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angularfire2_database__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_angularfire2_auth__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_streaming_media__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_angular2_moment__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_detalhe_noticia_detalhe_noticia_module__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_login_login_module__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_configuracoes_configuracoes_module__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_user_user__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_jogadores_jogadores__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_noticia_noticia__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_jogod_jogod__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_times_times__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_enquetes_enquetes_module__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_enquete_enquete__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_loja_virtual_loja_virtual_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_produtos_produtos__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_detalhe_produto_detalhe_produto_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_extrato_de_pontos_extrato_de_pontos__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_extrato_de_pontos_extrato_de_pontos_module__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































// Import your library

// Import the AF2 Module




// Import moment module




// import providers












var firebaseConfig = {
    apiKey: "AIzaSyDHeksMw52dDwN9ULGTSjD1567Z8ykEA1c",
    authDomain: "patrociniopremiado-ddabd.firebaseapp.com",
    databaseURL: "https://patrociniopremiado-ddabd.firebaseio.com",
    projectId: "patrociniopremiado-ddabd",
    storageBucket: "patrociniopremiado-ddabd.appspot.com",
    messagingSenderId: "144670116619"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_noticias_noticias__["a" /* NoticiasPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_videos_videos__["a" /* VideosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabelas_tabelas__["a" /* TabelasPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_jogos_jogos__["a" /* JogosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_estatisticas_estatisticas__["a" /* EstatisticasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_elenco_elenco__["a" /* ElencoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_minha_escalacao_minha_escalacao__["a" /* MinhaEscalacaoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_historia_do_clube_historia_do_clube__["a" /* HistoriaDoClubePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_chat_da_torcida_chat_da_torcida__["a" /* ChatDaTorcidaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_redes_sociais_redes_sociais__["a" /* RedesSociaisPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_compra_de_ingressos_compra_de_ingressos__["a" /* CompraDeIngressosPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_seja_socio_seja_socio__["a" /* SejaSocioPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_ajude_o_clube_ajude_o_clube__["a" /* AjudeOClubePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_extrato_da_arrecadacao_extrato_da_arrecadacao__["a" /* ExtratoDaArrecadacaoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_programa_de_pontos_programa_de_pontos__["a" /* ProgramaDePontosPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_cronograma_de_sorteios_cronograma_de_sorteios__["a" /* CronogramaDeSorteiosPage */],
                // ExtratoDePontosPage,
                // DetalheProdutoPage,
                __WEBPACK_IMPORTED_MODULE_25__pages_cadastro_cadastro__["a" /* CadastroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_32_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_33_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_34_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_36_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ajude-o-clube/ajude-o-clube.module#AjudeOClubePageModule', name: 'AjudeOClubePage', segment: 'ajude-o-clube', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/compra-de-ingressos/compra-de-ingressos.module#CompraDeIngressosPageModule', name: 'CompraDeIngressosPage', segment: 'compra-de-ingressos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cronograma-de-sorteios/cronograma-de-sorteios.module#CronogramaDeSorteiosPageModule', name: 'CronogramaDeSorteiosPage', segment: 'cronograma-de-sorteios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhe-noticia/detalhe-noticia.module#DetalheNoticiaPageModule', name: 'DetalheNoticiaPage', segment: 'detalhe-noticia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhe-produto/detalhe-produto.module#DetalheProdutoPageModule', name: 'DetalheProdutoPage', segment: 'detalhe-produto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/elenco/elenco.module#ElencoPageModule', name: 'ElencoPage', segment: 'elenco', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat-da-torcida/chat-da-torcida.module#ChatDaTorcidaPageModule', name: 'ChatDaTorcidaPage', segment: 'chat-da-torcida', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/enquetes/enquetes.module#EnquetesPageModule', name: 'EnquetesPage', segment: 'enquetes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configuracoes/configuracoes.module#ConfiguracoesPageModule', name: 'ConfiguracoesPage', segment: 'configuracoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estatisticas/estatisticas.module#EstatisticasPageModule', name: 'EstatisticasPage', segment: 'estatisticas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extrato-da-arrecadacao/extrato-da-arrecadacao.module#ExtratoDaArrecadacaoPageModule', name: 'ExtratoDaArrecadacaoPage', segment: 'extrato-da-arrecadacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historia-do-clube/historia-do-clube.module#HistoriaDoClubePageModule', name: 'HistoriaDoClubePage', segment: 'historia-do-clube', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extrato-de-pontos/extrato-de-pontos.module#ExtratoDePontosPageModule', name: 'ExtratoDePontosPage', segment: 'extrato-de-pontos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jogos/jogos.module#JogosPageModule', name: 'JogosPage', segment: 'jogos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loja-virtual/loja-virtual.module#LojaVirtualPageModule', name: 'LojaVirtualPage', segment: 'loja-virtual', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/minha-escalacao/minha-escalacao.module#MinhaEscalacaoPageModule', name: 'MinhaEscalacaoPage', segment: 'minha-escalacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/noticias/noticias.module#NoticiasPageModule', name: 'NoticiasPage', segment: 'noticias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/programa-de-pontos/programa-de-pontos.module#ProgramaDePontosPageModule', name: 'ProgramaDePontosPage', segment: 'programa-de-pontos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/redes-sociais/redes-sociais.module#RedesSociaisPageModule', name: 'RedesSociaisPage', segment: 'redes-sociais', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seja-socio/seja-socio.module#SejaSocioPageModule', name: 'SejaSocioPage', segment: 'seja-socio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabelas/tabelas.module#TabelasPageModule', name: 'TabelasPage', segment: 'tabelas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/videos/videos.module#VideosPageModule', name: 'VideosPage', segment: 'videos', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_37__pages_detalhe_noticia_detalhe_noticia_module__["DetalheNoticiaPageModule"],
                __WEBPACK_IMPORTED_MODULE_49__pages_detalhe_produto_detalhe_produto_module__["DetalheProdutoPageModule"],
                __WEBPACK_IMPORTED_MODULE_51__pages_extrato_de_pontos_extrato_de_pontos_module__["ExtratoDePontosPageModule"],
                __WEBPACK_IMPORTED_MODULE_39__pages_configuracoes_configuracoes_module__["ConfiguracoesPageModule"],
                __WEBPACK_IMPORTED_MODULE_38__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_45__pages_enquetes_enquetes_module__["EnquetesPageModule"],
                __WEBPACK_IMPORTED_MODULE_47__pages_loja_virtual_loja_virtual_module__["LojaVirtualPageModule"],
                __WEBPACK_IMPORTED_MODULE_31__pluritech_ion_mask__["IonMaskModule"].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_noticias_noticias__["a" /* NoticiasPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_extrato_de_pontos_extrato_de_pontos__["a" /* ExtratoDePontosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_videos_videos__["a" /* VideosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabelas_tabelas__["a" /* TabelasPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_jogos_jogos__["a" /* JogosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_estatisticas_estatisticas__["a" /* EstatisticasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_elenco_elenco__["a" /* ElencoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_minha_escalacao_minha_escalacao__["a" /* MinhaEscalacaoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_historia_do_clube_historia_do_clube__["a" /* HistoriaDoClubePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_chat_da_torcida_chat_da_torcida__["a" /* ChatDaTorcidaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_enquetes_enquetes__["a" /* EnquetesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_redes_sociais_redes_sociais__["a" /* RedesSociaisPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_loja_virtual_loja_virtual__["a" /* LojaVirtualPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_compra_de_ingressos_compra_de_ingressos__["a" /* CompraDeIngressosPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_seja_socio_seja_socio__["a" /* SejaSocioPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_ajude_o_clube_ajude_o_clube__["a" /* AjudeOClubePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_extrato_da_arrecadacao_extrato_da_arrecadacao__["a" /* ExtratoDaArrecadacaoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_programa_de_pontos_programa_de_pontos__["a" /* ProgramaDePontosPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_cronograma_de_sorteios_cronograma_de_sorteios__["a" /* CronogramaDeSorteiosPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_detalhe_noticia_detalhe_noticia__["a" /* DetalheNoticiaPage */],
                // DetalheNoticiaPage,
                __WEBPACK_IMPORTED_MODULE_28__pages_configuracoes_configuracoes__["a" /* ConfiguracoesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_streaming_media__["a" /* StreamingMedia */],
                __WEBPACK_IMPORTED_MODULE_40__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_noticia_noticia__["a" /* NoticiaProvider */],
                __WEBPACK_IMPORTED_MODULE_46__providers_enquete_enquete__["a" /* EnqueteProvider */],
                __WEBPACK_IMPORTED_MODULE_41__providers_jogadores_jogadores__["a" /* JogadoresProvider */],
                __WEBPACK_IMPORTED_MODULE_44__providers_times_times__["a" /* TimesProvider */],
                __WEBPACK_IMPORTED_MODULE_48__providers_produtos_produtos__["a" /* ProdutosProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_jogod_jogod__["a" /* JogodProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheProdutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetalheProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalheProdutoPage = (function () {
    function DetalheProdutoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.produto = this.navParams.data.produto || {};
        this.item_qty = 1;
    }
    // increment item 
    DetalheProdutoPage.prototype.inc = function () {
        this.item_qty += 1;
    };
    //decrements item
    DetalheProdutoPage.prototype.dec = function () {
        if (this.item_qty - 1 < 1) {
            this.item_qty = 1;
        }
        else {
            this.item_qty -= 1;
        }
    };
    DetalheProdutoPage.prototype.comprar = function () {
    };
    DetalheProdutoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detalhe-produto',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/detalhe-produto/detalhe-produto.html"*/'<!--\n  Generated template for the DetalheNoticiaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="vermelhoEscuro">\n    <ion-title>Produto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <img src="{{produto.url}}" style="height:220px;" class="img"/>\n  <div class="nome">{{produto.nome}} - R${{item_qty * produto.valor}}</div>\n  <img src="../../assets/imgs/barra.png" style="width:200px;height:10px;" class="barra">\n  <div class="descricao">{{produto.descricao}}</div>\n  <div class="pontos">Você ganha {{item_qty * produto.pontos}}Pts</div>\n  <div class="quantidade">{{item_qty}}</div>\n  <h6 class="h6">Observações</h6>\n  <ion-input class="obs" type="text" [(ngModel)]="obs"></ion-input>\n  <button clear (click)="inc()" class="aumentar"><ion-icon name="add-circle" ></ion-icon></button>\n  <button clear (click)="dec()" class="abaixar"><ion-icon name="remove-circle" ></ion-icon></button>\n  <button class="button" ion-button padding round color="vermelhoEscuro" (click)="comprar()">Comprar</button>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/detalhe-produto/detalhe-produto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], DetalheProdutoPage);
    return DetalheProdutoPage;
}());

//# sourceMappingURL=detalhe-produto.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_database__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the EnqueteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProdutosProvider = (function () {
    function ProdutosProvider(db, authService) {
        this.db = db;
        this.authService = authService;
    }
    ProdutosProvider.prototype.getProdutosLoja = function () {
        return this.db.list('produtosLoja');
    };
    ProdutosProvider.prototype.getProdutosPontos = function () {
        return this.db.list('produtosPontos');
    };
    ProdutosProvider.prototype.getSorteios = function () {
        return this.db.list('sorteios');
    };
    ProdutosProvider.prototype.setProdutoPontosExtrato = function (produto) {
        var user = this.authService.getUserData();
        return this.db.list('extratoPontos/' + user.uid).push({
            nome: produto.nome,
            url: produto.url,
            pontos: produto.pontos,
            timestamp: Date.now()
        });
    };
    ProdutosProvider.prototype.setProdutoPontosPedidos = function (produto, torcedor) {
        return this.db.list('pedidosFeitosParaRetirarNaLoja/').push({
            torcedor_nome: torcedor.nome,
            torcedor_cpf: torcedor.cpf,
            torcedor_uid: torcedor.uid,
            nome: produto.nome,
            url: produto.url,
            pontos: produto.pontos,
            timestamp: Date.now(),
            status: "PENDENTE"
        });
    };
    ProdutosProvider.prototype.getExtratoPontos = function () {
        var user = this.authService.getUserData();
        return this.db.list('extratoPontos/' + user.uid);
    };
    ProdutosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
    ], ProdutosProvider);
    return ProdutosProvider;
}());

//# sourceMappingURL=produtos.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_noticias_noticias__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_videos_videos__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabelas_tabelas__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_jogos_jogos__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_estatisticas_estatisticas__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_elenco_elenco__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_minha_escalacao_minha_escalacao__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_historia_do_clube_historia_do_clube__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chat_da_torcida_chat_da_torcida__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_enquetes_enquetes__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_redes_sociais_redes_sociais__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_loja_virtual_loja_virtual__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_compra_de_ingressos_compra_de_ingressos__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_seja_socio_seja_socio__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_ajude_o_clube_ajude_o_clube__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_extrato_da_arrecadacao_extrato_da_arrecadacao__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_programa_de_pontos_programa_de_pontos__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_cronograma_de_sorteios_cronograma_de_sorteios__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth_auth__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_configuracoes_configuracoes__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_user_user__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


























var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, authProvider, afAuth) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.authProvider = authProvider;
        this.afAuth = afAuth;
        this.user = {};
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // check for login stage, then redirect
            afAuth.authState.take(1).subscribe(function (authData) {
                if (authData) {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_noticias_noticias__["a" /* NoticiasPage */]);
                }
                else {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */]);
                }
            });
            // get user data
            afAuth.authState.subscribe(function (authData) {
                console.log(authData);
                if (authData) {
                    _this.user = authProvider.getUserData();
                    // get user info from service
                    authProvider.setUser(_this.user);
                    authProvider.getTorcedor().subscribe(function (snapshot) {
                        _this.torcedor = snapshot;
                    });
                }
                else {
                    _this.torcedor = null;
                }
            });
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Notícias', component: __WEBPACK_IMPORTED_MODULE_4__pages_noticias_noticias__["a" /* NoticiasPage */] },
            { title: 'Vídeos', component: __WEBPACK_IMPORTED_MODULE_5__pages_videos_videos__["a" /* VideosPage */] },
            { title: 'Tabelas', component: __WEBPACK_IMPORTED_MODULE_6__pages_tabelas_tabelas__["a" /* TabelasPage */] },
            { title: 'Jogos', component: __WEBPACK_IMPORTED_MODULE_7__pages_jogos_jogos__["a" /* JogosPage */] },
            { title: 'Estatísticas', component: __WEBPACK_IMPORTED_MODULE_8__pages_estatisticas_estatisticas__["a" /* EstatisticasPage */] },
            { title: 'Elenco', component: __WEBPACK_IMPORTED_MODULE_9__pages_elenco_elenco__["a" /* ElencoPage */] },
            { title: 'Minha Escalação', component: __WEBPACK_IMPORTED_MODULE_10__pages_minha_escalacao_minha_escalacao__["a" /* MinhaEscalacaoPage */] },
            { title: 'História do Clube', component: __WEBPACK_IMPORTED_MODULE_11__pages_historia_do_clube_historia_do_clube__["a" /* HistoriaDoClubePage */] },
            { title: 'Chat da Torcida', component: __WEBPACK_IMPORTED_MODULE_12__pages_chat_da_torcida_chat_da_torcida__["a" /* ChatDaTorcidaPage */] },
            { title: 'Enquetes', component: __WEBPACK_IMPORTED_MODULE_13__pages_enquetes_enquetes__["a" /* EnquetesPage */] },
            { title: 'Redes Sociais', component: __WEBPACK_IMPORTED_MODULE_14__pages_redes_sociais_redes_sociais__["a" /* RedesSociaisPage */] },
            { title: 'Loja virtual', component: __WEBPACK_IMPORTED_MODULE_15__pages_loja_virtual_loja_virtual__["a" /* LojaVirtualPage */] },
            { title: 'Compra de Ingressos', component: __WEBPACK_IMPORTED_MODULE_16__pages_compra_de_ingressos_compra_de_ingressos__["a" /* CompraDeIngressosPage */] },
            { title: 'Seja Sócio', component: __WEBPACK_IMPORTED_MODULE_17__pages_seja_socio_seja_socio__["a" /* SejaSocioPage */] }
        ];
        this.pagesTorcedor = [
            { title: 'JEC Cap', component: __WEBPACK_IMPORTED_MODULE_18__pages_ajude_o_clube_ajude_o_clube__["a" /* AjudeOClubePage */] },
            { title: 'Extrato de arrecadação', component: __WEBPACK_IMPORTED_MODULE_19__pages_extrato_da_arrecadacao_extrato_da_arrecadacao__["a" /* ExtratoDaArrecadacaoPage */] },
            { title: 'Sorteios', component: __WEBPACK_IMPORTED_MODULE_21__pages_cronograma_de_sorteios_cronograma_de_sorteios__["a" /* CronogramaDeSorteiosPage */] },
            { title: 'Programa de Pontos', component: __WEBPACK_IMPORTED_MODULE_20__pages_programa_de_pontos_programa_de_pontos__["a" /* ProgramaDePontosPage */] }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this.authProvider.logout();
        this.nav.setRoot('LoginPage');
    };
    MyApp.prototype.config = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_24__pages_configuracoes_configuracoes__["a" /* ConfiguracoesPage */], {
            user: this.user
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/app/app.html"*/'<ion-menu [content]="content" side="right">\n  <ion-content class="list">\n    <h5 class="h5"><strong>Nome:</strong> {{(torcedor)?.nome}}</h5>\n    <h5 class="h5"><strong>CPF:</strong> {{(torcedor)?.cpf}}</h5>\n    <button class="config" ion-button (click)="config()">\n      <ion-icon name="cog"></ion-icon>\n    </button>\n    <ion-list no-lines>\n      <h5 class="h5">Clube</h5>\n      <button class="menu" detail-none menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <h5 class="h5">Torcedor</h5>\n      <button class="menu" detail-none menuClose ion-item *ngFor="let p of pagesTorcedor" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button class="menu" detail-none menuClose ion-item (click)="logout()">\n        Sair\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_25__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 260,
	"./af.js": 260,
	"./ar": 261,
	"./ar-dz": 262,
	"./ar-dz.js": 262,
	"./ar-kw": 263,
	"./ar-kw.js": 263,
	"./ar-ly": 264,
	"./ar-ly.js": 264,
	"./ar-ma": 265,
	"./ar-ma.js": 265,
	"./ar-sa": 266,
	"./ar-sa.js": 266,
	"./ar-tn": 267,
	"./ar-tn.js": 267,
	"./ar.js": 261,
	"./az": 268,
	"./az.js": 268,
	"./be": 269,
	"./be.js": 269,
	"./bg": 270,
	"./bg.js": 270,
	"./bm": 271,
	"./bm.js": 271,
	"./bn": 272,
	"./bn.js": 272,
	"./bo": 273,
	"./bo.js": 273,
	"./br": 274,
	"./br.js": 274,
	"./bs": 275,
	"./bs.js": 275,
	"./ca": 276,
	"./ca.js": 276,
	"./cs": 277,
	"./cs.js": 277,
	"./cv": 278,
	"./cv.js": 278,
	"./cy": 279,
	"./cy.js": 279,
	"./da": 280,
	"./da.js": 280,
	"./de": 281,
	"./de-at": 282,
	"./de-at.js": 282,
	"./de-ch": 283,
	"./de-ch.js": 283,
	"./de.js": 281,
	"./dv": 284,
	"./dv.js": 284,
	"./el": 285,
	"./el.js": 285,
	"./en-au": 286,
	"./en-au.js": 286,
	"./en-ca": 287,
	"./en-ca.js": 287,
	"./en-gb": 288,
	"./en-gb.js": 288,
	"./en-ie": 289,
	"./en-ie.js": 289,
	"./en-il": 290,
	"./en-il.js": 290,
	"./en-nz": 291,
	"./en-nz.js": 291,
	"./eo": 292,
	"./eo.js": 292,
	"./es": 293,
	"./es-do": 294,
	"./es-do.js": 294,
	"./es-us": 295,
	"./es-us.js": 295,
	"./es.js": 293,
	"./et": 296,
	"./et.js": 296,
	"./eu": 297,
	"./eu.js": 297,
	"./fa": 298,
	"./fa.js": 298,
	"./fi": 299,
	"./fi.js": 299,
	"./fo": 300,
	"./fo.js": 300,
	"./fr": 301,
	"./fr-ca": 302,
	"./fr-ca.js": 302,
	"./fr-ch": 303,
	"./fr-ch.js": 303,
	"./fr.js": 301,
	"./fy": 304,
	"./fy.js": 304,
	"./gd": 305,
	"./gd.js": 305,
	"./gl": 306,
	"./gl.js": 306,
	"./gom-latn": 307,
	"./gom-latn.js": 307,
	"./gu": 308,
	"./gu.js": 308,
	"./he": 309,
	"./he.js": 309,
	"./hi": 310,
	"./hi.js": 310,
	"./hr": 311,
	"./hr.js": 311,
	"./hu": 312,
	"./hu.js": 312,
	"./hy-am": 313,
	"./hy-am.js": 313,
	"./id": 314,
	"./id.js": 314,
	"./is": 315,
	"./is.js": 315,
	"./it": 316,
	"./it.js": 316,
	"./ja": 317,
	"./ja.js": 317,
	"./jv": 318,
	"./jv.js": 318,
	"./ka": 319,
	"./ka.js": 319,
	"./kk": 320,
	"./kk.js": 320,
	"./km": 321,
	"./km.js": 321,
	"./kn": 322,
	"./kn.js": 322,
	"./ko": 323,
	"./ko.js": 323,
	"./ky": 324,
	"./ky.js": 324,
	"./lb": 325,
	"./lb.js": 325,
	"./lo": 326,
	"./lo.js": 326,
	"./lt": 327,
	"./lt.js": 327,
	"./lv": 328,
	"./lv.js": 328,
	"./me": 329,
	"./me.js": 329,
	"./mi": 330,
	"./mi.js": 330,
	"./mk": 331,
	"./mk.js": 331,
	"./ml": 332,
	"./ml.js": 332,
	"./mn": 333,
	"./mn.js": 333,
	"./mr": 334,
	"./mr.js": 334,
	"./ms": 335,
	"./ms-my": 336,
	"./ms-my.js": 336,
	"./ms.js": 335,
	"./mt": 337,
	"./mt.js": 337,
	"./my": 338,
	"./my.js": 338,
	"./nb": 339,
	"./nb.js": 339,
	"./ne": 340,
	"./ne.js": 340,
	"./nl": 341,
	"./nl-be": 342,
	"./nl-be.js": 342,
	"./nl.js": 341,
	"./nn": 343,
	"./nn.js": 343,
	"./pa-in": 344,
	"./pa-in.js": 344,
	"./pl": 345,
	"./pl.js": 345,
	"./pt": 346,
	"./pt-br": 347,
	"./pt-br.js": 347,
	"./pt.js": 346,
	"./ro": 348,
	"./ro.js": 348,
	"./ru": 349,
	"./ru.js": 349,
	"./sd": 350,
	"./sd.js": 350,
	"./se": 351,
	"./se.js": 351,
	"./si": 352,
	"./si.js": 352,
	"./sk": 353,
	"./sk.js": 353,
	"./sl": 354,
	"./sl.js": 354,
	"./sq": 355,
	"./sq.js": 355,
	"./sr": 356,
	"./sr-cyrl": 357,
	"./sr-cyrl.js": 357,
	"./sr.js": 356,
	"./ss": 358,
	"./ss.js": 358,
	"./sv": 359,
	"./sv.js": 359,
	"./sw": 360,
	"./sw.js": 360,
	"./ta": 361,
	"./ta.js": 361,
	"./te": 362,
	"./te.js": 362,
	"./tet": 363,
	"./tet.js": 363,
	"./tg": 364,
	"./tg.js": 364,
	"./th": 365,
	"./th.js": 365,
	"./tl-ph": 366,
	"./tl-ph.js": 366,
	"./tlh": 367,
	"./tlh.js": 367,
	"./tr": 368,
	"./tr.js": 368,
	"./tzl": 369,
	"./tzl.js": 369,
	"./tzm": 370,
	"./tzm-latn": 371,
	"./tzm-latn.js": 371,
	"./tzm.js": 370,
	"./ug-cn": 372,
	"./ug-cn.js": 372,
	"./uk": 373,
	"./uk.js": 373,
	"./ur": 374,
	"./ur.js": 374,
	"./uz": 375,
	"./uz-latn": 376,
	"./uz-latn.js": 376,
	"./uz.js": 375,
	"./vi": 377,
	"./vi.js": 377,
	"./x-pseudo": 378,
	"./x-pseudo.js": 378,
	"./yo": 379,
	"./yo.js": 379,
	"./zh-cn": 380,
	"./zh-cn.js": 380,
	"./zh-hk": 381,
	"./zh-hk.js": 381,
	"./zh-tw": 382,
	"./zh-tw.js": 382
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 508;

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__noticias_noticias__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(nav, authService, alertCtrl, loadingCtrl, toast) {
        this.nav = nav;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.userInfo = {};
    }
    LoginPage.prototype.signup = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    // go to login page
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        this.authService.login(this.userInfo.cpf, this.userInfo.password).then(function (authData) {
            loading.dismiss();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__noticias_noticias__["a" /* NoticiasPage */]);
        }, function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                message: 'Error, por favor tente mais tarde',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/login/login.html"*/'<!--\n  Generated template for the CadastroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <div style="text-align:center">\n    <img src="../../assets/imgs/logo.png" style="width:150px;height:180px;">\n  </div>\n  <h6 class="h6">CPF</h6>\n  <ion-input type="text" placeholder="xxx.xxx.xxx-xx" [(ngModel)]="userInfo.cpf"></ion-input>\n  <h6 class="h6">Senha</h6>\n  <ion-input type="password" placeholder="Mínimo de 6 caracteres" [(ngModel)]="userInfo.password"></ion-input>\n  <br>\n  <div style="text-align:center">\n    <button ion-button padding round color="vermelhoEscuro" (click)="login()">Login</button>\n    <br>\n    <br>\n    <br>\n    <button class="h6" ion-button padding round color="amareloEscuro" (click)="signup()">Cadastro</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_noticia_noticia__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticiasPage = (function () {
    function NoticiasPage(navCtrl, navParams, http, noticiaProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.noticiaProvider = noticiaProvider;
        noticiaProvider.getNoticia().subscribe(function (snapshot) {
            _this.noticias = snapshot.reverse();
        });
    }
    NoticiasPage.prototype.detalhe = function (noticia) {
        this.navCtrl.push('DetalheNoticiaPage', { noticia: noticia });
    };
    NoticiasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-noticias',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/noticias/noticias.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Notícias</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let noticia of noticias" col-12 (click)="detalhe(noticia)">\n        <ion-card *ngIf="noticia.destaque == \'Sim\'">\n          <img src="{{noticia.url}}" style="height:200px;" />\n          <div class="card-title">{{noticia.nome}}</div>\n          <div class="card-subtitle">{{ noticia.timestamp | date: \'dd.MM.yyyy\'}}</div>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngFor="let noticia of noticias" col-5 (click)="detalhe(noticia)">\n        <ion-card *ngIf="noticia.destaque == \'Não\'" class="col6">\n            <img src="{{noticia.url}}" style="height:70px;" />\n          <div class="fixline">{{noticia.nome}}</div>\n          <div class="fixline2">{{ noticia.timestamp | date: \'dd.MM.yyyy\'}}</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/noticias/noticias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_noticia_noticia__["a" /* NoticiaProvider */]])
    ], NoticiasPage);
    return NoticiasPage;
}());

//# sourceMappingURL=noticias.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JogodProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_database__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the JogodProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var JogodProvider = (function () {
    function JogodProvider(db, authService) {
        this.db = db;
        this.authService = authService;
    }
    JogodProvider.prototype.getJogo = function () {
        return this.db.list('jogos');
    };
    JogodProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
    ], JogodProvider);
    return JogodProvider;
}());

//# sourceMappingURL=jogod.js.map

/***/ })

},[394]);
//# sourceMappingURL=main.js.map