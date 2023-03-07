import { FormControl, FormGroup, Validators } from '@angular/forms';

export const addResumeForm = () => {
  return new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    surname: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    nickname: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    phoneNumber: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'change',
    }),
    other: new FormControl('', {
      updateOn: 'change',
    }),
    departmentList: new FormControl([], {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    positionList: new FormControl([], {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    officerInChargeList: new FormControl([], {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    file: new FormControl([], {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    createdAt: new FormControl(),
    updatedAt: new FormControl(),
    status: new FormControl(),
    averageScore: new FormControl(),
  });
};
