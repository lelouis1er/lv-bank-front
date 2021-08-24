import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Agence } from 'src/app/models/agence.model';
import { AgenceService } from 'src/app/services/crm/agence.service';

@Component({
  selector: 'app-agence',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



}
