import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DocumentUploadComponent } from './resume-add/document-upload/document-upload.component';
import { DropdownSelectComponent } from './resume-add/dropdown-select/dropdown-select.component';
import { InputFormComponent } from './resume-add/input-form/input-form.component';
import { InputOtherFormComponent } from './resume-add/input-other-form/input-other-form.component';
import { ResumeAddComponent } from './resume-add/resume-add.component';
import { ResumeRoutingModule } from './resume-routing.module';
import { TableViewComponent } from './resume/table-view/table-view.component';
import { ResumeComponent } from './resume/resume.component';
import { MatSortModule } from '@angular/material/sort';
import { SearchFilterComponent } from './resume/search-filter/search-filter.component';

@NgModule({
  declarations: [
    InputOtherFormComponent,
    InputFormComponent,
    DropdownSelectComponent,
    DocumentUploadComponent,
    ResumeComponent,
    ResumeAddComponent,
    TableViewComponent,
    SearchFilterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ResumeRoutingModule,
    MatSortModule,
    FormsModule,
  ],
})
export class ResumeModule {}
