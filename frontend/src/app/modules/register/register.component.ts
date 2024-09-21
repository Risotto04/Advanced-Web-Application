import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private http: HttpClient) {}

  onRegister() {
    const userData = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      phone_number: this.phone_number,
    };

    this.http.post('http://localhost:3000/register', userData).subscribe(
      (response) => console.log('Registration successful', response),
      (error) => console.error('Registration error', error)
    );
  }
}
