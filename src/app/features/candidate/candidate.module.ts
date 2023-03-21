import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateComponent } from './candidate/candidate.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { CandidateAddComponent } from './candidate-add/candidate-add.component';
import { CandidateEditComponent } from './candidate-edit/candidate-edit.component';
import { TableComponent } from './candidate/table/table.component';
import { SearchFilterComponent } from './candidate/search-filter/search-filter.component';
import {
  NgbAccordionModule,
  NgbPaginationModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { DetailComponent } from './candidate-detail/detail/detail.component';
import { ManagersComponent } from './candidate-detail/managers/managers.component';
import { TabsComponent } from './candidate-detail/tabs/tabs.component';
import { DocumentUploadComponent } from './candidate-add/document-upload/document-upload.component';
import { InputFormComponent } from './candidate-add/input-form/input-form.component';
import { InputOtherFormComponent } from './candidate-add/input-other-form/input-other-form.component';
import { ButtonInterestInterviewComponent } from './candidate-detail/button-interest-interview/button-interest-interview.component';
import { ButtonConsiderationComponent } from './candidate-detail/button-consideration/button-consideration.component';
import { InterviewScheduleFormComponent } from './candidate-detail/button-consideration/interview-schedule-form/interview-schedule-form.component';

@NgModule({
  declarations: [
    CandidateComponent,
    CandidateDetailComponent,
    CandidateAddComponent,
    CandidateEditComponent,
    TableComponent,
    SearchFilterComponent,
    DetailComponent,
    ManagersComponent,
    TabsComponent,
    ButtonInterestInterviewComponent,
    DocumentUploadComponent,
    InputFormComponent,
    InputOtherFormComponent,
    ButtonConsiderationComponent,
    InterviewScheduleFormComponent,
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    ReactiveFormsModule,
    MatSortModule,
    FormsModule,
    SharedModule,
    LayoutModule,
    NgbTooltipModule,
    NgbAccordionModule,
    NgbPaginationModule,
    LayoutModule,
  ],
})
export class CandidateModule {}
