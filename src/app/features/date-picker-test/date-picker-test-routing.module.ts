import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePickerTestComponent } from './date-picker-test/date-picker-test.component';

const routes: Routes = [
  {
    path: '',
    component: DatePickerTestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatePickerTestRoutingModule {}
