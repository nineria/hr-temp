import { Component, Input, OnInit } from '@angular/core';
import { formatLocalDateTime } from 'src/app/core/utils/formatLocalDateTime';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input()
  candidate: any;

  constructor() {}

  ngOnInit(): void {}

  formateDate = (date: number, local: string) =>
    formatLocalDateTime(date, local);
}
