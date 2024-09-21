import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { HomeComponent } from './modules/home/home.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { SubscriptionComponent } from './modules/subscription/subscription.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { authGuard } from '@app/guards/auth.guard';

// Import the other components from category1
import { FreshFlowersComponent } from './modules/category1/fresh-flowers/fresh-flowers.component';
import { DriedFlowersComponent } from './modules/category1/dried-flowers/dried-flowers.component';
import { LivePlantsComponent } from './modules/category1/live-plants/live-plants.component';
import { AromaCandlesComponent } from './modules/category1/aroma-candles/aroma-candles.component';
import { FreshenersComponent } from './modules/category1/fresheners/fresheners.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'fresh-flowers',
        component: FreshFlowersComponent,
      },
      {
        path: 'dried-flowers',
        component: DriedFlowersComponent,
      },
      {
        path: 'live-plants',
        component: LivePlantsComponent,
      },
      {
        path: 'aroma-candles',
        component: AromaCandlesComponent,
      },
      {
        path: 'fresheners',
        component: FreshenersComponent,
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [authGuard],
      },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'subscription', component: SubscriptionComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
