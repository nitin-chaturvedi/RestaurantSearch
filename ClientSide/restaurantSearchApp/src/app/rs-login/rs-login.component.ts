
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService, NotificationService } from '../services';
import { User } from '../models/user';
import { RsFormBuilder } from '../formBuilder/rs-form-builder';

@Component({
  selector: 'app-rs-login',
  templateUrl: './rs-login.component.html',
  styleUrls: ['./rs-login.component.scss']
})
export class RsLoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private notificationService: NotificationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
    this.user = new User();
  }

  ngOnInit() {
    this.loginForm = RsFormBuilder.getUserLoginFormGroup();

    // get return url from route parameters or default to '/'
    // this helps when user is loged out and redirected to the login page
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  login(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
          this.notificationService.success('Logged In', '');
        },
        error => {
          this.notificationService.error(error, '');
          this.loading = false;
        });
  }
}

