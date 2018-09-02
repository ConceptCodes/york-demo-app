import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {
  section_colour: string;
  message: string;
  data: any = [];
  constructor(public view: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  this.data =  [{
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

  ionViewDidLoad() {
    this.section_colour = this.navParams.get('section_colour');
    this.message = this.navParams.get('message');
  }

  close() { this.view.dismiss(); }

  

}
