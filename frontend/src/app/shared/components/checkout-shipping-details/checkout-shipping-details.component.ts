import { Time } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout-shipping-details',
  templateUrl: './checkout-shipping-details.component.html',
})
export class CheckoutShippingDetailsComponent {
  @Output() state = new EventEmitter<number>();
  @Output('onSendData') onSendData = new EventEmitter();

  shippingForm = this._formBuilder.group({
    recipientsname: ['', Validators.required],
    recipientsphone: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  onSubmit() {
    if (this.shippingForm.valid) {
      this.onSendData.emit({
        shippingForm: {
          recipientsname: this.shippingForm.value.recipientsname,
          recipientsphone: this.shippingForm.value.recipientsphone,
          date: this.shippingForm.value.date,
          time: this.shippingForm.value.time,
        },
      });
      this.state.emit(2);
    }
  }
}
