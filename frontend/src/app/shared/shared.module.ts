import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmButtonDirective } from './Directive/ui-button-helm/src/lib/hlm-button.directive';

import { HlmErrorDirective } from './Directive/ui-formfield-helm/src/lib/hlm-error.directive';
import { HlmFormFieldComponent } from './Directive/ui-formfield-helm/src/lib/hlm-form-field.component';
import { HlmHintDirective } from './Directive/ui-formfield-helm/src/lib/hlm-hint.directive';
import { HlmInputDirective } from './Directive/ui-input-helm/src/lib/hlm-input.directive';
import { HlmInputErrorDirective } from './Directive/ui-input-helm/src/lib/hlm-input-error.directive';
import { CheckoutContatinfoComponent } from './components/checkout-contatinfo/checkout-contatinfo.component';
import { CheckoutShippingDetailsComponent } from './components/checkout-shipping-details/checkout-shipping-details.component';
import { CheckoutPaymentComponent } from './components/checkout-payment/checkout-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@spartan-ng/ui-forms-brain';

export * from './Directive/ui-button-helm/src/lib/hlm-button.directive';
export * from './Directive/ui-formfield-helm/src/lib/hlm-error.directive';
export * from './Directive/ui-formfield-helm/src/lib/hlm-hint.directive';
export * from './Directive/ui-formfield-helm/src/lib/hlm-error.directive';
export * from './Directive/ui-formfield-helm/src/lib/hlm-hint.directive';

@NgModule({
  declarations: [
    HlmButtonDirective,
    HlmErrorDirective,
    HlmFormFieldComponent,
    HlmHintDirective,
    HlmInputDirective,
    HlmInputErrorDirective,
    CheckoutContatinfoComponent,
    CheckoutShippingDetailsComponent,
    CheckoutPaymentComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
  exports: [
    HlmButtonDirective,
    HlmErrorDirective,
    HlmFormFieldComponent,
    HlmHintDirective,
    HlmInputDirective,
    HlmInputErrorDirective,
    CheckoutContatinfoComponent,
    CheckoutPaymentComponent,
    CheckoutShippingDetailsComponent,
  ],
})
export class SharedModule {}
