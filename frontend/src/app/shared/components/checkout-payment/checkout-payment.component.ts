import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrl: './checkout-payment.component.css',
})
export class CheckoutPaymentComponent {
  @Output() state = new EventEmitter<number>();
  constructor() {}
  onClick() {
    // this.state.emit(1);
  }
}
