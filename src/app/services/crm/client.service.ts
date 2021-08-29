import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ClientBnk } from 'src/app/models/clientBnk.model';
import crmUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  list_client!: any;
  clientSubject = new Subject<any[]>();
  params = new HttpParams();

  constructor(private _http: HttpClient) { }

  emitClientSubject() {
    this.clientSubject.next(this.list_client);
  }

  getAll() {
    this._http.get(`${crmUrl}/clients/all`)
      .subscribe(
        (data) => {
          this.list_client = data;
          this.emitClientSubject();
        }, (error) => {
          console.log("Une erreur s'est produite : " + error);
        }
      );
  }

  findByClientId(clientId: string) {
    this.params.append('client', clientId);
    return this._http.get(`${crmUrl}/clients/details`, {params: this.params});
  }

  findByAgence(agenceId: string) {
    this.params.append('agence', agenceId);
    return this._http.get<ClientBnk[]>(`${crmUrl}/client/getAgence/`, { params: this.params })
      .subscribe(
        (data) => {
          this.list_client = data;
          this.emitClientSubject();
        },
        (error) => {
          console.log('Une erreur est survenu : ' + error)
        }
      );
  }

  deleteClient(client: string) {
    this.params.append('idclient', client);
    this._http.delete(`${crmUrl}/clients/delete/`, { params: this.params });
    this.getAll();
  }

  createClient(client: ClientBnk) {
    return this._http.post(`${crmUrl}/clients/create/`, client);
  }

}
