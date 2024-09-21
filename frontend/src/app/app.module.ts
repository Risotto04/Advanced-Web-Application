import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
import { DriedFlowersComponent } from './modules/category1/dried-flowers/dried-flowers.component';
import { LivePlantsComponent } from './modules/category1/live-plants/live-plants.component';
import { AromaCandlesComponent } from './modules/category1/aroma-candles/aroma-candles.component';
import { FreshenersComponent } from './modules/category1/fresheners/fresheners.component';

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
    DriedFlowersComponent,
    LivePlantsComponent,
    AromaCandlesComponent,
    FreshenersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
