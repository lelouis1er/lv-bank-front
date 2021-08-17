import { Component, OnInit } from "@angular/core";
import { ApplicationStateService } from "../services/application-state.service";
import { MenuDataService } from "../services/menu-data.service";

@Component({
  selector: 'template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  isMenuVisible: boolean = false;

  constructor(
    private menuDataService: MenuDataService,
    private applicationStateService: ApplicationStateService) {

  }

  ngOnInit(): void {
    var that = this;
    this.menuDataService.toogleMenuBar.subscribe(function (data: any) {
      if (data && data != null) {
        that.isMenuVisible = !that.isMenuVisible;
      }
    });

    if (this.applicationStateService.getIsMobileResolution()) {
      this.isMenuVisible = false;
    } else {
      this.isMenuVisible = true;
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.menuDataService.toogleMenuBar.observers.forEach ( function (element) {
      element.complete();
    });
  }

}
