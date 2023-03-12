import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DocumentUploadComponent } from './resume-add/document-upload/document-upload.component';
import { InputOtherFormComponent } from './resume-add/input-other-form/input-other-form.component';
import { ResumeAddComponent } from './resume-add/resume-add.component';
import { ResumeRoutingModule } from './resume-routing.module';
import { TableViewComponent } from './resume-list/table-view/table-view.component';
import { ResumeListComponent } from './resume-list/resume-list.component';
import { MatSortModule } from '@angular/material/sort';
import { SearchFilterComponent } from './resume-list/search-filter/search-filter.component';
import { InputFormComponent } from './resume-add/input-form/input-form.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ResumeViewComponent } from './resume-view/resume-view.component';
import { DetailComponent } from './resume-view/detail/detail.component';
import { TabsComponent } from './resume-view/tabs/tabs.component';
import { ManagerComponent } from './resume-view/manager/manager.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    InputOtherFormComponent,
    InputFormComponent,
    DocumentUploadComponent,
    ResumeListComponent,
    ResumeAddComponent,
    TableViewComponent,
    SearchFilterComponent,
    ResumeViewComponent,
    DetailComponent,
    TabsComponent,
    ManagerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ResumeRoutingModule,
    MatSortModule,
    FormsModule,
    NgbTooltipModule,
    NgbAccordionModule,
  ],
})
export class ResumeModule {}
