import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomerMenuItem } from '../models/menu-Item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {

  public toogleMenuBar: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }

  getMenuList(): CustomerMenuItem[] {
    return [
      {
        Label: 'Acceuil', Icon: 'pi pi-home', RouterLink: '/main/dashboard', Childs: null, IsChildVisible: false
      },
      {
        Label: 'Parametrage', Icon: 'pi pi-cog', RouterLink: null,
        Childs: [
          {
            Label: 'Banque', Icon: 'pi pi-credit-card', RouterLink: '/main/parametrage/banque', Childs: null, IsChildVisible: false
          }
        ],
        IsChildVisible: false
      },
      {
        Label: 'Securite', Icon: 'pi pi-lock', RouterLink: null,
        Childs: [
          {
            Label: 'Roles', Icon: 'pi pi-users', RouterLink: '/main/securite/role', Childs: null, IsChildVisible: false
          }
        ],
        IsChildVisible: false
      },
      {
        Label: 'CRM', Icon: 'pi pi-plus', RouterLink: null,
        Childs: [
          {
            Label: 'Agences', Icon: 'fa-hand', RouterLink: '/main/crm/agence', Childs: null, IsChildVisible: false
          },
          {
            Label: 'Clients', Icon: 'fa-hand', RouterLink: '/main/crm/client', Childs: null, IsChildVisible: false
          },
          {
            Label: 'Institutions', Icon: 'fa-hand', RouterLink: '/main/crm/institution', Childs: null, IsChildVisible: false
          },
          {
            Label: 'Signataires', Icon: 'fa-hand', RouterLink: '/main/crm/signataires', Childs: null, IsChildVisible: false
          },
          {
            Label: 'Tab Membre Benef', Icon: 'fa-hand', RouterLink: '/main/crm/tabMembreBenef', Childs: null, IsChildVisible: false
          }
        ],
        IsChildVisible: false
      }
    ]
  }
}
