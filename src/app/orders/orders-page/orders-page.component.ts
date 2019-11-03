import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders/orders.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {
  orders = [];

  constructor(
    private ordersService: OrdersService,
    private auth: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getOrders();
  }

  async getOrders() {
    this.orders = await this.ordersService.getOrders();
  }

  async logout() {
    const response = await this.auth.logout();
    alert(response.message);
    this.router.navigateByUrl('/landing-page');
  }
}
