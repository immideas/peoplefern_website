import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index6 } from './index-6';

describe('Index6', () => {
  let component: Index6;
  let fixture: ComponentFixture<Index6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
