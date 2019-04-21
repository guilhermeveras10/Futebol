webpackJsonp([0],{

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheCompraDeIngressosPageModule", function() { return DetalheCompraDeIngressosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhe_compra_de_ingressos__ = __webpack_require__(530);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalheCompraDeIngressosPageModule = (function () {
    function DetalheCompraDeIngressosPageModule() {
    }
    DetalheCompraDeIngressosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalhe_compra_de_ingressos__["a" /* DetalheCompraDeIngressosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__detalhe_compra_de_ingressos__["a" /* DetalheCompraDeIngressosPage */]),
            ],
        })
    ], DetalheCompraDeIngressosPageModule);
    return DetalheCompraDeIngressosPageModule;
}());

//# sourceMappingURL=detalhe-compra-de-ingressos.module.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheCompraDeIngressosPage; });
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
 * Generated class for the DetalheCompraDeIngressosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalheCompraDeIngressosPage = (function () {
    function DetalheCompraDeIngressosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jogo = this.navParams.data.jogo || {};
    }
    DetalheCompraDeIngressosPage.prototype.escolha1 = function () {
        this.escolha = 1;
    };
    DetalheCompraDeIngressosPage.prototype.escolha2 = function () {
        this.escolha = 2;
    };
    DetalheCompraDeIngressosPage.prototype.escolha3 = function () {
        this.escolha = 3;
    };
    DetalheCompraDeIngressosPage.prototype.escolha4 = function () {
        this.escolha = 4;
    };
    DetalheCompraDeIngressosPage.prototype.escolha5 = function () {
        this.escolha = 5;
    };
    DetalheCompraDeIngressosPage.prototype.escolha6 = function () {
        this.escolha = 6;
    };
    DetalheCompraDeIngressosPage.prototype.comprar = function () {
        if (this.escolha == 1) {
        }
        else if (this.escolha == 2) {
        }
        else if (this.escolha == 3) {
        }
        else if (this.escolha == 4) {
        }
        else if (this.escolha == 5) {
        }
        else if (this.escolha == 6) {
        }
    };
    DetalheCompraDeIngressosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detalhe-compra-de-ingressos',template:/*ion-inline-start:"/home/guilherme/workspace/Futebol/src/pages/detalhe-compra-de-ingressos/detalhe-compra-de-ingressos.html"*/'<!--\n  Generated template for the DetalheCompraDeIngressosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="vermelhoEscuro">\n    <ion-title>Compra</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <img class="campeonato" src="{{jogo.campeonato}}" style="width:30px;height:25px;" />\n  <div class="nomeDoCampeonato">{{jogo.nomeDoCampeonato}}</div>\n  <div class="data" style="text-align:center">{{jogo.dataDoJogo}}</div>\n  <div class="nomeDoMeuTime">{{jogo.nomeDoTime}}</div>\n  <img class="meuescudo" src="{{jogo.meuescudo}}" style="width:20px;height:25px;" />\n  <div class="minhaQuantidadeDeGols">{{jogo.suaQuantidadeDeGols}} X {{jogo.quantidadeDeGolsDoOponente}}</div>\n  <img class="escudoOponente" src="{{jogo.escudooponente}}" style="width: 20px;height: 25px;" />\n  <div class="nomeDoOponente">{{jogo.nomeDoOponente}}</div>\n\n  <ion-label class="label1">Arquibancada descoberta R${{jogo.valorDoIngressoA}}</ion-label>\n  <ion-checkbox class="check1" (click)="escolha1()"></ion-checkbox>\n  <ion-label class="label2">Arquibancada descoberta meia R${{jogo.valorDoIngressoA / 2}}</ion-label>\n   <ion-checkbox class="check2" (click)="escolha2()"></ion-checkbox>\n  <ion-label class="label3">Arquibancada coberta R${{jogo.valorDoIngressoB}}</ion-label>\n  <ion-checkbox class="check3" (click)="escolha3()"></ion-checkbox>\n  <ion-label class="label4">Arquibancada coberta meia R${{jogo.valorDoIngressoB / 2}}</ion-label>\n  <ion-checkbox class="check4" (click)="escolha4()"></ion-checkbox>\n  <ion-label class="label5">Camarote R${{jogo.valorDoIngressoC}}</ion-label>\n  <ion-checkbox class="check5" (click)="escolha5()"></ion-checkbox>\n  <ion-label class="label6">Camarote meia R${{jogo.valorDoIngressoC / 2}}</ion-label>\n  <ion-checkbox class="check6" (click)="escolha6()"></ion-checkbox>\n\n  <button class="button" ion-button padding round color="vermelhoEscuro" (click)="comprar()">Comprar</button>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/Futebol/src/pages/detalhe-compra-de-ingressos/detalhe-compra-de-ingressos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], DetalheCompraDeIngressosPage);
    return DetalheCompraDeIngressosPage;
}());

//# sourceMappingURL=detalhe-compra-de-ingressos.js.map

/***/ })

});
//# sourceMappingURL=0.js.map