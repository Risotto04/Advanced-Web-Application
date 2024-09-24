import { Component } from '@angular/core';
import { UserService } from '@shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email!: string;
  password!: string;
  message!: string;
  constructor(private userService: UserService, private router: Router) {}
  onSubmit() {
    this.userService
      .login({ email: this.email, password: this.password })
      .subscribe(
        (data) => {
          if (data) {
            this.message = 'Login successful!';
            this.router.navigate(['home']);
          } else {
            alert('Invalid email or password.');
          }
        },
        (error) => {
          this.message = 'Invalid email or password.';
        }
      );
  }
}
