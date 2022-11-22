import {Component, OnInit} from '@angular/core';
import {StorageService} from "./services/storage.service";
import {BookingService} from "./services/booking.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'booking-planner-frontend';
}
