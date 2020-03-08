import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RsFormBuilder } from '../formBuilder/rs-form-builder';
import { get } from 'http';
import { Router } from '@angular/router';
import { UserService, NotificationService } from '../services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-rs-add-restaurant',
  templateUrl: './rs-add-restaurant.component.html',
  styleUrls: ['./rs-add-restaurant.component.scss']
})
export class RsAddRestaurantComponent implements OnInit {

  restaurantForm:FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(){
    this.restaurantForm = RsFormBuilder.getCreateRestaurantFormGroup();

  }

  // convenience getter for easy access to form fields
  get f() { return this.restaurantForm.controls; }

  add(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.restaurantForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.addRestaurant(this.restaurantForm.value)
      .subscribe(
        data => {
          this.router.navigate(['/searchRestaurant']);
          this.notificationService.success('Successfully added restaurant', '');
        },
        error => {
          this.notificationService.error(error, '');
          this.loading = false;
        });
  }


}
