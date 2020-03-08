import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService, NotificationService } from '../services';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'app-rs-search-restaurant',
  templateUrl: './rs-search-restaurant.component.html',
  styleUrls: ['./rs-search-restaurant.component.scss']
})
export class RsSearchRestaurantComponent implements OnInit {

 @ViewChild(MatPaginator, {static: false}) set MatPaginator(paginator: MatPaginator) {
    this.restaurantList.paginator=paginator;
 }

  constructor(private userService:UserService,private notificationService:NotificationService) {
    this.restaurantList = [];
   }

  restaurantList:any;
  
  displayedColumns: string[] = ['restaurantCode', 'name', 'city', 'country','description'];

  ngOnInit() {
  }

  search(city){
    this.userService.getRestaurant(city).subscribe(
      data=>{
        this.restaurantList=new MatTableDataSource<Restaurant>(data);
      },
        error => {
          this.notificationService.error(error, ''); 
      }
    )
  }

  
  displayStyleChanged(value){
    console.log(value)
  }
}
