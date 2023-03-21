import { Component, Input, OnInit } from '@angular/core';
import { formatLocalShortDate } from 'src/app/core/utils/formatLocalShortDate';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.scss'],
})
export class ManagersComponent implements OnInit {
  accordionTitle: string = 'ผู้รับผิดชอบรอบ';

  @Input()
  interviewRound: number = 1;

  @Input()
  managerList: any;

  @Input()
  createdAt!: number;

  @Input()
  isResumeVoted: boolean = false;

  @Input()
  isInterviewed: boolean = false;

  date: string = '';

  averageScore: number = 5.0;

  constructor() {}

  ngOnInit(): void {
    this.date = formatLocalShortDate(this.createdAt, 'th-TH');
  }

  convertToFloat(number: number) {
    return (Math.round(number * 100) / 100).toFixed(1);
  }
}
