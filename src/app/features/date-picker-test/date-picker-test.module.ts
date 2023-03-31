import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePickerTestRoutingModule } from './date-picker-test-routing.module';
import { DatePickerTestComponent } from './date-picker-test/date-picker-test.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DatePickerTestComponent],
  imports: [CommonModule, DatePickerTestRoutingModule, SharedModule],
})
export class DatePickerTestModule {}
