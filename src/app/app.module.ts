import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BookingListComponent} from "./booking/booking-list/booking-list.component";
import {BookingDetailsComponent} from "./booking/booking-details/booking-details.component";
import {AddBookingComponent} from "./booking/add-booking/add-booking.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserDetailsComponent} from "./user/user-details/user-details.component";
import {NewUser} from "./user/new-user/new-user";
import { LoginComponent } from './user/login/login.component';
import {httpInterceptorProviders} from "./helpers/http.interceptors";

@NgModule({
  declarations: [
    AppComponent,
    BookingListComponent,
    AddBookingComponent,
    BookingDetailsComponent,
    UserListComponent,
    UserDetailsComponent,
    NewUser,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
