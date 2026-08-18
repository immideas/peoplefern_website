import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index2 } from './index-2';

describe('Index2', () => {
  let component: Index2;
  let fixture: ComponentFixture<Index2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
