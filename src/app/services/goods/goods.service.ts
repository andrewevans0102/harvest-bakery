import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { Goods } from 'src/app/models/goods/goods';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  constructor(private http: HttpClient) {}

  getGoods(): Observable<Goods[]> {
    return this.http.get<Goods[]>(environment.goodsRoute);
  }
}
