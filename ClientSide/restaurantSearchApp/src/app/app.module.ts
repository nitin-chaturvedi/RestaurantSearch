import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';

import { JwtInterceptor } from './gaurd/jwt.interceptor';
import { ErrorInterceptor } from './gaurd/error.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


import { RsSideNavComponent } from './rs-side-nav/rs-side-nav.component';
import { RsSearchbarComponent } from './rs-searchbar/rs-searchbar.component';
import { RsLoginComponent } from './rs-login/rs-login.component';
import { RsHomeComponent } from './rs-home/rs-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { RsRegisterComponent } from './rs-register/rs-register.component';
import { RsSearchRestaurantComponent } from './rs-search-restaurant/rs-search-restaurant.component';
import { RsAddRestaurantComponent } from './rs-add-restaurant/rs-add-restaurant.component';


@NgModule({
  declarations: [
    AppComponent,
    RsSideNavComponent,
    RsSearchbarComponent,
    RsLoginComponent,
    RsHomeComponent,
    PageNotFoundComponent,
    RsRegisterComponent,
    RsSearchRestaurantComponent,
    RsAddRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonToggleModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    ToastrModule.forRoot() 
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
