import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '@shared/models/user';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL = 'http://localhost:3001';
  constructor(private http: HttpClient, private CookieService: CookieService) {}
  register(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    phonenumber: string
  ) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<User>(
      `${this.baseURL}/register`,
      {
        firstname,
        lastname,
        email,
        password,
        phone_number: phonenumber,
      },
      { headers }
    );
  }

  updateUserDetails(
    firstname: string,
    lastname: string,
    email: string,
    phonenumber: string
  ) {
    const token = this.CookieService.get('Authorization');
    console.log(token);
    console.log(firstname, lastname, email, phonenumber);
    const headers = { 'Content-Type': 'application/json' , 'Authorization': `Bearer ${token}`};
    return this.http.patch<User>(
      `${this.baseURL}/users/update`, 
      {
        firstname,
        lastname,
        email,
        phone_number: phonenumber, 
      },
      { headers, withCredentials: true }
    );
  }

  signout() {
    this.CookieService.delete('Authorization');
    console.log(this.CookieService.get('Authorization'));
    return this.http.get(`${this.baseURL}/signout`);
  }

  login(userDetails: { email: string; password: string }): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http
      .post<any>(`${this.baseURL}/signin`, userDetails, httpOptions)
      .pipe(
        map((response) => {
          return true;
        }),
        catchError((error) => {
          console.log(error);
          return of(false);
        })
      );
  }

  isAuthenticated(): boolean {
    if (this.CookieService.get('Authorization')) {
      return false;
    }
    return true;
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/users`, { withCredentials: true }) ;
  }
}
