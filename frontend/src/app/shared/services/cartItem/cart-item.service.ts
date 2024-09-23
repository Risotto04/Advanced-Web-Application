import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICartItem } from '../../../../types/cartItem'

@Injectable({
  providedIn: 'root',
})
export class CartItemService {
  private baseURL = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  createCartItem(
    cart_id:string,
    product_id:string,
    quantity:number
  ) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<ICartItem>(
      `${this.baseURL}/cartItem`,
      {
        cart_id,
        product_id,
        quantity
      },
      { headers }
    );
  }

  getCartItemsByUserId(id: string): Observable<CartItemResponse> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<CartItemResponse>(`${this.baseURL}/cartItems`,
      {
        user_id: id
      },
      {headers}
    );
  }
}
interface CartItemResponse {
  data: ICartItem[];
}
