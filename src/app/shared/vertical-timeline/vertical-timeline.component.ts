import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-timeline',
  templateUrl: './vertical-timeline.component.html',
  styleUrls: ['./vertical-timeline.component.scss'],
})
export class VerticalTimelineComponent implements OnInit {
  timelineList: any[] = [];

  ngOnInit(): void {
    this.timelineList = [
      {
        header: 'ผ่านการพิจารณา',
        content: [
          {
            createdAt: '08/01/2566',
            manager: 'พรรษา แกร่ง ',
            averageScore: '4.0/5.0 คะแนน',
            review: 'มีความคิดสร้างสรรค์ดี',
          },
        ],
      },
      {
        header: 'ผ่านการพิจารณา',
        content: [
          {
            createdAt: '08/01/2566',
            manager: 'พรรษา แกร่ง ',
            averageScore: '4.0/5.0 คะแนน',
            review: 'มีความคิดสร้างสรรค์ดี',
          },
        ],
      },
      {
        header: 'ผ่านการพิจารณา',
        content: [
          {
            createdAt: '08/01/2566',
            manager: 'พรรษา แกร่ง ',
            averageScore: '4.0/5.0 คะแนน',
            review: 'มีความคิดสร้างสรรค์ดี',
          },
        ],
      },
      {
        header: 'ผ่านการพิจารณา',
        content: [
          {
            createdAt: '08/01/2566',
            manager: 'พรรษา แกร่ง ',
            averageScore: '4.0/5.0 คะแนน',
            review: 'มีความคิดสร้างสรรค์ดี',
          },
        ],
      },
    ];
  }
}
