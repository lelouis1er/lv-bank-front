import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Institution } from 'src/app/models/institution.model';
import crmUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  list_institution! : any[];
  institutionSubject = new Subject<any[]>();

  constructor(private _http: HttpClient) { }

  emitInstitutionSubject () {
    this.institutionSubject.next(this.list_institution);
  }

  getAll () {
    this._http.get(`${crmUrl}/institutions/all`).subscribe(
      (data: any) => {
        this.list_institution = data;
        this.emitInstitutionSubject();
      }, (error) => {
        console.log("Une erreur c'est produite : " + error);
      }
    );
  }

  fingByCobacId (cobacId : string) {
    return this._http.get(`${crmUrl}/institutions/getInstitution/`, {
      params : {cobacId}
    });
  }

  deleteInstitution (cobacId : string) {
    this._http.delete(`${crmUrl}/institutions/delete/`, {
      params : {cobacId}
    });
  }

  createInstitution (institution : Institution) {
    return this._http.post(`${crmUrl}/institutions/create`, institution);
  }

}
