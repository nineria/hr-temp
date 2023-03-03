import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export const addResumeForm = () => {
  return new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.pattern("[^' ']+")],
      updateOn: 'change',
    }),
    surname: new FormControl('', {
      validators: [Validators.required, Validators.pattern("[^' ']+")],
      updateOn: 'change',
    }),
    nickname: new FormControl('', {
      validators: [Validators.required, Validators.pattern("[^' ']+")],
      updateOn: 'change',
    }),
    phoneNumber: new FormControl('', {
      validators: [Validators.required, Validators.pattern("[^' ']+")],
      updateOn: 'change',
    }),
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.email,
        Validators.pattern("[^' ']+"),
      ],
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
  });
};
