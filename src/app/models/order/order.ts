import { Goods } from '../goods/goods';

export class Order {
  date: number | null;
  id: number | null;
  goods: Goods[] = [];
  owner: number | null;
  total: number | null;
}
