import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { Subscription } from 'rxjs';
import { Agence } from 'src/app/models/agence.model';
import { ClientBnk } from 'src/app/models/clientBnk.model';
import { AgenceService } from 'src/app/services/crm/agence.service';
import { ClientService } from 'src/app/services/crm/client.service';
import { RouteStateService } from 'src/app/services/route-state.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  list_agences: Agence[] = [];
  agenceSubcribe!: Subscription;
  agence!: Agence;
  loading: boolean = true;

  list_clients: ClientBnk[] = [];
  clienBnkSubscribe!: Subscription;


  constructor(private _agenceService: AgenceService,
    private _router: Router,
    private _routeStateService: RouteStateService,
    private _clienService: ClientService) {

  }

  ngOnInit(): void {
    this.agenceSubcribe = this._agenceService.agenceSubject.subscribe(
      (data: Agence[]) => {
        this.list_agences = data;
      }
    );
    this._agenceService.emitAgenceSubject();

    this.clienBnkSubscribe = this._clienService.clientSubject.subscribe(
      (data) => {
        this.list_clients = data;
      }
    );
    this._clienService.emitClientSubject();


    this._agenceService.getAll();
    this.loading = false;
  }

  on_dropdown_value_change() {
    this.loading = true;
    console.log("chargeent des clients");
    this._clienService.findByAgence(this.agence.agcod);
    this.loading = false;
  }

  clear(table: Table) {
    table.clear();
  }

  new_customer () {
    this._routeStateService.add("new customer", "/main/crm/customer/new", null, false);
  }

}
