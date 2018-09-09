import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { Service } from '../../models/service';
//import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})

export class ServicesPage {
  colour: string;
  zone_name: string;
  data: Array<Service> = [];
  constructor(public serviceCtrl: ServicesProvider, public view: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  this.data =  this.serviceCtrl.services;
  }

  ionViewDidLoad() {
    this.colour = this.navParams.get('colour');
    this.zone_name = this.navParams.get('section_name');
  }

  showDetail(service : Service) { alert(service); /*this.navCtrl.push(DetailPage, service); */}

  close() { this.view.dismiss(); } 
}
