import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookingListComponent} from "./booking/booking-list/booking-list.component";
import {BookingDetailsComponent} from "./booking/booking-details/booking-details.component";
import {AddBookingComponent} from "./booking/add-booking/add-booking.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserDetailsComponent} from "./user/user-details/user-details.component";
import {NewUser} from "./user/new-user/new-user";
import {LoginComponent} from "./user/login/login.component";


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: "bookings", component: BookingListComponent },
  { path: "bookings/user/:username", component: BookingListComponent },
  { path: "bookings/:id", component: BookingDetailsComponent },
  { path: "add", component: AddBookingComponent },
  {path: "users", component: UserListComponent},
  {path: "users/:id", component: UserDetailsComponent},
  {path: "register", component: NewUser},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
