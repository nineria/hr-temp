import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { ButtonComponent } from './button/button.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';
import { ModalBackComponent } from './modal-back/modal-back.component';

@NgModule({
  declarations: [
    MultiSelectComponent,
    ButtonComponent,
    ModalBasicComponent,
    VerticalTimelineComponent,
    ModalBackComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    MatSortModule,
  ],
  exports: [
    MultiSelectComponent,
    ButtonComponent,
    ModalBasicComponent,
    VerticalTimelineComponent,
    ModalBackComponent,
  ],
})
export class SharedModule {}
