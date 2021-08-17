import { Component, OnInit } from '@angular/core';
import { CustomerMenuItem } from 'src/app/models/menu-Item.model';
import { ApplicationStateService } from 'src/app/services/application-state.service';
import { MenuDataService } from 'src/app/services/menu-data.service';
import { RouteStateService } from 'src/app/services/route-state.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  items: CustomerMenuItem[] = [];
  selectedItem: string = '';
  visible: boolean = false;

  constructor(private routeStateService: RouteStateService,
      private sessionService: SessionService,
      private menuDataService: MenuDataService,
      private applicationStateService: ApplicationStateService) { }

  ngOnInit() {
      this.items = this.menuDataService.getMenuList();

      var that = this;
      this.menuDataService.toogleMenuBar.subscribe(function (data: any) {
          if (data && data != null) {
              that.visible = !that.visible;
          }
      });

      if (this.applicationStateService.getIsMobileResolution()) {
          this.visible = false;
      } else {
          this.visible = true;
      }

      var activeMenu = this.sessionService.getItem("active-menu");
      if (activeMenu) {
          this.selectedItem = activeMenu;
      } else {
          this.selectedItem = "Home";
      }
  }

  ngOnDestroy() {
      this.menuDataService.toogleMenuBar.observers.forEach(function (element) { element.complete(); });
  }

  // on menu click event
  onMenuClick(menu: CustomerMenuItem) {
      // if child are available then open child
      if (menu.Childs != undefined || menu.Childs != null) {
          this.toggleSubMenu(menu);
          return;
      }
      if (menu.RouterLink == undefined || menu.RouterLink == null || menu.RouterLink == "") {
          this.routeStateService.add("Error 404", "/error", null, false);
          return;
      }
      this.selectedItem = menu.Label;
      this.sessionService.setItem("active-menu", menu.Label);
      this.routeStateService.add(menu.Label, menu.RouterLink, null, true);
      // hide menu bar after menu click for mobile layout
      setTimeout(() => {
          if (this.applicationStateService.getIsMobileResolution()) {
              this.visible = false;
          }
      }, 100);
  }

  // toggle sub menu on click
  toggleSubMenu(menu: CustomerMenuItem) {
      menu.IsChildVisible = !menu.IsChildVisible;
  }
}
