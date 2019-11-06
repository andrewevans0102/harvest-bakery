import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  constructor() {}

  async getGoods() {
    const goods = await axios.get(environment.goodsRoute);
    return goods.data;
  }
}
