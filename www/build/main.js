webpackJsonp([19],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjudeOClubePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-ajude-o-clube',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/ajude-o-clube/ajude-o-clube.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ajude o clube</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/ajude-o-clube/ajude-o-clube.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AjudeOClubePage);
    return AjudeOClubePage;
}());

//# sourceMappingURL=ajude-o-clube.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(33);
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
            selector: 'page-cadastro',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/cadastro/cadastro.html"*/'<!--\n  Generated template for the CadastroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <div style="text-align:center">\n    <img src="../../assets/imgs/logo.png" style="width:150px;height:150px;">\n  </div>\n  <h6 class="h6">Nome</h6>\n  <ion-input type="text" placeholder="José" [(ngModel)]="userInfo.nome"></ion-input>\n  <h6 class="h6">CPF</h6>\n  <ion-input type="text" placeholder="xxx.xxx.xxx-xx" [(ngModel)]="userInfo.cpf"></ion-input>\n  <h6 class="h6">Senha</h6>\n  <ion-input type="password" placeholder="Mínimo de 6 caracteres" [(ngModel)]="userInfo.password"></ion-input>\n  <br>\n  <div style="text-align:center">\n    <button ion-button padding round color="vermelhoEscuro" (click)="signup()">Cadastrar</button>\n    <br>\n    <br>\n    <br>\n    <button class="button" ion-button padding round color="amareloEscuro" (click)="login()">Login</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/cadastro/cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatDaTorcidaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-chat-da-torcida',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/chat-da-torcida/chat-da-torcida.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Chat</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/chat-da-torcida/chat-da-torcida.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ChatDaTorcidaPage);
    return ChatDaTorcidaPage;
}());

//# sourceMappingURL=chat-da-torcida.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompraDeIngressosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the CompraDeIngressosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompraDeIngressosPage = (function () {
    function CompraDeIngressosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CompraDeIngressosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompraDeIngressosPage');
    };
    CompraDeIngressosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-compra-de-ingressos',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/compra-de-ingressos/compra-de-ingressos.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ingressos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/compra-de-ingressos/compra-de-ingressos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], CompraDeIngressosPage);
    return CompraDeIngressosPage;
}());

//# sourceMappingURL=compra-de-ingressos.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CronogramaDeSorteiosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the CronogramaDeSorteiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CronogramaDeSorteiosPage = (function () {
    function CronogramaDeSorteiosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CronogramaDeSorteiosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CronogramaDeSorteiosPage');
    };
    CronogramaDeSorteiosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cronograma-de-sorteios',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/cronograma-de-sorteios/cronograma-de-sorteios.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cronograma</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/cronograma-de-sorteios/cronograma-de-sorteios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], CronogramaDeSorteiosPage);
    return CronogramaDeSorteiosPage;
}());

//# sourceMappingURL=cronograma-de-sorteios.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElencoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the ElencoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ElencoPage = (function () {
    function ElencoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ElencoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ElencoPage');
    };
    ElencoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-elenco',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/elenco/elenco.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Elenco</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/elenco/elenco.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ElencoPage);
    return ElencoPage;
}());

//# sourceMappingURL=elenco.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquetesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the EnquetesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnquetesPage = (function () {
    function EnquetesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EnquetesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnquetesPage');
    };
    EnquetesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-enquetes',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/enquetes/enquetes.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Enquetes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/enquetes/enquetes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], EnquetesPage);
    return EnquetesPage;
}());

//# sourceMappingURL=enquetes.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstatisticasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the EstatisticasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstatisticasPage = (function () {
    function EstatisticasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EstatisticasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstatisticasPage');
    };
    EstatisticasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-estatisticas',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/estatisticas/estatisticas.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Estatítica</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/estatisticas/estatisticas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], EstatisticasPage);
    return EstatisticasPage;
}());

