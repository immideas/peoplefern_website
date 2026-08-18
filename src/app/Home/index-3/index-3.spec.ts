import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index3 } from './index-3';

describe('Index3', () => {
  let component: Index3;
  let fixture: ComponentFixture<Index3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
