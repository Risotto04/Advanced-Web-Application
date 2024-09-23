import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CookieService } from 'ngx-cookie-service';
import { SharedModule } from '@shared/shared.module';
import { FreshFlowersComponent } from './modules/category1/fresh-flowers/fresh-flowers.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';
import { JwtInterceptor } from '@shared/interceptors/jwt-interceptor.interceptor';
import { CheckoutContatinfoComponent } from './shared/components/checkout-contatinfo/checkout-contatinfo.component';
import { CheckoutShippingDetailsComponent } from '@shared/components/checkout-shipping-details/checkout-shipping-details.component';
import { CheckoutPaymentComponent } from '@shared/components/checkout-payment/checkout-payment.component';
import { CheckoutModule } from './modules/checkout/checkout.module';

@NgModule({
  declarations: [
    AppComponent,

    FreshFlowersComponent,
    ContentLayoutComponent,
    FooterComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    CheckoutModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
