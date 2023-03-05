import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [MultiSelectComponent, ButtonComponent],
  imports: [CommonModule, FormsModule, DragDropModule, ReactiveFormsModule],
  exports: [MultiSelectComponent, ButtonComponent],
})
export class SharedModule {}
