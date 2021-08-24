import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Agence } from 'src/app/models/agence.model';
import { AgenceService } from 'src/app/services/crm/agence.service';
import { RouteStateService } from 'src/app/services/route-state.service';

@Component({
  selector: 'app-agence-list',
  templateUrl: './agence-list.component.html',
  styleUrls: ['./agence-list.component.css']
})
export class AgenceListComponent implements OnInit {

  list_agences!: Agence[];
  agenceSubscription!: Subscription;

  cols: any[] = [
    { field: 'code', header: 'Code' },
    { field: 'libelle', header: 'Libelle' },
    { field: 'pays', header: 'Pays' },
    { field: 'adresse', header: 'Adresse' },
    { field: 'bp', header: 'Bp' },
    { field: 'tel', header: 'Téléphone' },
    { field: 'fax', header: 'Fax' },
    { field: 'ddc', header: 'Date de création' }
  ];

  pageSize: number = 0;

  constructor(private _agenceService: AgenceService,
              private router: Router,
              private routeStateService : RouteStateService) { }

  ngOnInit(): void {
    this.agenceSubscription = this._agenceService.agenceSubject.subscribe(
      (agences: Agence[]) => {
        this.list_agences = agences;
        console.log(this.list_agences);
      }
    );
    this._agenceService.getAll();

    this.pageSize = 10;
  }

  actualiser() {
    this._agenceService.getAll();
  }

  link_onCreate () {
    this.routeStateService.add("Nouvelle agence", "/main/crm/agence/create", null, false);
  }

}
