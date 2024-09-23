import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './page/checkout.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [CommonModule, CheckoutRoutingModule, FormsModule, SharedModule],
})
export class CheckoutModule {}
