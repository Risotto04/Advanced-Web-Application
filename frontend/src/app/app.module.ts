import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { CategoryComponent } from './modules/category/category.component';
import { SubscriptionComponent } from './modules/subscription/subscription.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    SubscriptionComponent,
    AboutUsComponent,
    CheckoutComponent,
    ContentLayoutComponent,
    FooterComponent,
    NavComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
