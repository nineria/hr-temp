import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { ButtonComponent } from './button/button.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';

@NgModule({
  declarations: [MultiSelectComponent, ButtonComponent, ModalBasicComponent],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    MatSortModule,
  ],
  exports: [MultiSelectComponent, ButtonComponent, ModalBasicComponent],
})
export class SharedModule {}
