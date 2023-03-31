import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { ButtonComponent } from './button/button.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { CandidateTimelineComponent } from './candidate-timeline/candidate-timeline.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { TypographyHeaderInputComponent } from './typography-header-input/typography-header-input.component';
import { RouterModule } from '@angular/router';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { NgxStarsModule } from 'ngx-stars';
import { DatepickerComponent } from './date-picker/date-picker.component';

@NgModule({
  declarations: [
    MultiSelectComponent,
    ButtonComponent,
    ConfirmModalComponent,
    CandidateTimelineComponent,
    DropdownsComponent,
    TypographyHeaderInputComponent,
    StarRatingComponent,
    DatepickerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    MatSortModule,
    RouterModule,
    NgxStarsModule,
  ],
  exports: [
    MultiSelectComponent,
    ButtonComponent,
    ConfirmModalComponent,
    CandidateTimelineComponent,
    DropdownsComponent,
    TypographyHeaderInputComponent,
    StarRatingComponent,
    DatepickerComponent,
  ],
})
export class SharedModule {}
