import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntigrationDetails } from './intigration-details';

describe('IntigrationDetails', () => {
  let component: IntigrationDetails;
  let fixture: ComponentFixture<IntigrationDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntigrationDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntigrationDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
