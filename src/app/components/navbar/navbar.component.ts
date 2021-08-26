import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserIdleService } from 'angular-user-idle';
import { User } from 'src/app/models/user.model';
import { MenuDataService } from 'src/app/services/menu-data.service';
import { RouteStateService } from 'src/app/services/route-state.service';
import { SessionService } from 'src/app/services/session.service';
import { UserContextService } from 'src/app/services/user-context.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  user: User = new User;

  constructor(
    private router: Router,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    private userIdle: UserIdleService,
    private userContextService: UserContextService,
    private menuDataService: MenuDataService) {


  }

  ngOnInit() {
    this.user = this.sessionService.getItem("currentUser");

    //Start watching for user inactivity.
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe();

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => {
      this.logout();
    });
  }

  logout() {
    this.userIdle.stopWatching();
    this.routeStateService.removeAll();
    this.userContextService.logout();
    this.sessionService.removeItem('active-menu');
    this.router.navigate(['/login']);
  }


  toggleMenu() {
    this.menuDataService.toogleMenuBar.next(true);
  }

  selectTheme(theme: string) {
    this.sessionService.setItem("selected-theme", theme);
  }

  backToHome () {
    this.router.navigateByUrl('/main/dashboard');
  }

}
