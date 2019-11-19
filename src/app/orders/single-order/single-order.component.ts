import { Component, OnInit, OnDestroy } from '@angular/core';
import { GoodsService } from 'src/app/services/goods/goods.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { Goods } from 'src/app/models/goods/goods';
import { Order } from 'src/app/models/order/order';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-create-orders',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.scss']
})
export class SingleOrderComponent implements OnInit, OnDestroy {
  goods$: Observable<Goods[]>;
  unsubscribe$ = new Subject();
  loginId: number;
  orderId: number;
  usage: string;
  view = 'VIEW';
  create = 'CREATE';

  constructor(
    private goodsService: GoodsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService
  ) {
    this.orderId = parseInt(
      this.activatedRoute.snapshot.paramMap.get('id'),
      10
    );
    this.usage = this.activatedRoute.snapshot.paramMap.get('usage');

    if (this.usage === 'VIEW') {
      this.goods$ = this.ordersService.getOrderById(this.orderId);
    } else {
      this.goods$ = this.goodsService.getGoods();
    }
  }

  ngOnInit() {
    const login = JSON.parse(localStorage.getItem('login'));
    if (localStorage.getItem('login') === undefined) {
      alert('you are not authorized to view this page');
      this.router.navigateByUrl('/landing-page');
    }
    this.loginId = login.loginId;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  selectGood(good: Goods, quantity: string) {
    good.quantity = parseInt(quantity, 10);
  }

  goBackToOrdersPage() {
    this.router.navigateByUrl('/orders-page');
  }

  saveOrder(goods: Goods[]) {
    // when creating the order make sure the id is 0 as that will be set server side
    const savedOrder: Order = new Order();
    savedOrder.owner = this.loginId;
    savedOrder.total = 0;
    goods.forEach(good => {
      savedOrder.total = savedOrder.total + good.quantity * good.price;
    });
    savedOrder.goods = goods;
    savedOrder.date = Date.now();

    this.ordersService
      .createOrder(savedOrder)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        () => {
          this.router.navigateByUrl('/orders-page');
        },
        error => console.log(error)
      );
  }
}
