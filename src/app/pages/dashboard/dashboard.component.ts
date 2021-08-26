import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteStateService } from 'src/app/services/route-state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router : Router,
              private routeStateService : RouteStateService) { }

  ngOnInit(): void {
  }


  linkTo_crm() {
    this.routeStateService.add('crm', '/main/crm/', null, false);
  }

}
