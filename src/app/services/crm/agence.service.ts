import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Agence } from 'src/app/models/agence.model';
import crmUrl from './helper';

const optionReq = {
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin' : '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  agenceSubject = new Subject<any[]>();

  list_agences : any[] = [];

  constructor(private http : HttpClient) { }

  emitAgenceSubject() {
    this.agenceSubject.next(this.list_agences);
  }

  // retourne toutes les agences agence
  getAll() {
    this.http.get<any[]>(`${crmUrl}/agences/all`, optionReq).subscribe(
      (value) => {
        this.list_agences = value;
        this.emitAgenceSubject();
      }, (error) => {
        console.log ('une erreur est survenu : ' + error);
      }
    );
  }

  findByAgenceCode (code : string) {
    return this.http.get(`${crmUrl}/agences/getAgence/`, {
      params : {code}
    });
  }

  deleteAgenceBycode (code : string) {
    this.http.delete(`${crmUrl}/agences/delete/`, {
      params : {code}
    });
    this.getAll();
  }

  addAgence (agence : Agence) {
    return this.http.post(`${crmUrl}/agences/create`, agence);
  }

}
