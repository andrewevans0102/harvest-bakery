import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { OrdersPageComponent } from './orders/orders-page/orders-page.component';
import { CreateOrdersComponent } from './orders/create-orders/create-orders.component';
import { ViewOrdersComponent } from './orders/view-orders/view-orders.component';
import { EditOrdersComponent } from './orders/edit-orders/edit-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    OrdersPageComponent,
    CreateOrdersComponent,
    ViewOrdersComponent,
    EditOrdersComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
