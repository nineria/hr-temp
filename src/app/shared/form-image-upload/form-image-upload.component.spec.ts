import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormImageUploadComponent } from './form-image-upload.component';

describe('FormImageUploadComponent', () => {
  let component: FormImageUploadComponent;
  let fixture: ComponentFixture<FormImageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormImageUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
