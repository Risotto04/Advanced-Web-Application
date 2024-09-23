import { Time } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkout-shipping-details',
  templateUrl: './checkout-shipping-details.component.html',
})
export class CheckoutShippingDetailsComponent {
  @Output() state = new EventEmitter<number>();

  recipientsname?: string;
  recipientsphone?: string;
  date?: Date;
  time?: Date;
  street?: string;
  apartmentnumber?: string;

  constructor() {}

  submit() {
    console.log('recipientsname:', this.recipientsname);
    console.log('recipientsphone:', this.recipientsphone);
    console.log('date:', this.date);
    console.log('time:', this.time);
    console.log('street:', this.street);
    console.log('apartmentnumber:', this.apartmentnumber);
  }
  onClick() {
    // this.callbackFunction(1);
    if (
      this.recipientsname &&
      this.recipientsphone &&
      this.date &&
      this.time &&
      this.street &&
      this.apartmentnumber
    ) {
      this.state.emit(2);
    }
  }
}
