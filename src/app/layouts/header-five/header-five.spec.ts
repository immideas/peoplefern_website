import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFive } from './header-five';

describe('HeaderFive', () => {
  let component: HeaderFive;
  let fixture: ComponentFixture<HeaderFive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
