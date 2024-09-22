import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checkout-contatinfo',
  templateUrl: './checkout-contatinfo.component.html',
  styleUrls: ['./checkout-contatinfo.component.css'],
})
export class CheckoutContatinfoComponent {
  @Output() state = new EventEmitter<number>();

  email?: string;
  name?: string;
  phonenumber?: string;

  constructor() {
  }

  submit() {
    console.log('Email:', this.email);
    console.log('name:', this.name);
    console.log('phone:', this.phonenumber);
  }
  onClick() {
    // this.callbackFunction(1);
    if ((this.phonenumber && this.email && this.name)) {
    this.state.emit(1);
  }
}
}
