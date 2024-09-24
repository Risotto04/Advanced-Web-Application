import { Component } from '@angular/core';
import { UserService } from '@shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email?: string;
  password?: string;
  lastname?: string;
  firstname?: string;
  phonenumber?: string;
  message?: string;

  total_price = 0;

  constructor(private userService: UserService, private router: Router) {}
  onSubmit() {
    this.userService
      .register(
        this.firstname || '',
        this.lastname || '',
        this.email || '',
        this.password || '',
        this.phonenumber || ''
      )
      .subscribe(
        (data) => {
          console.log(data);
          alert('Sign Up successful!');
          this.message = 'Sign Up successful!';
        },
        (error) => {
          console.log(error.message);
          alert('Sign Up failed, Please change email');
          this.message = 'Invalid';
        }
      );
  }
}
