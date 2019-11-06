import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OrdersPageComponent } from './orders/orders-page/orders-page.component';
import { SingleOrderComponent } from './orders/single-order/single-order.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'orders-page', component: OrdersPageComponent },
  { path: 'single-order/:id/:usage', component: SingleOrderComponent },
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
