import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CookieService } from 'ngx-cookie-service';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { FreshFlowersComponent } from './modules/category1/fresh-flowers/fresh-flowers.component';
import { SubscriptionComponent } from './modules/subscription/subscription.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { UserService } from '@shared/services/user.service';
import { ProductDetailComponent } from './modules/product-detail/product-detail.component';

import { JwtInterceptor } from '@shared/interceptors/jwt-interceptor.interceptor';
import { CheckoutContatinfoComponent } from '@shared/components/checkout-contatinfo/checkout-contatinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FreshFlowersComponent,
    SubscriptionComponent,
    AboutUsComponent,
    CheckoutComponent,
    ContentLayoutComponent,
    FooterComponent,
    NavComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
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
