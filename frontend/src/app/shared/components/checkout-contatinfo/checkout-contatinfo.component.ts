import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() textChanged = new EventEmitter<{
    email: string;
    name: string;
    phonenumber: string;
  }>();

  form = this._formBuilder.group({
    email: ['', Validators.required],
    phonenumber: ['', Validators.required],
    name: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  submit() {
    // console.log('Email:', this.email);
    // console.log('name:', this.name);
    // console.log('phone:', this.phonenumber);
  }
  onClick() {
    // this.callbackFunction(1);
    if (
      this.form.value.email &&
      this.form.value.phonenumber &&
      this.form.value.name
    ) {
      this.state.emit(1);
    }
  }

  sendTextToParent() {
    this.textChanged!.emit({
      email: this.form.value.email!,
      name: this.form.value.name!,
      phonenumber: this.form.value.phonenumber!,
    });
  }
}
