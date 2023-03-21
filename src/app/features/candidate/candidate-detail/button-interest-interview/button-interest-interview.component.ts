import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-interest-interview',
  templateUrl: './button-interest-interview.component.html',
  styleUrls: ['./button-interest-interview.component.scss'],
})
export class ButtonInterestInterviewComponent implements OnInit {
  isSkipVote: boolean = true;

  constructor() {}

  ngOnInit(): void {}

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
}
