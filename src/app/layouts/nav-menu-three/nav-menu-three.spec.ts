import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuThree } from './nav-menu-three';

describe('NavMenuThree', () => {
  let component: NavMenuThree;
  let fixture: ComponentFixture<NavMenuThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenuThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMenuThree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
