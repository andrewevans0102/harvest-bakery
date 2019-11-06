import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor() {}

  async getOrdersByOwner(ownerId: string) {
    const orders = await axios.get(
      `${environment.ordersRoute}/owner/${ownerId}`
    );
    return orders.data;
  }

  async getOrderById(orderId: number) {
    const order = await axios.get(`${environment.ordersRoute}/id/${orderId}`);
    return order.data[0];
  }

  async getAll() {
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
