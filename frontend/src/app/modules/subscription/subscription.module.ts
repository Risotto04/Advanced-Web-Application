import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionComponent } from './page/subscription.component';
import { SubscriptionRoutingModule } from './subscription-routing.module';

@NgModule({
  declarations: [SubscriptionComponent],
  imports: [CommonModule, SubscriptionRoutingModule],
})
export class SubscriptionModule {}