//# sourceMappingURL=estatisticas.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtratoDaArrecadacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-extrato-da-arrecadacao',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/extrato-da-arrecadacao/extrato-da-arrecadacao.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Extrato</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/extrato-da-arrecadacao/extrato-da-arrecadacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ExtratoDaArrecadacaoPage);
    return ExtratoDaArrecadacaoPage;
}());

//# sourceMappingURL=extrato-da-arrecadacao.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriaDoClubePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-historia-do-clube',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/historia-do-clube/historia-do-clube.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>História do clube</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/historia-do-clube/historia-do-clube.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], HistoriaDoClubePage);
    return HistoriaDoClubePage;
}());

//# sourceMappingURL=historia-do-clube.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JogosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_jogod_jogod__ = __webpack_require__(205);
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
            selector: 'page-jogos',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/jogos/jogos.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Jogos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n          <ion-card *ngFor="let jogo of jogos">\n            <div class="data" style="text-align:center">{{jogo.dataDoJogo}}</div>\n            <div class="nomeDoMeuTime">{{jogo.nomeDoTime}}</div>\n            <img class="meuescudo" src="{{jogo.meuescudo}}" style="width:20px;height:25px;" />\n            <div class="minhaQuantidadeDeGols">{{jogo.suaQuantidadeDeGols}} X {{jogo.quantidadeDeGolsDoOponente}}</div>\n            <img class="escudoOponente" src="{{jogo.escudooponente}}" style="width: 20px;height: 25px;" />\n            <div class="nomeDoOponente">{{jogo.nomeDoOponente}}</div>\n          </ion-card>\n        </ion-row>\n      </ion-grid>\n    </ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/jogos/jogos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_jogod_jogod__["a" /* JogodProvider */]])
    ], JogosPage);
    return JogosPage;
}());

//# sourceMappingURL=jogos.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LojaVirtualPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the LojaVirtualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LojaVirtualPage = (function () {
    function LojaVirtualPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LojaVirtualPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LojaVirtualPage');
    };
    LojaVirtualPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loja-virtual',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/loja-virtual/loja-virtual.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Loja virtual</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/loja-virtual/loja-virtual.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], LojaVirtualPage);
    return LojaVirtualPage;
}());

//# sourceMappingURL=loja-virtual.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinhaEscalacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-minha-escalacao',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/minha-escalacao/minha-escalacao.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Minha escalação</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/minha-escalacao/minha-escalacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MinhaEscalacaoPage);
    return MinhaEscalacaoPage;
}());

//# sourceMappingURL=minha-escalacao.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramaDePontosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the ProgramaDePontosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProgramaDePontosPage = (function () {
    function ProgramaDePontosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProgramaDePontosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProgramaDePontosPage');
    };
    ProgramaDePontosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-programa-de-pontos',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/programa-de-pontos/programa-de-pontos.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Programa de pontos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/programa-de-pontos/programa-de-pontos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ProgramaDePontosPage);
    return ProgramaDePontosPage;
}());

//# sourceMappingURL=programa-de-pontos.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedesSociaisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-redes-sociais',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/redes-sociais/redes-sociais.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Redes Sociais</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/redes-sociais/redes-sociais.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], RedesSociaisPage);
    return RedesSociaisPage;
}());

//# sourceMappingURL=redes-sociais.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SejaSocioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-seja-socio',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/seja-socio/seja-socio.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Seja sócio</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/seja-socio/seja-socio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], SejaSocioPage);
    return SejaSocioPage;
}());

//# sourceMappingURL=seja-socio.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabelasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the TabelasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabelasPage = (function () {
    function TabelasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TabelasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabelasPage');
    };
    TabelasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabelas',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/tabelas/tabelas.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Tabelas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/tabelas/tabelas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], TabelasPage);
    return TabelasPage;
}());

