import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header1 } from './header-1';

describe('Header1', () => {
  let component: Header1;
  let fixture: ComponentFixture<Header1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
