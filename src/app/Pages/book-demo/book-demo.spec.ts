import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDemo } from './book-demo';

describe('BookDemo', () => {
  let component: BookDemo;
  let fixture: ComponentFixture<BookDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
