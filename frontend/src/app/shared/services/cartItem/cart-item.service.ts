import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICartItem } from '../../../../types/cartItem'
import { IProduct } from '../../../../types/product';

@Injectable({
  providedIn: 'root',
})
export class CartItemService {
  private baseURL = 'http://localhost:3001';

  cartItemTemp: ICartItem[] = []
  subtotalTemp = 0;

  constructor(private http: HttpClient) {}

  addTempCartItem(item: ICartItem) {
    this.cartItemTemp.push(item);
    if(item.product_id.price){
      this.subtotalTemp += item.product_id.price*item.quantity;
      console.log(this.subtotalTemp);
    }
  }

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

  getCartItemTemp() {
    console.log("get", this.cartItemTemp);
    return this.cartItemTemp;
   }

   getSubtotalTemp() {
    console.log(this.subtotalTemp);
    return this.subtotalTemp;
   }
}

 
interface CartItemResponse {
  data: ICartItem[];
}
