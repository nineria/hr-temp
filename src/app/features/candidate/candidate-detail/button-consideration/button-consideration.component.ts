import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { interviewScheduleForm } from 'src/app/core/forms/interview-schedule-form';

@Component({
  selector: 'app-button-consideration',
  templateUrl: './button-consideration.component.html',
  styleUrls: ['./button-consideration.component.scss'],
})
export class ButtonConsiderationComponent {
  isSkipVote: boolean = true;

  interviewRound: number = 2;

  interviewScheduleForm: FormGroup = interviewScheduleForm();

  constructor() {}

  ngOnInit(): void {}

  get getInterviewScheduleForm() {
    return this.interviewScheduleForm.controls;
  }

  onApproveClick() {
    console.log('Approve');
  }

  onRejectClick() {
    console.log('Reject');
  }

  onRatingChange(event: any) {
    console.log(event);

    this.isSkipVote = false;
    if (event <= 0) this.isSkipVote = true;
  }

  onInterviewScheduleFormSubmit() {
    console.log(this.interviewScheduleForm.value);
  }
}
