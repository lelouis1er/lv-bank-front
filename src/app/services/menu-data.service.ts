import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomerMenuItem } from '../models/menu-Item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {

  public toogleMenuBar : BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }

  getMenuList () : CustomerMenuItem [] {
    return [
      {
        Label : 'Acceuil',
        Icon : 'pi-home',
        RouterLink : '/main/dasboard',
        Childs : [],
        IsChildVisible : false
      },
      {
        Label : 'Parametrage',
        Icon : 'pi-cog',
        RouterLink : '',
        Childs : [
          {
            Label : 'Banque',
            Icon : 'pi-credit-card',
            RouterLink : '/main/parametrage/banque',
            Childs : [],
            IsChildVisible : false
          }
        ],
        IsChildVisible : false
      },
      {
        Label : 'Securite',
        Icon : 'pi-lock',
        RouterLink : '',
        Childs : [
          {
            Label : 'Roles',
            Icon : 'pi-users',
            RouterLink : '/main/securite/role',
            Childs : [],
            IsChildVisible : false
          }
        ],
        IsChildVisible : false
      },
      {
        Label : 'CRM',
        Icon : 'pi-plus',
        RouterLink : '',
        Childs : [
          {
            Label : 'Client',
            Icon : 'fa-hand',
            RouterLink : '/main/crm/client',
            Childs : [],
            IsChildVisible : false
          }
        ],
        IsChildVisible : false
      }
    ]
  }
}
