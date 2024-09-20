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
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'category',
        component: CheckoutComponent,
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
