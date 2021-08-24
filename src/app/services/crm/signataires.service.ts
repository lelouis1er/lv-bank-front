import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Signataires } from 'src/app/models/signataires.model';
import crmUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SignatairesService {

  list_signataires!: any;
  signataireSubject = new Subject<any[]>();

  constructor(private _http: HttpClient) { }

  emitSignaireSubject() {
    this.signataireSubject.next(this.list_signataires.slice());
  }

  getAll () {
    this._http.get(`${crmUrl}/Signataires/all`).subscribe(
      (data) => {
        this.list_signataires = data;
        this.emitSignaireSubject();
      }, (error) => {
        console.log("Une erreur s'est produite : " + error);
      }
    );
  }

  findByserie (serie : string) {
    return this._http.get(`${crmUrl}/Signataires/getSignataire/`, {
      params : {serie}
    });
  }

  deleteSignataire(serie : string) {
    return this._http.delete(`${crmUrl}/Signataires/delete/`, {
      params : {serie}
    });
  }

  createSignataire (signataire : Signataires) {
    return this._http.post(`${crmUrl}/Signataires/create`, signataire);
  }

}
