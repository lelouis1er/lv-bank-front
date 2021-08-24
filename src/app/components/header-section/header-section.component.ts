import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteStateService } from 'src/app/services/route-state.service';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent implements OnInit {

  @Input() titre : string = '';
  @Input() description : string ='';
  @Input() retour : boolean = false;

  constructor(private router : Router,
              private routeStateService : RouteStateService) { }

  ngOnInit(): void {
  }

  link_returToParent () {
    if (this.retour != false) {
      this.routeStateService.loadPrevious();
    }
  }

}
