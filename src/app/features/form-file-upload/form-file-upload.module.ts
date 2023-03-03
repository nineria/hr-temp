import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { DropdownSelectComponent } from './dropdown-select/dropdown-select.component';

import { FormFileUploadRoutingModule } from './form-file-upload-routing.module';
import { FormFileUploadComponent } from './form-file-upload/form-file-upload.component';
import { InputFormComponent } from './input-form/input-form.component';
import { InputOtherFormComponent } from './input-other-form/input-other-form.component';

@NgModule({
  declarations: [
    FormFileUploadComponent,
    InputOtherFormComponent,
    InputFormComponent,
    DropdownSelectComponent,
    DocumentUploadComponent,
  ],
  imports: [
    CommonModule,
    FormFileUploadRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class FormFileUploadModule {}
