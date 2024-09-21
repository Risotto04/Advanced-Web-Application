import { Injectable } from '@angular/core';
import { User } from '@shared/models/user';
import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
const httpOptions = {
  withCredentials: true
 };
@Injectable()
export class UserService {
  private baseURL = 'http://localhost:3001';
  constructor(private http: HttpClient) { }
  register(firstname: string, lastname: string, email: string, password: string, phonenumber: string) {
    return this.http.post(`${this.baseURL}/register`, { firstname, lastname, email, password, phonenumber});
  }
  login(email: string, password: string) {
  return this.http.get(`${this.baseURL}/signin`, {
    params: { email, password },
    withCredentials: true
  });
}
}
