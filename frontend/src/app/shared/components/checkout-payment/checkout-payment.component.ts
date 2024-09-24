import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrl: './checkout-payment.component.css',
})
export class CheckoutPaymentComponent {
  @Output() state = new EventEmitter<number>();
  @Output() onSendData = new EventEmitter();
  @Input('data') data: any;

  receipt!: File;
  qr!: string;
  private baseURL = 'http://localhost:3001';

  constructor(private http: HttpClient) {
    this.http
      .get<{ data: string }>(`${this.baseURL}/genqr/100`)
      .subscribe((data) => {
        this.qr = btoa(unescape(encodeURIComponent(data.data)));
      });
  }

  async onSubmit() {
    console.log(this.data);
    if (this.receipt) {
      try {
        var img = await this.convertBase64(this.receipt);
        this.onSendData!.emit(img);
      } catch (e) {}
    }
  }

  onImagePicked(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.receipt = input.files[0];
    }
  }
  convertBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  // data: {
  //   slip: string;
  //   recipient: string;
  //   recipient_phone_number: string;
  //   product_idsAndQuantity: { product_id: string; quantity: number }[];
  // };
}
