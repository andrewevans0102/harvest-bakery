import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from '../../services/orders/orders.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order/order';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit, OnDestroy {
  orders: Order[] = [];
  loginId: string;
  unsubscribe$ = new Subject();
  orders$: Observable<Order[]>;

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
    this.orders$ = this.ordersService.getOrdersByOwner(this.loginId);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  logout() {
    this.auth
      .logout()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        () => {
          localStorage.removeItem('login');
          this.router.navigateByUrl('/landing-page');
        },
        error => console.log(error)
      );
  }

  viewOrder(id: number) {
    this.router.navigateByUrl(`/single-order/${id}/VIEW`);
  }

  createOrder() {
    try {
      this.router.navigateByUrl(
        `/single-order/${this.orders.length + 1}/CREATE)`
      );
    } catch (error) {
      throw error;
    }
  }

  deleteOrder(orderId: string, orders: Order[]) {
    this.ordersService
      .deleteOrder(orderId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        () => {
          const orderIndex = orders.findIndex(
            order => order.id === parseInt(orderId, 10)
          );
          if (orderIndex !== -1) {
            orders.splice(orderIndex, 1);
          }
        },
        error => console.log(error)
      );
  }
}
