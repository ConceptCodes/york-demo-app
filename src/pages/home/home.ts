import { Component,  ViewChild, ElementRef } from '@angular/core';
import { NavController, ToastController, ModalController, FabContainer } from 'ionic-angular';
import { MapGenieProvider } from '../../providers/map-genie/map-genie';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  latLng: any;
  data: any;
  people: any;
  constructor(public modal: ModalController, public toast: ToastController, public mapGenie: MapGenieProvider, public navCtrl: NavController) { this.latLng = { lat: 39.9666628 , lng: -76.749997}; 
  this.people =  [{
    first: "Lia",
    last: "Block",
    email: "Lia.Block@chadrick.org",
    address: "00286 Tristian Parkways",
    created: "April 11, 2009",
    balance: "$7,285.26"
  },
  {
    first: "Toney",
    last: "Swift",
    email: "Toney.Swift@zander.name",
    address: "7800 Orlando Shoal",
    created: "October 9, 2008",
    balance: "$5,759.81"
  },
  {
    first: "Fiona",
    last: "Streich",
    email: "azurerabbit88@gmail.com",
    address: "7367 Rutherford Tunnel",
    created: "June 10, 2010",
    balance: "$1,401.72"
  },
  {
    first: "Abigayle",
    last: "Dicki",
    email: "greywolf94@gmail.com",
    address: "01450 Loyal Ridge",
    created: "July 13, 2010",
    balance: "$1,043.64"
  },
  {
    first: "Nina",
    last: "Marvin",
    email: "Nina.Marvin@vinnie.net",
    address: "5322 Huel Plain",
    created: "September 14, 2016",
    balance: "$9,582.92"
  }];
}
    
    ionViewWillLoad(){ 
      this.initMap();  
      this.mapGenie.AddSections(this.map); 
      google.maps.event.addListener(this.mapGenie.red_zone, 'click',  (event) =>  this.presentModal({section_colour: 'danger', message:'Red Section Services'}) );  
      google.maps.event.addListener(this.mapGenie.yellow_zone, 'click',  (event) =>   this.presentModal({section_colour: 'amber', message:'Yellow Section Services'}));  
      google.maps.event.addListener(this.mapGenie.green_zone, 'click', (event) => this.presentModal({section_colour: 'secondary', message:'Green Section Services'}));
     }
  

  initMap() {
    var styledMapType = new google.maps.StyledMapType(
      [
        {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [{color: '#c9b2a6'}]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'geometry.stroke',
          stylers: [{color: '#dcd2be'}]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [{color: '#ae9e90'}]
        },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [{color: '#dfd2ae'}]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{color: '#dfd2ae'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#93817c'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [{color: '#a5b076'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#447530'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#f5f1e6'}]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [{color: '#fdfcf8'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#f8c967'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#e9bc62'}]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry',
          stylers: [{color: '#e98d58'}]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry.stroke',
          stylers: [{color: '#db8555'}]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [{color: '#806b63'}]
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [{color: '#dfd2ae'}]
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.fill',
          stylers: [{color: '#8f7d77'}]
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#ebe3cd'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [{color: '#dfd2ae'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{color: '#b9d3c2'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#92998d'}]
        }
      ],
      {name: 'Styled Map'});

     this.map = new google.maps.Map(this.mapElement.nativeElement, {  center: this.latLng,  zoom: 15  });
    this.map.mapTypes.set('styled_map', styledMapType);
    this.map.setMapTypeId('styled_map');
  } 

  presentModal(data){  this.modal.create('ServicesPage', data).present();  }

  list(key: string, fab: FabContainer) {  fab.close(); this.mapGenie.listPlaces(this.map, key); }

  clear(){ this.mapGenie.clearMarkers(); }

}