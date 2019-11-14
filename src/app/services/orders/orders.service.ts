import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { Order } from 'src/app/models/order/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor() {}

  async getOrdersByOwner(ownerId: string): Promise<Order[]> {
    const response = await axios.get(
      `${environment.ordersRoute}/owner/${ownerId}`
    );
    return response.data;
  }

  async getOrderById(orderId: number): Promise<Order> {
    const order = await axios.get(`${environment.ordersRoute}/id/${orderId}`);
    return order.data[0];
  }

  async getAll(): Promise<Order[]> {
    const orders = await axios.get(environment.ordersRoute);
    return orders.data;
  }

  async createOrder(savedOrder: any) {
    await axios.post(environment.ordersRoute, savedOrder);
  }

  async deleteOrder(orderId: string) {
    await axios.delete(`${environment.ordersRoute}/${orderId}`);
  }
}
