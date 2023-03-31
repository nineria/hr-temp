import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerTestComponent } from './date-picker-test.component';

describe('DatePickerTestComponent', () => {
  let component: DatePickerTestComponent;
  let fixture: ComponentFixture<DatePickerTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePickerTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePickerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
