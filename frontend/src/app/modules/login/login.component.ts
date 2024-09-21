import { Component } from '@angular/core';
import { UserService } from '@shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent{
  email?: string ;
  password?: string;
  message?: string;
  constructor(private userService: UserService) {}
  onSubmit() {
    this.userService.login(this.email || '', this.password || '')
      .subscribe(
        data => {
          console.log(data);
          this.message = 'Login successful!';
        },
        error => {
          console.log(error.message);
          this.message = 'Invalid email or password.';
        });
  }
  // onSubmit(){}
}
