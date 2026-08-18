import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header6 } from './header-6';

describe('Header6', () => {
  let component: Header6;
  let fixture: ComponentFixture<Header6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
