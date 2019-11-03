import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BakedGoodsService {
  constructor() {}

  async getGoods() {
    const bakedGoods = await axios.get('http://localhost:3000/baked-goods');
    return bakedGoods.data;
  }
}
