import { TestBed } from '@angular/core/testing';

import { BakedGoodsService } from './baked-goods.service';

describe('BakedGoodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BakedGoodsService = TestBed.get(BakedGoodsService);
    expect(service).toBeTruthy();
  });
});
