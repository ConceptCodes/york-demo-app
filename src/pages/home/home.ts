import { Component,  ViewChild, ElementRef } from '@angular/core';
import { NavController, ToastController, ModalController, FabContainer } from 'ionic-angular';
import { MapProvider } from '../../providers/map/map';
import { ServicesProvider } from '../../providers/services/services';
import { Service } from '../../models/service';

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
  services: Array<Service>;
  searchTerm: string = '';
  constructor(public serviceCtrl: ServicesProvider, public modal: ModalController, public toast: ToastController, public mapCtrl: MapProvider, public navCtrl: NavController) { 
    this.latLng = { lat: 39.9623206, lng : -76.7291338};
  }

  ionViewWillLoad(){ 
      this.initMap();  
      this.mapCtrl.AddSections(this.map); 
      google.maps.event.addListener(this.mapCtrl.red_zone, 'click',  (event) =>  this.presentModal({section_name: 'Zone 1', colour: 'danger'}) );  
      google.maps.event.addListener(this.mapCtrl.yellow_zone, 'click',  (event) =>   this.presentModal({section_name: 'Zone 2', colour: 'amber'}));  
      google.maps.event.addListener(this.mapCtrl.green_zone, 'click', (event) => this.presentModal({section_name: 'Zone 3', colour: 'secondary'}));
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

  list(key: string, fab: FabContainer) {  fab.close(); this.mapCtrl.listPlaces(this.map, key); }

}

