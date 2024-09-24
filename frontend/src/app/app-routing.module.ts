import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/page/login.component';
import { RegisterComponent } from './modules/register/page/register.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
// import { HomeComponent } from './modules/[home]/home.component';
import { CheckoutComponent } from './modules/checkout/page/checkout.component';
import { AboutUsComponent } from './modules/about-us/page/about-us.component';
import { SubscriptionComponent } from './modules/subscription/page/subscription.component';
import { PageNotFoundComponent } from './modules/page-not-found/page/page-not-found.component';
import { authGuard } from '@app/guards/auth.guard';

import { ProductDetailComponent } from './modules/product-detail/page/product-detail.component';

// Import the other components from category1

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('./modules/about-us/about-us.module').then(
            (m) => m.AboutUsModule
          ),
      },
      {
        path: 'checkout',
        canActivate: [authGuard],
        loadChildren: () =>
          import('./modules/checkout/checkout.module').then(
            (m) => m.CheckoutModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./modules/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'page-not-found',
        loadChildren: () =>
          import('./modules/page-not-found/page-not-found.module').then(
            (m) => m.PageNotFoundModule
          ),
      },
      {
        path: 'product-detail',
        loadChildren: () =>
          import('./modules/product-detail/product-detail.module').then(
            (m) => m.ProductDetailModule
          ),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./modules/register/register.module').then(
            (m) => m.RegisterModule
          ),
      },
      {
        path: 'subscription',
        loadChildren: () =>
          import('./modules/subscription/subscription.module').then(
            (m) => m.SubscriptionModule
          ),
      },
      // { path: 'subscription', component: SubscriptionComponent },
      {
        path: 'category',
        loadChildren: () =>
          import('./modules/category/category.module').then(
            (m) => m.CategoryModule
          ),
      },
    ],
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
