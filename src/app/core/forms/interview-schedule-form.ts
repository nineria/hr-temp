import { FormGroup, FormControl, Validators } from '@angular/forms';

export const interviewScheduleForm = () => {
  return new FormGroup({
    interviewDate: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    interviewTime: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    interviewLink: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    manager: new FormControl([]),
  });
};
