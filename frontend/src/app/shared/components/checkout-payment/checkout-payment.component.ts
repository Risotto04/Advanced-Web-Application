import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { CartItemService } from '@shared/services/cartItem/cart-item.service';
import { PaymentService } from '@shared/services/payment/payment.service';
import { CheckoutComponent } from '../../../modules/checkout/page/checkout.component';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrl: './checkout-payment.component.css',
})
export class CheckoutPaymentComponent {
  @Output() state = new EventEmitter<number>();
  @Output() onSendData = new EventEmitter();

  @Input('data') data: any;

  @ViewChild(CheckoutComponent)
  parent!: CheckoutComponent;
  receipt!: File;
  qr!: string;
  private baseURL = 'http://localhost:3001';
  isModalOpen: boolean = false;

  constructor(
    private http: HttpClient,
    private cartItemService: CartItemService,
    private paymentService: PaymentService
  ) {
    this.http
      .get<{ data: string }>(
        `${this.baseURL}/genqr/${this.cartItemService.getSubtotalTemp()}`
      )
      .subscribe((data) => {
        this.qr = btoa(unescape(encodeURIComponent(data.data)));
      });
  }

  async onSubmit() {
    if (this.receipt) {
      try {
        var img = await this.convertBase64(this.receipt);
      } catch (e) {}
    }
    const products = this.transformData(this.getCartItem());
    console.log(this.getTotalQuantity());
    if (this.getTotalQuantity() != 0) {
      this.paymentService
        .createPayment(
          img as string,
          this.data.date,
          this.data.time,
          this.data.recipientsname,
          this.data.recipientsphone,
          products
        )
        .subscribe((res: any) => {
          console.log(res.message);
          if (res.message) {
            this.openModal();
          }
        });
    }
  }
  getCartItem() {
    return this.cartItemService.getCartItemTemp();
  }
  getTotalQuantity() {
    return this.cartItemService.getTotalQuantity();
  }
  transformData = (data: any) => {
    return data.map((item: { product: any; _id: any; quantity: any }) => ({
      _id: item.product._id,
      quantity: item.quantity,
    }));
  };
  hasNullValues(obj: { name: string; age: number }): boolean {
    return Object.values(obj).some((value) => value === null || value === '');
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
  openModal(): void {
    this.isModalOpen = true;
  }
  closeModal(): void {
    this.isModalOpen = false;
  }
  closeModalOnBackdropClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }
  // data: {
  //   slip: string;
  //   recipient: string;
  //   recipient_phone_number: string;
  //   product_idsAndQuantity: { product_id: string; quantity: number }[];
  // };
}
