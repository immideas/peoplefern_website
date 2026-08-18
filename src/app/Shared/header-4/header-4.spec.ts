import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header4 } from './header-4';

describe('Header4', () => {
  let component: Header4;
  let fixture: ComponentFixture<Header4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
