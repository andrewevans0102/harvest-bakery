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
  loginId: string;

  constructor(
    private ordersService: OrdersService,
    private auth: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    const login = JSON.parse(localStorage.getItem('login'));
    this.loginId = login.loginId;
    if (localStorage.getItem('login') === undefined) {
      alert('you are not authorized to view this page');
      this.router.navigateByUrl('/landing-page');
    }
    this.getOrders(this.loginId);
  }

  async getOrders(ownerId: string) {
    try {
      this.orders = await this.ordersService.getOrdersByOwner(ownerId);
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      const response = await this.auth.logout();
      alert(response);
      localStorage.removeItem('login');
      this.router.navigateByUrl('/landing-page');
    } catch (error) {
      throw error;
    }
  }

  viewOrder(id: number) {
    this.router.navigateByUrl(`/single-order/${id}/VIEW`);
  }

  async createOrder() {
    try {
      const orders = await this.ordersService.getAll();
      this.router.navigateByUrl(`/single-order/${orders.length + 1}/CREATE)`);
    } catch (error) {
      throw error;
    }
  }

  async deleteOrder(orderId: string) {
    try {
      await this.ordersService.deleteOrder(orderId);
      this.getOrders(this.loginId);
    } catch (error) {
      throw error;
    }
  }
}
