import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { formatLocalShortDate } from 'src/app/core/utils/formatLocalShortDate';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
})
export class ManagerComponent implements OnInit {
  accordionTitle: string = 'ผู้รับผิดชอบรอบ 1';

  @Input()
  managerList: any;

  @Input()
  createdAt!: number;

  date: string = '';

  constructor() {}

  ngOnInit(): void {
    this.date = formatLocalShortDate(this.createdAt, 'th-TH');
  }
}
