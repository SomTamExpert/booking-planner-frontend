import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {User} from "../../models/user.model";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './new-user.html',
  styleUrls: ['./new-user.css']
})
export class NewUser implements OnInit {

  constructor(private authService: AuthService, private userService: UserService, private router: Router) {
  }

  user: User = {};

  ngOnInit(): void {
  }

  saveUser(): void {
    const data = {
      lastName: this.user.lastName,
      firstName: this.user.firstName,
      age: this.user.age,
      username: this.user.username,
      password: this.user.password,
      email: this.user.email
    };
    this.authService.register(data)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/login']);
        },
        error => {
          console.log(error);

        });
  }

}
