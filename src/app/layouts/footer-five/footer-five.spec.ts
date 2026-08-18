import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFive } from './footer-five';

describe('FooterFive', () => {
  let component: FooterFive;
  let fixture: ComponentFixture<FooterFive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterFive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterFive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
