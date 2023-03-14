import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { ButtonComponent } from './button/button.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { CandidateTimelineComponent } from './candidate-timeline/candidate-timeline.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { TypographyHeaderInputComponent } from './typography-header-input/typography-header-input.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MultiSelectComponent,
    ButtonComponent,
    ModalBasicComponent,
    CandidateTimelineComponent,
    DropdownsComponent,
    TypographyHeaderInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    MatSortModule,
    RouterModule,
  ],
  exports: [
    MultiSelectComponent,
    ButtonComponent,
    ModalBasicComponent,
    CandidateTimelineComponent,
    DropdownsComponent,
    TypographyHeaderInputComponent,
  ],
})
export class SharedModule {}
