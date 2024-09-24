import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPayment } from '../../../../types/payment';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private baseURL = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  createPayment(
    slip:string,
    date: number,
    time:string,
    recipient: string,
    recipient_phone_number: string,
    user_id: string,
    product_ids: string[],
  ) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<IPayment>(
      `${this.baseURL}/payment`,
      {
        slip,
        date,
        time,
        recipient,
        recipient_phone_number,
        user_id,
        product_ids
      },
      { headers }
    );
  }
}

export interface PaymentResponse {
  data: IPayment[];
}

