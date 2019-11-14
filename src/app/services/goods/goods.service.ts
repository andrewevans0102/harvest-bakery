import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { Goods } from 'src/app/models/goods/goods';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  constructor() {}

  async getGoods(): Promise<Goods[]> {
    const goods = await axios.get(environment.goodsRoute);
    return goods.data;
  }
}
