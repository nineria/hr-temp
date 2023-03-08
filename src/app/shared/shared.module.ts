import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { ButtonComponent } from './button/button.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';

@NgModule({
  declarations: [MultiSelectComponent, ButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    MatSortModule,
  ],
  exports: [MultiSelectComponent, ButtonComponent],
})
export class SharedModule {}
