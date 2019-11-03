import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor() {}

  async getOrders() {
    const bakedGoods = await axios.get('http://localhost:3000/orders');
    return bakedGoods.data;
  }
}
