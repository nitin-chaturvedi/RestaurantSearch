import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { Restaurant } from '../models/restaurant';

@Injectable({
    providedIn: 'root'
})

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    register(user: User) {
        return this.http.post('/api/v1/register', user);
    }

    getRestaurant(city){
        return this.http.get<Restaurant[]>('/api/v1/restaurants',{params:{key:city}});
    }

    addRestaurant(restaurant:Restaurant){
        return this.http.post('/api/v1/addRestaurants',restaurant);
    }
}