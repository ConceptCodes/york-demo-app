import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController, LoadingController, Loading } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServicesProvider } from '../providers/services/services';
import { Service } from '../models/service';
import { DetailPage } from '../pages/detail/detail';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  services : Array<Service> = [];
  searchTerm: string = '';
  loading:Loading;
  constructor(public loadingCtrl: LoadingController, public modalCtrl:ModalController , public serviceCtrl: ServicesProvider, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.handleSplashScreen();
    this.loadServices();
  }
 
  async handleSplashScreen(): Promise<void> {
    try {
      await this.platform.ready();
    } catch (error) {
      console.error('Platform initialization bug')
    }
    
    const splash = document.getElementById('splash-screen')
    splash.style.opacity = '0'
    setTimeout(() => { splash.remove() }, 300)
  }

  loadServices(){ return this.services = this.serviceCtrl.services; }

  query() {
    this.loadServices();
    this.services =  this.services.filter((item) => {
      return item.Name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

  open(service:Service){ this.modalCtrl.create(DetailPage, service).present();  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault(); 
      this.splashScreen.hide();
    });
  }

}
