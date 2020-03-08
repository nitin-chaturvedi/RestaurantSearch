import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService, NotificationService } from '../services';
import { User } from '../models/user';

@Component({
  selector: 'rs-side-nav',
  templateUrl: './rs-side-nav.component.html',
  styleUrls: ['./rs-side-nav.component.scss']
})
export class RsSideNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,public router: Router,
    private authenticationService: AuthenticationService,
    private notificationService: NotificationService) {}

    
  logout() {
      this.authenticationService.logout();
    this.router.navigate(['/login']);
    this.notificationService.info('Yoy have successfully logged out', '');
  }

}
