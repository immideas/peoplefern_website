import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFour } from './header-four';

describe('HeaderFour', () => {
  let component: HeaderFour;
  let fixture: ComponentFixture<HeaderFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
