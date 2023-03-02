import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DocumentUploadComponent } from './form-image-upload/document-upload/document-upload.component';
import { FormImageUploadComponent } from './form-image-upload/form-image-upload.component';
import { InputFormComponent } from './form-image-upload/input-form/input-form.component';
import { InputOtherFormComponent } from './form-image-upload/input-other-form/input-other-form.component';
import { DropdownSelectComponent } from './form-image-upload/dropdown-select/dropdown-select.component';

@NgModule({
  declarations: [
    FormImageUploadComponent,
    InputFormComponent,
    InputOtherFormComponent,
    DocumentUploadComponent,
    DropdownSelectComponent,
  ],
  imports: [CommonModule],
  exports: [FormImageUploadComponent],
})
export class SharedModule {}
