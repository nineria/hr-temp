import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DocumentUploadComponent } from './resume-add/document-upload/document-upload.component';
import { DropdownSelectComponent } from './resume-add/dropdown-select/dropdown-select.component';
import { InputFormComponent } from './resume-add/input-form/input-form.component';
import { InputOtherFormComponent } from './resume-add/input-other-form/input-other-form.component';
import { ResumeAddComponent } from './resume-add/resume-add.component';
import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeTableViewComponent } from './resume/resume-table-view/resume-table-view.component';
import { ResumeComponent } from './resume/resume.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    InputOtherFormComponent,
    InputFormComponent,
    DropdownSelectComponent,
    DocumentUploadComponent,
    ResumeComponent,
    ResumeAddComponent,
    ResumeTableViewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ResumeRoutingModule,
    MatSortModule,
  ],
})
export class ResumeModule {}
