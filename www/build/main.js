webpackJsonp([1],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/services/services.module": [
		272,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_map_genie_map_genie__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_services__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(serviceCtrl, modal, toast, mapGenie, navCtrl) {
        this.serviceCtrl = serviceCtrl;
        this.modal = modal;
        this.toast = toast;
        this.mapGenie = mapGenie;
        this.navCtrl = navCtrl;
        this.searchTerm = '';
        this.latLng = { lat: 39.9666628, lng: -76.749997 };
    }
    HomePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.serviceCtrl.getData().subscribe(function (data) {
            return data.forEach(function (element) {
                _this.services.push(element);
            });
        });
        this.initMap();
        console.log(this.services);
        this.mapGenie.AddSections(this.map);
        google.maps.event.addListener(this.mapGenie.red_zone, 'click', function (event) { return _this.presentModal({ section_colour: 'danger', message: 'Red Section Services' }); });
        google.maps.event.addListener(this.mapGenie.yellow_zone, 'click', function (event) { return _this.presentModal({ section_colour: 'amber', message: 'Yellow Section Services' }); });
        google.maps.event.addListener(this.mapGenie.green_zone, 'click', function (event) { return _this.presentModal({ section_colour: 'secondary', message: 'Green Section Services' }); });
    };
    HomePage.prototype.initMap = function () {
        var styledMapType = new google.maps.StyledMapType([
            { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] },
            {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#c9b2a6' }]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#dcd2be' }]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#ae9e90' }]
            },
            {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{ color: '#dfd2ae' }]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{ color: '#dfd2ae' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#93817c' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{ color: '#a5b076' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#447530' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#f5f1e6' }]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{ color: '#fdfcf8' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#f8c967' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#e9bc62' }]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{ color: '#e98d58' }]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#db8555' }]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#806b63' }]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{ color: '#dfd2ae' }]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#8f7d77' }]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#ebe3cd' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{ color: '#dfd2ae' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{ color: '#b9d3c2' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#92998d' }]
            }
        ], { name: 'Styled Map' });
        this.map = new google.maps.Map(this.mapElement.nativeElement, { center: this.latLng, zoom: 15 });
        this.map.mapTypes.set('styled_map', styledMapType);
        this.map.setMapTypeId('styled_map');
        // var services = ['assets/kml/auto.kml' , 'assets/kml/auto.kml' , 'assets/kml/bail_bonds.kml' , 'assets/kml/church.kml' , 'assets/kml/convience_stores.kml' , 'assets/kml/hospital.kml' , 'assets/kml/lawyers.kml' , 'assets/kml/wyndham.kml'];
    };
    HomePage.prototype.presentModal = function (data) { this.modal.create('ServicesPage', data).present(); };
    HomePage.prototype.list = function (key, fab) { fab.close(); this.mapGenie.listPlaces(this.map, key); };
    // clear(){ this.mapGenie.clearMarkers(); }
    HomePage.prototype.filterItems = function (searchTerm) {
        return this.services.filter(function (item) {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\David Ojo\Desktop\Media\Enterprise Projects\york-app\app\src\pages\home\home.html"*/'  <ion-content>\n            <ion-searchbar \n                class=search\n                spellcheck=true\n                animated=true\n                [(ngModel)]=myInput\n                showCancelButton=true\n                [(ngModel)]=searchTerm>\n          </ion-searchbar>\n    <div #map id="map"></div>\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\David Ojo\Desktop\Media\Enterprise Projects\york-app\app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_services_services__["a" /* ServicesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_services_services__["a" /* ServicesProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_map_genie_map_genie__["a" /* MapGenieProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_map_genie_map_genie__["a" /* MapGenieProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _f || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapGenieProvider; });
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


var MapGenieProvider = /** @class */ (function () {
    function MapGenieProvider(toast) {
        this.toast = toast;
        this.latLng = { lat: 39.9666628, lng: -76.749997 };
        this.infowindow = new google.maps.InfoWindow;
    }
    MapGenieProvider.prototype.AddSections = function (map) {
        var red_zone_coords = [
            { lat: 39.95565212917886, lng: -76.7499294208896 },
            { lat: 39.9608331163431, lng: -76.73276424407959 },
            { lat: 39.95631005406854, lng: -76.73211955303071 },
            { lat: 39.95407308361964, lng: -76.73263453716157 },
            { lat: 39.95361252179747, lng: -76.73465155834077 },
            { lat: 39.9534480346808, lng: -76.73726939433931 },
            { lat: 39.952263715763145, lng: -76.74035929912446 },
            { lat: 39.951638650288956, lng: -76.74289130443452 },
            { lat: 39.950651693173356, lng: -76.74512290233491 },
            { lat: 39.94973052035041, lng: -76.74619578594087 },
            { lat: 39.9506845919733, lng: -76.74731158489107 },
            { lat: 39.955783714663156, lng: -76.7499294208896 },
            { lat: 39.95565212917886, lng: -76.7499294208896 }
        ];
        var yellow_zone_coords = [
            { lat: 39.95963247800763, lng: -76.73710488508317 },
            { lat: 39.96101403254857, lng: -76.73779153059098 },
            { lat: 39.96637065347542, lng: -76.748241416913 },
            { lat: 39.96459450309773, lng: -76.74950741956803 },
            { lat: 39.9641833505999, lng: -76.74963616560075 },
            { lat: 39.96372285686692, lng: -76.74978636930558 },
            { lat: 39.963393930872975, lng: -76.75010823438737 },
            { lat: 39.95954537917795, lng: -76.75362729261491 },
            { lat: 39.958492746118, lng: -76.7509236259279 },
            { lat: 39.957308514557155, lng: -76.75158881376359 },
            { lat: 39.95694666193423, lng: -76.75064467619035 },
            { lat: 39.955786303634746, lng: -76.74992841307778 },
            { lat: 39.959709851629874, lng: -76.73710488508317 },
            { lat: 39.95963247800763, lng: -76.73710488508317 }
        ];
        var green_zone_coords = [
            { lat: 39.956502, lng: -76.731667 },
            { lat: 39.958344, lng: -76.725702 },
            { lat: 39.9541, lng: -76.723556 },
            { lat: 39.952159, lng: -76.722955 },
            { lat: 39.950745, lng: -76.722398 },
            { lat: 39.950547, lng: -76.722398 },
            { lat: 39.949955, lng: -76.725788 },
            { lat: 39.948705, lng: -76.729994 },
            { lat: 39.953245, lng: -76.733684 },
            { lat: 39.954166, lng: -76.732225 },
            { lat: 39.955318, lng: -76.731796 },
            { lat: 39.9566, lng: -76.731624 }
        ];
        this.red_zone = new google.maps.Polygon({
            label: 'Section 1',
            clickable: true,
            paths: red_zone_coords,
            strokeColor: '#A93226',
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: '#E74C3C',
            fillOpacity: 0.35
        });
        this.yellow_zone = new google.maps.Polygon({
            label: 'Section 2',
            clickable: true,
            paths: yellow_zone_coords,
            strokeColor: '#D68910',
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: '#F1C40F',
            fillOpacity: 0.35
        });
        this.green_zone = new google.maps.Polygon({
            label: 'Section 3',
            clickable: true,
            paths: green_zone_coords,
            strokeColor: '#145A32',
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: '#239B56',
            fillOpacity: 0.35
        });
        this.red_zone.setMap(map);
        this.yellow_zone.setMap(map);
        this.green_zone.setMap(map);
    };
    MapGenieProvider.prototype.SectionContent = function (content, map) {
        this.infowindow.setContent(content);
        _; //this.infowindow.setPosition(loc);
        this.infowindow.open(map);
    };
    MapGenieProvider.prototype.listPlaces = function (map, key) {
        var _this = this;
        this.presentMessage("Searching for " + key + " in nearby!!");
        this.places = [];
        var service = new google.maps.places.PlacesService(map);
        service.textSearch({
            location: this.latLng,
            radius: '500',
            query: key
        }, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    _this.createMarker(map, results[i]);
                    _this.places.push(results[i]);
                }
            }
        });
        console.log(key);
    };
    MapGenieProvider.prototype.presentMessage = function (msg) { this.toast.create({ message: msg, position: 'top', duration: 2000, showCloseButton: true, closeButtonText: 'Got it!', }).present(); };
    MapGenieProvider.prototype.clearMarkers = function () { for (var i = 0; i < this.places.length; i++) {
        this.places[i].setMap(null);
    } this.places.length = 0; };
    MapGenieProvider.prototype.createMarker = function (map, place) {
        var _this = this;
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({ map: map, position: placeLoc, animation: google.maps.Animation.BOUNCE });
        google.maps.event.addListener(marker, 'click', function (event) { _this.infowindow.setContent(place.name); console.log(event); });
    };
    MapGenieProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], MapGenieProvider);
    return MapGenieProvider;
}());

//# sourceMappingURL=map-genie.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicesProvider = /** @class */ (function () {
    function ServicesProvider(http) {
        this.http = http;
        this.services = [];
    }
    ServicesProvider.prototype.getData = function () {
        return this.http.get('/assets/listOfServices.json').map(function (res) { return res.json().response; });
    };
    ServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], ServicesProvider);
    return ServicesProvider;
    var _a;
}());

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_map_genie_map_genie__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_services_services__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/services/services.module#ServicesPageModule', name: 'ServicesPage', segment: 'services', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_map_genie_map_genie__["a" /* MapGenieProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_services_services__["a" /* ServicesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\David Ojo\Desktop\Media\Enterprise Projects\york-app\app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\David Ojo\Desktop\Media\Enterprise Projects\york-app\app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map