import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePickerRoutingModule } from './date-picker-routing.module';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DatePickerComponent],
  imports: [CommonModule, DatePickerRoutingModule, SharedModule],
})
export class DatePickerModule {}
