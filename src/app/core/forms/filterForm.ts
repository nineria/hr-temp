import { FormControl, FormGroup, Validators } from '@angular/forms';

export const filterForm = () => {
  return new FormGroup({
    filter: new FormControl([], {
      validators: [Validators.required],
      updateOn: 'change',
    }),
  });
};
