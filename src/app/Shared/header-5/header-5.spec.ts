import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header5 } from './header-5';

describe('Header5', () => {
  let component: Header5;
  let fixture: ComponentFixture<Header5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
