import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../../../../types/payment';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private baseURL = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getPaymentByOrderId(): Observable<PaymentResponse> {
    return this.http.get<PaymentResponse>(`${this.baseURL}/payment`);
  }
}

export interface PaymentResponse {
  data: Payment[];
}
