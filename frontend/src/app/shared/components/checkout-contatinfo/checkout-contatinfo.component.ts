import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkout-contatinfo',
  templateUrl: './checkout-contatinfo.component.html',
  styleUrl: './checkout-contatinfo.component.css',
})
export class CheckoutContatinfoComponent {
  @Output() state = new EventEmitter<number>();
  constructor() {}
  onClick() {
    // this.callbackFunction(1);
    this.state.emit(1);
  }
}
