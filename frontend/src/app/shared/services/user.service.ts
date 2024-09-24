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
}
