import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentStatus } from '../../../../types/paymentStatus';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private baseURL = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getPaymentByOrderId(): Observable<PaymentStatusResponse> {
    return this.http.get<PaymentStatusResponse>(`${this.baseURL}/paymentStatus`);
  }
}

export interface PaymentStatusResponse {
  data: PaymentStatus[];
}
