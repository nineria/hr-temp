import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interview-schedule-form',
  templateUrl: './interview-schedule-form.component.html',
  styleUrls: ['./interview-schedule-form.component.scss'],
})
export class InterviewScheduleFormComponent {
  @Input()
  form: any;

  @Input()
  getForm: any;
}
