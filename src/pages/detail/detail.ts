import { Component,  ViewChild, ElementRef } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { Service } from '../../models/service';
import { MapProvider } from '../../providers/map/map';
declare var google;

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})

export class DetailPage {
  item = {} as Service;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  latLng: any;
  constructor(public mapCtrl: MapProvider, public view: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.latLng = { lat: 39.9623206, lng : -76.7291338 };
  }

  initMap(){ this.map = new google.maps.Map(this.mapElement.nativeElement, { center: this.latLng , zoom: 20}); }
  
  ionViewDidLoad() {
    this.item = {
      Name: this.navParams.get('Name'),
      Telephone: this.navParams.get('Telephone'),
      Address: this.navParams.get('Address'),
      Desc: this.navParams.get('Desc')
    };
    this.initMap();
    setTimeout(()=> { this.mapCtrl.addressToCoords(this.item, this.map)}, 1500);
  }

  close() { this.view.dismiss(); }
}
