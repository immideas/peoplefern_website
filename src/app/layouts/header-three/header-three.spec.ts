import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderThree } from './header-three';

describe('HeaderThree', () => {
  let component: HeaderThree;
  let fixture: ComponentFixture<HeaderThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderThree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
