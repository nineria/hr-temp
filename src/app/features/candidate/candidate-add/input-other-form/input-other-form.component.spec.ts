import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOtherFormComponent } from './input-other-form.component';

describe('InputOtherFormComponent', () => {
  let component: InputOtherFormComponent;
  let fixture: ComponentFixture<InputOtherFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOtherFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOtherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
