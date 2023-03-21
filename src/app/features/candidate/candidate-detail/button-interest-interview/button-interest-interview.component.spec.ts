import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonInterestInterviewComponent } from './button-interest-interview.component';

describe('ButtonInterestInterviewComponent', () => {
  let component: ButtonInterestInterviewComponent;
  let fixture: ComponentFixture<ButtonInterestInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonInterestInterviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonInterestInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
