import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkout-shipping-details',
  templateUrl: './checkout-shipping-details.component.html',
  styleUrl: './checkout-shipping-details.component.css',
})
export class CheckoutShippingDetailsComponent {
  @Output() state = new EventEmitter<number>();
  constructor() {}
  onClick() {
    // this.callbackFunction(1);
    this.state.emit(2);
  }
}
