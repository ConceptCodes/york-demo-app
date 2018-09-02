import { Injectable } from '@angular/core';
import { Service } from '../../models/service';
import { Http , Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicesProvider {
  services: Service[];
  constructor(public http: Http) {
    this.services = [];
  }

  getData() {
    return this.http.get('/assets/listOfServices.json').map(
      (res: Response) => res.json().response);
  }

}
