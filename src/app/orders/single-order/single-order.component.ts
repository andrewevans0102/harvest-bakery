import { Component, OnInit } from '@angular/core';
import { GoodsService } from 'src/app/services/goods/goods.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-create-orders',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.scss']
})
export class SingleOrderComponent implements OnInit {
  goods = [];
  loginId: number;
  orderId: number;
  usage: string;
  view = 'VIEW';
  create = 'CREATE';
  viewOrder: any;

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
            if (good.id === og.goodId) {
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
      if (good.goodId === goodId) {
        good.quantity = parseInt(quantity, 10);
      }
    });
  }

  goBackToOrdersPage() {
    this.router.navigateByUrl('/orders-page');
  }

  async saveOrder() {
    try {
      const savedOrder = {
        date: Date.now(),
        id: 0, // this will be set on the server side
        goods: [],
        owner: this.loginId,
        total: 0
      };
      this.goods.forEach(good => {
        savedOrder.total = savedOrder.total + good.quantity * good.price;

        savedOrder.goods.push({
          goodId: good.goodId,
          quantity: good.quantity
        });
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
