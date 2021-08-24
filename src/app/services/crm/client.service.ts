import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ClientBnk } from 'src/app/models/clientBnk.model';
import crmUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  list_client! : any;
  clientSubject = new Subject<any[]>();

  constructor(private _http : HttpClient) { }

  emitClientSubject () {
    this.clientSubject.next(this.list_client);
  }

  getAll () {
    this._http.get(`${crmUrl}/clients/all`).subscribe(
      (data) => {
        this.list_client = data;
        this.emitClientSubject();
      }, (error) => {
        console.log( "Une erreur s'est produite : " + error);
      }
    );
  }

  findByClient(client : string) {
    return this._http.get(`${crmUrl}/client/getAgence/`, {
      params : {client}
    });
  }

  deleteClient (client: string) {
    this._http.delete(`${crmUrl}/clients/delete/`, {
      params : {client}
    });
    this.getAll();
  }

  createClient (client : ClientBnk) {
    return this._http.post(`${crmUrl}/clients/create/`, client);
  }

}
