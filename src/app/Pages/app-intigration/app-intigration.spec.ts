import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIntigration } from './app-intigration';

describe('AppIntigration', () => {
  let component: AppIntigration;
  let fixture: ComponentFixture<AppIntigration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppIntigration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppIntigration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
