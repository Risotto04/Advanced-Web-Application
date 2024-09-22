import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrl: './checkout-payment.component.css',
})
export class CheckoutPaymentComponent {
  @Output() state = new EventEmitter<number>();
 
  cardnumber?: string;
  expnumber?: string;
  cardcode?: string;

  constructor() {
  }

  submit() {
    console.log('cardnumber:', this.cardnumber);
    console.log('expnumber:', this.expnumber);
    console.log('cardcode:', this.cardcode);
  }
  onClick() {
    // this.callbackFunction(1);
    if ((this.cardnumber && this.expnumber && this.cardcode)) {
    this.state.emit(3);
  }
}
}
