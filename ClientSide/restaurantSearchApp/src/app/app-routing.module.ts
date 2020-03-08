import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RsLoginComponent } from './rs-login/rs-login.component';
import { RsHomeComponent } from './rs-home/rs-home.component';
import { AuthGuard } from './gaurd/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RsSearchRestaurantComponent } from './rs-search-restaurant/rs-search-restaurant.component';
import { RsAddRestaurantComponent } from './rs-add-restaurant/rs-add-restaurant.component';

const routes: Routes = [
  { path: 'login', component: RsLoginComponent },
  { path: 'pageNotFound', component: PageNotFoundComponent },
  { path: '', component: RsHomeComponent },
  { path: 'searchRestaurant', component: RsSearchRestaurantComponent }, 
  {
    path: '', canActivate: [AuthGuard], children: [
      
      { path: 'home', component: RsHomeComponent }, 
      { path: 'addRestaurant', component: RsAddRestaurantComponent } 
           
    ]
  },
  { path: '**', redirectTo: 'pageNotFound' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
