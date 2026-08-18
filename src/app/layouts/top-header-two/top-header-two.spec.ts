import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeaderTwo } from './top-header-two';

describe('TopHeaderTwo', () => {
  let component: TopHeaderTwo;
  let fixture: ComponentFixture<TopHeaderTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopHeaderTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopHeaderTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
