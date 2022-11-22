import {Status} from "./status.enum";
import {Roles} from "./role.enum";
import {Booking} from "./booking.model";

export class User {
  id?: number;
  lastName?: string;
  firstName?: string;
  age?: number;
  username?: string;
  password?: string;
  email?: string;
  role?: Roles;
  bookings?: Booking[];
}
