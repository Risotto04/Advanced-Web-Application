import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '@shared/models/user';


@Injectable()
export class UserService {
  private baseURL = 'http://localhost:3001';
  constructor(private http: HttpClient) { }
  register(firstname: string, lastname: string, email: string, password: string, phonenumber: string) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<User>(`${this.baseURL}/register`,
      {
        firstname,
        lastname,
        email,
        password,
        phone_number: phonenumber
      },
      { headers }
    );
  }



  login(email: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true,
    };
    return this.http.post(`${this.baseURL}/signin`, {
      email,
      password,
    },
      httpOptions);
  }

  signout() {
    return this.http.get(`${this.baseURL}/signout`, {
      withCredentials: true

    });
  }


}
