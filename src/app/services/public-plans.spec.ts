import { TestBed } from '@angular/core/testing';

import { PublicPlans } from './public-plans';

describe('PublicPlans', () => {
  let service: PublicPlans;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicPlans);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