//# sourceMappingURL=tabelas.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_noticia_noticia__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_streaming_media__ = __webpack_require__(207);
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
            selector: 'page-videos',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/videos/videos.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Vídeos</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-card *ngFor="let video of videos">\n        <div class="card-title">{{video.titulo}}</div>\n        <img src="{{video.miniatura}}" style="width:350px;height:200px;" (click)="startVideo(video.url)" />\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/videos/videos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_noticia_noticia__["a" /* NoticiaProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_streaming_media__["a" /* StreamingMedia */]])
    ], VideosPage);
    return VideosPage;
}());

//# sourceMappingURL=videos.js.map

/***/ }),

/***/ 148:
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
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ajude-o-clube/ajude-o-clube.module": [
		501,
		18
	],
	"../pages/cadastro/cadastro.module": [
		502,
		17
	],
	"../pages/chat-da-torcida/chat-da-torcida.module": [
		503,
		16
	],
	"../pages/compra-de-ingressos/compra-de-ingressos.module": [
		504,
		15
	],
	"../pages/configuracoes/configuracoes.module": [
		202
	],
	"../pages/cronograma-de-sorteios/cronograma-de-sorteios.module": [
		505,
		14
	],
	"../pages/detalhe-noticia/detalhe-noticia.module": [
		203
	],
	"../pages/elenco/elenco.module": [
		506,
		13
	],
	"../pages/enquetes/enquetes.module": [
		507,
		12
	],
	"../pages/estatisticas/estatisticas.module": [
		508,
		11
	],
	"../pages/extrato-da-arrecadacao/extrato-da-arrecadacao.module": [
		509,
		10
	],
	"../pages/historia-do-clube/historia-do-clube.module": [
		510,
		9
	],
	"../pages/jogos/jogos.module": [
		511,
		8
	],
	"../pages/login/login.module": [
		206
	],
	"../pages/loja-virtual/loja-virtual.module": [
		512,
		7
	],
	"../pages/minha-escalacao/minha-escalacao.module": [
		513,
		6
	],
	"../pages/noticias/noticias.module": [
		514,
		5
	],
	"../pages/programa-de-pontos/programa-de-pontos.module": [
		515,
		4
	],
	"../pages/redes-sociais/redes-sociais.module": [
		516,
		3
	],
	"../pages/seja-socio/seja-socio.module": [
		517,
		2
	],
	"../pages/tabelas/tabelas.module": [
		518,
		1
	],
	"../pages/videos/videos.module": [
		519,
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
webpackAsyncContext.id = 189;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesPageModule", function() { return ConfiguracoesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracoes__ = __webpack_require__(99);
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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheNoticiaPageModule", function() { return DetalheNoticiaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhe_noticia__ = __webpack_require__(204);
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

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheNoticiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-detalhe-noticia',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/detalhe-noticia/detalhe-noticia.html"*/'<!--\n  Generated template for the DetalheNoticiaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="vermelhoEscuro">\n    <ion-title>Notícia</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <img src="{{noticia.url}}" style="height:200px;" class="img"/>\n  <img src="../../assets/imgs/logo.png" style="width:30px;height: 34px;" class="logo">\n  <div class="nome">Joinville</div>\n  <div class="fixline2">{{ noticia.timestamp | date: \'dd.MM.yyyy\'}}</div>\n  <div class="fixline">{{noticia.nome}}</div>\n\n  <div class="fixline3">{{noticia.descricao}}</div>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/detalhe-noticia/detalhe-noticia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], DetalheNoticiaPage);
    return DetalheNoticiaPage;
}());

//# sourceMappingURL=detalhe-noticia.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JogodProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_database__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(33);
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
        var user = this.authService.getUserData();
        console.log(user);
        return this.db.list('jogos');
    };
    JogodProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
    ], JogodProvider);
    return JogodProvider;
}());

