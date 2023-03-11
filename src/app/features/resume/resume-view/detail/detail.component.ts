import { Component, Input, OnInit } from '@angular/core';
import { formatLocalDateTime } from 'src/app/core/utils/formatLocalDateTime';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input()
  userDetail: any;

  data: string = '';

  constructor() {}

  ngOnInit(): void {
    this.data = formatLocalDateTime(this.userDetail.createdAt, 'th-TH');
  }
}
