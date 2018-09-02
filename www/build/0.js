webpackJsonp([0],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPageModule", function() { return ServicesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServicesPageModule = /** @class */ (function () {
    function ServicesPageModule() {
    }
    ServicesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__services__["a" /* ServicesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__services__["a" /* ServicesPage */]),
            ],
        })
    ], ServicesPageModule);
    return ServicesPageModule;
}());

//# sourceMappingURL=services.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicesPage = /** @class */ (function () {
    function ServicesPage(view, navCtrl, navParams) {
        this.view = view;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = [];
        this.data = [{
                first: "Lia",
                surname: "Block",
                email: "Lia.Block@chadrick.org",
                address: "00286 Tristian Parkways",
                created: "April 11, 2009",
                balance: "$7,285.26"
            },
            {
                first: "Toney",
                surname: "Swift",
                email: "Toney.Swift@zander.name",
                address: "7800 Orlando Shoal",
                created: "October 9, 2008",
                balance: "$5,759.81"
            },
            {
                first: "Fiona",
                surname: "Streich",
                email: "azurerabbit88@gmail.com",
                address: "7367 Rutherford Tunnel",
                created: "June 10, 2010",
                balance: "$1,401.72"
            },
            {
                first: "Abigayle",
                surname: "Dicki",
                email: "greywolf94@gmail.com",
                address: "01450 Loyal Ridge",
                created: "July 13, 2010",
                balance: "$1,043.64"
            },
            {
                first: "Nina",
                surname: "Marvin",
                email: "Nina.Marvin@vinnie.net",
                address: "5322 Huel Plain",
                created: "September 14, 2016",
                balance: "$9,582.92"
            },
            {
                first: "Herta",
                surname: "Pollich",
                email: "goldwolf12@gmail.com",
                address: "119 Burnice Fall",
                created: "October 3, 2015",
                balance: "$6,705.83"
            },
            {
                first: "Antonio",
                surname: "Stracke",
                email: "indigorabbit69@gmail.com",
                address: "4807 Tyreek Villages",
                created: "May 24, 2011",
                balance: "$1,087.00"
            },
            {
                first: "Weldon",
                surname: "Nienow",
                email: "tansquirrel32@gmail.com",
                address: "3335 Muriel Corners",
                created: "May 17, 2012",
                balance: "$4,077.67"
            },
            {
                first: "Will",
                surname: "Bins",
                email: "Will.Bins@cierra.biz",
                address: "52967 Koss Grove",
                created: "August 28, 2009",
                balance: "$5,112.48"
            },
            {
                first: "Shane",
                surname: "Corkery",
                email: "Shane.Corkery@erika.biz",
                address: "793 Hudson Estates",
                created: "January 14, 2012",
                balance: "$1,180.61"
            },
            {
                first: "Ansley",
                surname: "Herzog",
                email: "Ansley.Herzog@lucius.net",
                address: "5657 Willms Village",
                created: "May 20, 2012",
                balance: "$6,138.70"
            },
            {
                first: "Timmothy",
                surname: "Kub",
                email: "azurerabbit15@gmail.com",
                address: "0128 Abshire Highway",
                created: "May 11, 2017",
                balance: "$4,427.70"
            },
            {
                first: "Maurice",
                surname: "Jenkins",
                email: "silversquirrel52@gmail.com",
                address: "7464 Johan Spring",
                created: "January 3, 2011",
                balance: "$9,639.12"
            },
            {
                first: "Vance",
                surname: "Hills",
                email: "magentawolf69@gmail.com",
                address: "5162 Tre Mission",
                created: "October 5, 2015",
                balance: "$6,246.24"
            },
            {
                first: "Bridie",
                surname: "Wolff",
                email: "Bridie.Wolff@leatha.net",
                address: "892 Jammie Wall",
                created: "October 24, 2013",
                balance: "$4,392.72"
            }];
    }
    ServicesPage.prototype.ionViewDidLoad = function () {
        this.section_colour = this.navParams.get('section_colour');
        this.message = this.navParams.get('message');
    };
    ServicesPage.prototype.close = function () { this.view.dismiss(); };
    ServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-services',template:/*ion-inline-start:"C:\Users\David Ojo\Desktop\Media\Enterprise Projects\york-app\app\src\pages\services\services.html"*/'<ion-header>\n  <ion-navbar [color]="section_colour">\n    <ion-title>{{section_colour}} Services</ion-title>\n    <ion-buttons end> \n      <button ion-button clear icon-only (click)="close()"> <ion-icon  name="close"></ion-icon></button> \n    </ion-buttons>\n  </ion-navbar>\n</ion-header> \n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let person of data">\n        <ion-thumbnail item-start>\n            <img src="http://www.crawfordsworld.com/rob/economics/Apprentice6/AP6images/tim1.jpg">\n          </ion-thumbnail>\n          <h2>{{person.first}} {{person.surname}}</h2>\n          <h3>{{person.address}}</h3>\n          <p>{{person.created}}</p>\n        </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\David Ojo\Desktop\Media\Enterprise Projects\york-app\app\src\pages\services\services.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ServicesPage);
    return ServicesPage;
}());

//# sourceMappingURL=services.js.map

/***/ })

});
//# sourceMappingURL=0.js.map