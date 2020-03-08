import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService  } from '@auth0/angular-jwt';

import { AuthenticationService, NotificationService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  jwtHelper: JwtHelperService  = new JwtHelperService ();

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private notificationService: NotificationService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      // authorised so return true
      // for individual api the authentication will be handled in server this is just for angular client
      if (!this.jwtHelper.isTokenExpired(currentUser.token)) {
        return true;
      } else {
        this.notificationService.warning('Login Again', 'Session Expired');
      }
    }
    this.authenticationService.logout();
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
