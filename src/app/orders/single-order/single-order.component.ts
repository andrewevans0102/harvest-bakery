import { Component, OnInit } from '@angular/core';
import { GoodsService } from 'src/app/services/goods/goods.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { Goods } from 'src/app/models/goods/goods';
import { Order } from 'src/app/models/order/order';

@Component({
  selector: 'app-create-orders',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.scss']
})
export class SingleOrderComponent implements OnInit {
  goods: Goods[] = [];
  loginId: number;
  orderId: number;
  usage: string;
  view = 'VIEW';
  create = 'CREATE';
  viewOrder: Order;

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
    this.getGoods();
  }

  ngOnInit() {
    const login = JSON.parse(localStorage.getItem('login'));
    if (localStorage.getItem('login') === undefined) {
      alert('you are not authorized to view this page');
      this.router.navigateByUrl('/landing-page');
    }
    this.loginId = login.loginId;
  }

  async getGoods() {
    try {
      this.goods = await this.goodsService.getGoods();
      if (this.usage === 'VIEW') {
        this.viewOrder = await this.ordersService.getOrderById(this.orderId);
        this.goods.forEach(good => {
          this.viewOrder.goods.forEach(og => {
            if (good.id === og.id) {
              good.quantity = og.quantity;
            }
          });
        });
      }
    } catch (error) {
      alert(error.message);
      return;
    }
  }

  selectGood(goodId: number, quantity: string) {
    // this is inefficient as the loop continues even after the
    // specific case is found, consider refactoring
    this.goods.forEach(good => {
      if (good.id === goodId) {
        good.quantity = parseInt(quantity, 10);
      }
    });
  }

  goBackToOrdersPage() {
    this.router.navigateByUrl('/orders-page');
  }

  async saveOrder() {
    try {
      // when creating the order make sure the id is 0 as that will be set server side
      const savedOrder: Order = new Order();
      (savedOrder.date = Date.now()), (savedOrder.id = 0);
      savedOrder.goods = [];
      savedOrder.owner = this.loginId;
      savedOrder.total = 0;
      this.goods.forEach(good => {
        savedOrder.total = savedOrder.total + good.quantity * good.price;
        savedOrder.goods.push(good);
      });
      await this.ordersService.createOrder(savedOrder);

      alert('save successful');
      this.router.navigateByUrl('/orders-page');
    } catch (error) {
      alert(error.message);
      return;
    }
  }
}
