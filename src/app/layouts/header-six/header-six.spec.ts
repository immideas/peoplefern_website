import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSix } from './header-six';

describe('HeaderSix', () => {
  let component: HeaderSix;
  let fixture: ComponentFixture<HeaderSix>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSix]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSix);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
