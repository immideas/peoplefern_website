import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuTwo } from './nav-menu-two';

describe('NavMenuTwo', () => {
  let component: NavMenuTwo;
  let fixture: ComponentFixture<NavMenuTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenuTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMenuTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
