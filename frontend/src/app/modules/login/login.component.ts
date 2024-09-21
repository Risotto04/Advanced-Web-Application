import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  email: string = '';
  password: string = '';


  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    this.http.get('http://localhost:3001/signin', { 
      params: { email: this.email, password: this.password }
    }).subscribe(
      response => {
        console.log('Login successful', response);
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Login error', error);
      }
    );
  }
}
