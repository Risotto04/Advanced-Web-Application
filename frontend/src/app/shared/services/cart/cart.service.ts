import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cart } from '@shared/models/cart';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private baseURL = 'http://localhost:3001';
  constructor(private http: HttpClient, private CookieService: CookieService) {}
  createCart(
    total_price: number,
    user_id: string,
  ) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<Cart>(
      `${this.baseURL}/cart`,
      {
        total_price: total_price,
        user_id: user_id
      },
      { headers }
    );
  }
}