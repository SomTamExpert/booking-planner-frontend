import {Component, OnInit} from '@angular/core';
import {BookingService} from "../../services/booking.service";
import {Router} from "@angular/router";
import {Booking} from "../../models/booking.model";
import {BookingDate} from "../../models/booking-date.model";
import {Status} from "../../models/status.enum";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {

  constructor(private bookingService: BookingService, private localStorage: StorageService, private router: Router) {
  }

  ;

  currenUser: any;
  booking: Booking = {
    title: '',
  }

  bookingDates = [] as BookingDate[];
  bookingDate: BookingDate = {
    startDateTime: new Date(),
    endDateTime: new Date()
  };

  status: Status = {
    id: 1,
    status: 'pending'
  }

  submitted = false;

  ngOnInit(): void {
    this.currenUser = this.localStorage.getUser();
  }

  saveBooking(): void {
    const data = {
      title: this.booking.title,
      bookingDates: this.bookingDates,
      status: this.status,
    };
    console.log("booking date to save", data);
    this.bookingService.createBooking(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
    setTimeout(() => {
      this.router.navigate(['/bookings/user/' + this.currenUser.username]);

    }, 500);
  }

  addBookingDates(): void {
    this.bookingDates.push(this.bookingDate);
    console.log(this.bookingDates);
  }

  removeBookingDate(index: number): void {
    this.bookingDates.splice(index, 1);
  }

  newBooking(): void {
    this.submitted = false;
    this.booking = {
      title: '',
    };
  }


}
