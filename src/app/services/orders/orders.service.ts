import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { Order } from 'src/app/models/order/order';
import { HttpClient } from '@angular/common/http';
import { GoodsService } from '../goods/goods.service';
import { Observable } from 'rxjs';
import { Goods } from 'src/app/models/goods/goods';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  getOrdersByOwner(ownerId: string): Observable<Order[]> {
    return this.http.get<Order[]>(
      `${environment.ordersRoute}/owner/${ownerId}`
    );
  }

  getOrderById(orderId: number): Observable<Goods[]> {
    return this.http.get<Goods[]>(`${environment.ordersRoute}/id/${orderId}`);
  }

  createOrder(savedOrder: Order) {
    return this.http.post(environment.ordersRoute, savedOrder);
  }

  deleteOrder(orderId: string) {
    return this.http.delete(`${environment.ordersRoute}/${orderId}`);
  }
}
