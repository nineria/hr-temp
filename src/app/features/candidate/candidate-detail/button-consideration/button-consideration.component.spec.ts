import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonConsiderationComponent } from './button-consideration.component';

describe('ButtonConsiderationComponent', () => {
  let component: ButtonConsiderationComponent;
  let fixture: ComponentFixture<ButtonConsiderationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonConsiderationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonConsiderationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
