import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../../../types/product';

@Injectable({
  providedIn: 'root',
})
export class CartItemService {
  private baseURL = 'http://localhost:3001';

  cartItem: productWithQuantity[] = [];
  subtotal = 0;
  quantity = 0;

  constructor(private http: HttpClient) {}

  addTempCartItem(item: IProduct, quantity: number) {
    this.cartItem.push({
      product: item,
      quantity: quantity,
    });
    if (item.price) {
      this.subtotal += item.price * quantity;
    }
    this.quantity += quantity;
  }

  removeCartItem(p_id: string) {
    const index = this.cartItem.findIndex((item) => item.product._id == p_id);

    if (index > -1) {
      const removeItem = this.cartItem[index];

      if (removeItem.product.price) {
        this.subtotal -= removeItem.product.price * removeItem.quantity;
      }

      this.quantity -= removeItem.quantity;

      this.cartItem.splice(index, 1);
    }
  }

  getTotalQuantity() {
    return this.quantity;
  }

  // createCartItem(
  //   cart_id:string,
  //   product_id:string,
  //   quantity:number
  // ) {
  //   const headers = { 'Content-Type': 'application/json' };
  //   return this.http.post<ICartItem>(
  //     `${this.baseURL}/cartItem`,
  //     {
  //       cart_id,
  //       product_id,
  //       quantity
  //     },
  //     { headers }
  //   );
  // }

  //   getCartItemsByUserId(id: string): Observable<CartItemResponse> {
  //     const headers = { 'Content-Type': 'application/json' };
  //     return this.http.post<CartItemResponse>(`${this.baseURL}/cartItems`,
  //       {
  //         user_id: id
  //       },
  //       {headers}
  //     );
  //   }

  getCartItemTemp() {
    return this.cartItem;
  }

  getSubtotalTemp() {
    return this.subtotal;
  }
}

interface productWithQuantity {
  product: IProduct;
  quantity: number;
}
