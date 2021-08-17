import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserContextService } from "../services/user-context.service";

@Injectable()
export class AuthGarde implements CanActivate {
  constructor(private router: Router, private userContextService: UserContextService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var user = this.userContextService.user$.getValue();
    if (user != null) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url and return false
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
