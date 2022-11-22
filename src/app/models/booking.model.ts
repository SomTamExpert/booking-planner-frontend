import {Status} from "./status.enum";
import {BookingDate} from "./booking-date.model";

export class Booking {
  id?: number;
  title?: string;
  status?: Status;
  bookingDates?: BookingDate[];
}
