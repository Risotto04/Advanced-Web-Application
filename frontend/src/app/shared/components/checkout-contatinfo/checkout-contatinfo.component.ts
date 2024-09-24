import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@spartan-ng/ui-forms-brain';

@Component({
  selector: 'app-checkout-contatinfo',
  templateUrl: './checkout-contatinfo.component.html',
  styleUrls: ['./checkout-contatinfo.component.css'],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
})
export class CheckoutContatinfoComponent {
  @Output() state = new EventEmitter<number>();
  @Output('onSendData') onSendData = new EventEmitter();
  contatinfoForm = this._formBuilder.group({
    email: ['', Validators.required],
    phonenumber: ['', Validators.required],
    name: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  onSubmit() {
    if (this.contatinfoForm.valid) {
      this.onSendData.emit({
        contatinfoForm: {
          email: this.contatinfoForm.value.email,
          name: this.contatinfoForm.value.name,
          phonenumber: this.contatinfoForm.value.phonenumber,
        },
      });
      this.state.emit(1);
    }
  }
}
