import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../../../../types/order';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private baseURL = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getPaymentByOrderId(): Observable<OrderResponse> {
    return this.http.get<OrderResponse>(`${this.baseURL}/paymentStatus`);
  }
}

export interface OrderResponse {
  data: Order[];
}
