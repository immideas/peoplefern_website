import { TestBed } from '@angular/core/testing';

import { BookDemo } from './book-demo';

describe('BookDemo', () => {
  let service: BookDemo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookDemo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