//# sourceMappingURL=jogod.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(56);
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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(459);
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

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(406);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_noticias_noticias__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_videos_videos__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabelas_tabelas__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_jogos_jogos__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_estatisticas_estatisticas__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_elenco_elenco__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_minha_escalacao_minha_escalacao__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_historia_do_clube_historia_do_clube__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_chat_da_torcida_chat_da_torcida__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_enquetes_enquetes__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_redes_sociais_redes_sociais__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_loja_virtual_loja_virtual__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_compra_de_ingressos_compra_de_ingressos__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_seja_socio_seja_socio__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_ajude_o_clube_ajude_o_clube__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_extrato_da_arrecadacao_extrato_da_arrecadacao__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_programa_de_pontos_programa_de_pontos__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_cronograma_de_sorteios_cronograma_de_sorteios__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_cadastro_cadastro__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_detalhe_noticia_detalhe_noticia__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_configuracoes_configuracoes__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_user_user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pluritech_ion_mask__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pluritech_ion_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32__pluritech_ion_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angularfire2__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_angularfire2_database__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_angularfire2_auth__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_streaming_media__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angular2_moment__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_noticia_noticia__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_jogod_jogod__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_detalhe_noticia_detalhe_noticia_module__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_login_login_module__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_configuracoes_configuracoes_module__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































// Import your library

// Import the AF2 Module




