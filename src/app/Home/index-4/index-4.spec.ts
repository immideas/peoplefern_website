import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index4 } from './index-4';

describe('Index4', () => {
  let component: Index4;
  let fixture: ComponentFixture<Index4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
