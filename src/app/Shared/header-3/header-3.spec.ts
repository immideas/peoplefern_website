import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header3 } from './header-3';

describe('Header3', () => {
  let component: Header3;
  let fixture: ComponentFixture<Header3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