// Import moment module






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
                __WEBPACK_IMPORTED_MODULE_16__pages_enquetes_enquetes__["a" /* EnquetesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_redes_sociais_redes_sociais__["a" /* RedesSociaisPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_loja_virtual_loja_virtual__["a" /* LojaVirtualPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_compra_de_ingressos_compra_de_ingressos__["a" /* CompraDeIngressosPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_seja_socio_seja_socio__["a" /* SejaSocioPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_ajude_o_clube_ajude_o_clube__["a" /* AjudeOClubePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_extrato_da_arrecadacao_extrato_da_arrecadacao__["a" /* ExtratoDaArrecadacaoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_programa_de_pontos_programa_de_pontos__["a" /* ProgramaDePontosPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_cronograma_de_sorteios_cronograma_de_sorteios__["a" /* CronogramaDeSorteiosPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_cadastro_cadastro__["a" /* CadastroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_33_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_34_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_35_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_37_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ajude-o-clube/ajude-o-clube.module#AjudeOClubePageModule', name: 'AjudeOClubePage', segment: 'ajude-o-clube', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat-da-torcida/chat-da-torcida.module#ChatDaTorcidaPageModule', name: 'ChatDaTorcidaPage', segment: 'chat-da-torcida', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/compra-de-ingressos/compra-de-ingressos.module#CompraDeIngressosPageModule', name: 'CompraDeIngressosPage', segment: 'compra-de-ingressos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configuracoes/configuracoes.module#ConfiguracoesPageModule', name: 'ConfiguracoesPage', segment: 'configuracoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cronograma-de-sorteios/cronograma-de-sorteios.module#CronogramaDeSorteiosPageModule', name: 'CronogramaDeSorteiosPage', segment: 'cronograma-de-sorteios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhe-noticia/detalhe-noticia.module#DetalheNoticiaPageModule', name: 'DetalheNoticiaPage', segment: 'detalhe-noticia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/elenco/elenco.module#ElencoPageModule', name: 'ElencoPage', segment: 'elenco', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/enquetes/enquetes.module#EnquetesPageModule', name: 'EnquetesPage', segment: 'enquetes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estatisticas/estatisticas.module#EstatisticasPageModule', name: 'EstatisticasPage', segment: 'estatisticas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extrato-da-arrecadacao/extrato-da-arrecadacao.module#ExtratoDaArrecadacaoPageModule', name: 'ExtratoDaArrecadacaoPage', segment: 'extrato-da-arrecadacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historia-do-clube/historia-do-clube.module#HistoriaDoClubePageModule', name: 'HistoriaDoClubePage', segment: 'historia-do-clube', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_40__pages_detalhe_noticia_detalhe_noticia_module__["DetalheNoticiaPageModule"],
                __WEBPACK_IMPORTED_MODULE_42__pages_configuracoes_configuracoes_module__["ConfiguracoesPageModule"],
                __WEBPACK_IMPORTED_MODULE_41__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_32__pluritech_ion_mask__["IonMaskModule"].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
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
                __WEBPACK_IMPORTED_MODULE_28__pages_configuracoes_configuracoes__["a" /* ConfiguracoesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_streaming_media__["a" /* StreamingMedia */],
                __WEBPACK_IMPORTED_MODULE_31__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_noticia_noticia__["a" /* NoticiaProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_jogod_jogod__["a" /* JogodProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_noticias_noticias__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_videos_videos__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabelas_tabelas__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_jogos_jogos__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_estatisticas_estatisticas__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_elenco_elenco__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_minha_escalacao_minha_escalacao__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_historia_do_clube_historia_do_clube__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chat_da_torcida_chat_da_torcida__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_enquetes_enquetes__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_redes_sociais_redes_sociais__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_loja_virtual_loja_virtual__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_compra_de_ingressos_compra_de_ingressos__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_seja_socio_seja_socio__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_ajude_o_clube_ajude_o_clube__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_extrato_da_arrecadacao_extrato_da_arrecadacao__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_programa_de_pontos_programa_de_pontos__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_cronograma_de_sorteios_cronograma_de_sorteios__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth_auth__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_configuracoes_configuracoes__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_user_user__ = __webpack_require__(33);
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
            { title: 'Ajude o Clube', component: __WEBPACK_IMPORTED_MODULE_18__pages_ajude_o_clube_ajude_o_clube__["a" /* AjudeOClubePage */] },
            { title: 'Extrato de arrecadação', component: __WEBPACK_IMPORTED_MODULE_19__pages_extrato_da_arrecadacao_extrato_da_arrecadacao__["a" /* ExtratoDaArrecadacaoPage */] },
            { title: 'Programa de Pontos', component: __WEBPACK_IMPORTED_MODULE_20__pages_programa_de_pontos_programa_de_pontos__["a" /* ProgramaDePontosPage */] },
            { title: 'Cronograma de Sorteios', component: __WEBPACK_IMPORTED_MODULE_21__pages_cronograma_de_sorteios_cronograma_de_sorteios__["a" /* CronogramaDeSorteiosPage */] }
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

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 251,
	"./af.js": 251,
	"./ar": 252,
	"./ar-dz": 253,
	"./ar-dz.js": 253,
	"./ar-kw": 254,
	"./ar-kw.js": 254,
	"./ar-ly": 255,
	"./ar-ly.js": 255,
	"./ar-ma": 256,
	"./ar-ma.js": 256,
	"./ar-sa": 257,
	"./ar-sa.js": 257,
	"./ar-tn": 258,
	"./ar-tn.js": 258,
	"./ar.js": 252,
	"./az": 259,
	"./az.js": 259,
	"./be": 260,
	"./be.js": 260,
	"./bg": 261,
	"./bg.js": 261,
	"./bm": 262,
	"./bm.js": 262,
	"./bn": 263,
	"./bn.js": 263,
	"./bo": 264,
	"./bo.js": 264,
	"./br": 265,
	"./br.js": 265,
	"./bs": 266,
	"./bs.js": 266,
	"./ca": 267,
	"./ca.js": 267,
	"./cs": 268,
	"./cs.js": 268,
	"./cv": 269,
	"./cv.js": 269,
	"./cy": 270,
	"./cy.js": 270,
	"./da": 271,
	"./da.js": 271,
	"./de": 272,
	"./de-at": 273,
	"./de-at.js": 273,
	"./de-ch": 274,
	"./de-ch.js": 274,
	"./de.js": 272,
	"./dv": 275,
	"./dv.js": 275,
	"./el": 276,
	"./el.js": 276,
	"./en-au": 277,
	"./en-au.js": 277,
	"./en-ca": 278,
	"./en-ca.js": 278,
	"./en-gb": 279,
	"./en-gb.js": 279,
	"./en-ie": 280,
	"./en-ie.js": 280,
	"./en-il": 281,
	"./en-il.js": 281,
	"./en-nz": 282,
	"./en-nz.js": 282,
	"./eo": 283,
	"./eo.js": 283,
	"./es": 284,
	"./es-do": 285,
	"./es-do.js": 285,
	"./es-us": 286,
	"./es-us.js": 286,
	"./es.js": 284,
	"./et": 287,
	"./et.js": 287,
	"./eu": 288,
	"./eu.js": 288,
	"./fa": 289,
	"./fa.js": 289,
	"./fi": 290,
	"./fi.js": 290,
	"./fo": 291,
	"./fo.js": 291,
	"./fr": 292,
	"./fr-ca": 293,
	"./fr-ca.js": 293,
	"./fr-ch": 294,
	"./fr-ch.js": 294,
	"./fr.js": 292,
	"./fy": 295,
	"./fy.js": 295,
	"./gd": 296,
	"./gd.js": 296,
	"./gl": 297,
	"./gl.js": 297,
	"./gom-latn": 298,
	"./gom-latn.js": 298,
	"./gu": 299,
	"./gu.js": 299,
	"./he": 300,
	"./he.js": 300,
	"./hi": 301,
	"./hi.js": 301,
	"./hr": 302,
	"./hr.js": 302,
	"./hu": 303,
	"./hu.js": 303,
	"./hy-am": 304,
	"./hy-am.js": 304,
	"./id": 305,
	"./id.js": 305,
	"./is": 306,
	"./is.js": 306,
	"./it": 307,
	"./it.js": 307,
	"./ja": 308,
	"./ja.js": 308,
	"./jv": 309,
	"./jv.js": 309,
	"./ka": 310,
	"./ka.js": 310,
	"./kk": 311,
	"./kk.js": 311,
	"./km": 312,
	"./km.js": 312,
	"./kn": 313,
	"./kn.js": 313,
	"./ko": 314,
	"./ko.js": 314,
	"./ky": 315,
	"./ky.js": 315,
	"./lb": 316,
	"./lb.js": 316,
	"./lo": 317,
	"./lo.js": 317,
	"./lt": 318,
	"./lt.js": 318,
	"./lv": 319,
	"./lv.js": 319,
	"./me": 320,
	"./me.js": 320,
	"./mi": 321,
	"./mi.js": 321,
	"./mk": 322,
	"./mk.js": 322,
	"./ml": 323,
	"./ml.js": 323,
	"./mn": 324,
	"./mn.js": 324,
	"./mr": 325,
	"./mr.js": 325,
	"./ms": 326,
	"./ms-my": 327,
	"./ms-my.js": 327,
	"./ms.js": 326,
	"./mt": 328,
	"./mt.js": 328,
	"./my": 329,
	"./my.js": 329,
	"./nb": 330,
	"./nb.js": 330,
	"./ne": 331,
	"./ne.js": 331,
	"./nl": 332,
	"./nl-be": 333,
	"./nl-be.js": 333,
	"./nl.js": 332,
	"./nn": 334,
	"./nn.js": 334,
	"./pa-in": 335,
	"./pa-in.js": 335,
	"./pl": 336,
	"./pl.js": 336,
	"./pt": 337,
	"./pt-br": 338,
	"./pt-br.js": 338,
	"./pt.js": 337,
	"./ro": 339,
	"./ro.js": 339,
	"./ru": 340,
	"./ru.js": 340,
	"./sd": 341,
	"./sd.js": 341,
	"./se": 342,
	"./se.js": 342,
	"./si": 343,
	"./si.js": 343,
	"./sk": 344,
	"./sk.js": 344,
	"./sl": 345,
	"./sl.js": 345,
	"./sq": 346,
	"./sq.js": 346,
	"./sr": 347,
	"./sr-cyrl": 348,
	"./sr-cyrl.js": 348,
	"./sr.js": 347,
	"./ss": 349,
	"./ss.js": 349,
	"./sv": 350,
	"./sv.js": 350,
	"./sw": 351,
	"./sw.js": 351,
	"./ta": 352,
	"./ta.js": 352,
	"./te": 353,
	"./te.js": 353,
	"./tet": 354,
	"./tet.js": 354,
	"./tg": 355,
	"./tg.js": 355,
	"./th": 356,
	"./th.js": 356,
	"./tl-ph": 357,
	"./tl-ph.js": 357,
	"./tlh": 358,
	"./tlh.js": 358,
	"./tr": 359,
	"./tr.js": 359,
	"./tzl": 360,
	"./tzl.js": 360,
	"./tzm": 361,
	"./tzm-latn": 362,
	"./tzm-latn.js": 362,
	"./tzm.js": 361,
	"./ug-cn": 363,
	"./ug-cn.js": 363,
	"./uk": 364,
	"./uk.js": 364,
	"./ur": 365,
	"./ur.js": 365,
	"./uz": 366,
	"./uz-latn": 367,
	"./uz-latn.js": 367,
	"./uz.js": 366,
	"./vi": 368,
	"./vi.js": 368,
	"./x-pseudo": 369,
	"./x-pseudo.js": 369,
	"./yo": 370,
	"./yo.js": 370,
	"./zh-cn": 371,
	"./zh-cn.js": 371,
	"./zh-hk": 372,
	"./zh-hk.js": 372,
	"./zh-tw": 373,
	"./zh-tw.js": 373
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
webpackContext.id = 498;

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__noticias_noticias__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(33);
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
            selector: 'page-login',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/login/login.html"*/'<!--\n  Generated template for the CadastroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <div style="text-align:center">\n    <img src="../../assets/imgs/logo.png" style="width:150px;height:150px;">\n  </div>\n  <h6 class="h6">CPF</h6>\n  <ion-input type="text" placeholder="xxx.xxx.xxx-xx" [(ngModel)]="userInfo.cpf"></ion-input>\n  <h6 class="h6">Senha</h6>\n  <ion-input type="password" placeholder="Mínimo de 6 caracteres" [(ngModel)]="userInfo.password"></ion-input>\n  <br>\n  <div style="text-align:center">\n    <button ion-button padding round color="vermelhoEscuro" (click)="login()">Login</button>\n    <br>\n    <br>\n    <br>\n    <button class="h6" ion-button padding round color="amareloEscuro" (click)="signup()">Cadastro</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_noticia_noticia__ = __webpack_require__(93);
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
            selector: 'page-noticias',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/noticias/noticias.html"*/'<ion-header>\n  <ion-navbar color="vermelhoEscuro">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Notícias</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let noticia of noticias" col-12 (click)="detalhe(noticia)">\n        <ion-card *ngIf="noticia.destaque == \'Sim\'">\n          <img src="{{noticia.url}}" style="height:200px;" />\n          <div class="card-title">{{noticia.nome}}</div>\n          <div class="card-subtitle">{{ noticia.timestamp | date: \'dd.MM.yyyy\'}}</div>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngFor="let noticia of noticias" col-5 (click)="detalhe(noticia)">\n        <ion-card *ngIf="noticia.destaque == \'Não\'" class="col6">\n            <img src="{{noticia.url}}" style="height:70px;" />\n          <div class="fixline">{{noticia.nome}}</div>\n          <div class="fixline2">{{ noticia.timestamp | date: \'dd.MM.yyyy\'}}</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/noticias/noticias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_noticia_noticia__["a" /* NoticiaProvider */]])
    ], NoticiasPage);
    return NoticiasPage;
}());

//# sourceMappingURL=noticias.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_database__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(33);
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
        var user = this.authService.getUserData();
        console.log(user);
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

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(33);
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

/***/ })

},[385]);
//# sourceMappingURL=main.js.map