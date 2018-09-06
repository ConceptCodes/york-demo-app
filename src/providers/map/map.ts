import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';


declare var google;

@Injectable()
export class MapProvider {
  infowindow: any;
  choice: string;
  places : any;
  latLng: any;
  red_zone: any;
  yellow_zone: any;
  green_zone: any;
  constructor(public toast: ToastController) { this.latLng = { lat: 39.9666628 , lng: -76.749997};  this.infowindow = new google.maps.InfoWindow; }

  AddSections(map){
    var red_zone_coords = [
      {lat: 39.95565212917886, lng:-76.7499294208896},
      {lat: 39.9608331163431 , lng:-76.73276424407959},
      {lat: 39.95631005406854, lng:-76.73211955303071},
      {lat: 39.95407308361964, lng:-76.73263453716157},
      {lat: 39.95361252179747, lng:-76.73465155834077},
      {lat: 39.9534480346808, lng:-76.73726939433931},
      {lat: 39.952263715763145, lng:-76.74035929912446},
      {lat: 39.951638650288956, lng:-76.74289130443452},
      {lat: 39.950651693173356, lng:-76.74512290233491},
      {lat: 39.94973052035041, lng:-76.74619578594087},
      {lat: 39.9506845919733, lng:-76.74731158489107},
      {lat: 39.955783714663156, lng:-76.7499294208896},
      {lat: 39.95565212917886, lng: -76.7499294208896}
    ];

    var yellow_zone_coords = [
     {lat: 39.95963247800763, lng: -76.73710488508317},
     {lat: 39.96101403254857, lng: -76.73779153059098},
     {lat: 39.96637065347542, lng: -76.748241416913},
     {lat: 39.96459450309773, lng: -76.74950741956803},
     {lat: 39.9641833505999, lng: -76.74963616560075},
     {lat: 39.96372285686692, lng: -76.74978636930558},
     {lat: 39.963393930872975, lng: -76.75010823438737},
     {lat: 39.95954537917795, lng: -76.75362729261491},
     {lat: 39.958492746118, lng: -76.7509236259279},
     {lat: 39.957308514557155, lng: -76.75158881376359},
     {lat: 39.95694666193423, lng: -76.75064467619035},
     {lat: 39.955786303634746, lng: -76.74992841307778},
     {lat: 39.959709851629874, lng: -76.73710488508317},
     {lat: 39.95963247800763, lng: -76.73710488508317}
    ];

    var green_zone_coords = [
      {lat: 39.956502, lng: -76.731667},
      {lat: 39.958344, lng: -76.725702},
      {lat: 39.9541, lng: -76.723556},
      {lat: 39.952159, lng: -76.722955},
      {lat: 39.950745, lng: -76.722398},
      {lat: 39.950547, lng: -76.722398},
      {lat: 39.949955, lng: -76.725788},
      {lat: 39.948705, lng: -76.729994},
      {lat: 39.953245, lng: -76.733684},
      {lat: 39.954166, lng: -76.732225},
      {lat: 39.955318, lng: -76.731796},
      {lat: 39.9566, lng: -76.731624}
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
  }


 // SectionContent(content,map) {
  //  this.infowindow.setContent(content);
   //this.infowindow.setPosition(loc);
  //  this.infowindow.open(map);
//  }

  listPlaces(map,key:string) {
    this.presentMessage(`Searching for ${key} in nearby!!`);
      this.places = [];
      let service = new google.maps.places.PlacesService(map);
        service.textSearch({
          location: this.latLng,
          radius: '500',
          query: key
        }, (results,status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              this.createMarker(map,results[i]);
              this.places.push(results[i]);
            }
          }
        });
      console.log(key);
    } 

  presentMessage(msg:string){  this.toast.create({  message: msg, position: 'top',  duration: 2000,  showCloseButton: true,  closeButtonText: 'Got it!',  }).present();  }

  clearMarkers() {  for (var i = 0; i < this.places.length; i++ ) { this.places[i].setMap(null);  }  this.places.length = 0;  }

  createMarker(map , place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({  map: map,  position: placeLoc,  animation: google.maps.Animation.BOUNCE });
    google.maps.event.addListener(marker, 'click', (event) => {  this.infowindow.setContent(place.name); console.log(event)  });
  }

}
