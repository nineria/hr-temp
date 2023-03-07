import { Component, Input, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

@Component({
  selector: 'app-resume-table-view',
  templateUrl: './resume-table-view.component.html',
  styleUrls: ['./resume-table-view.component.scss'],
})
export class ResumeTableViewComponent implements OnInit {
  @Input()
  tableTitle: string = '';

  @Input()
  table: any[] = [];

  sortedTable: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.sortedTable = this.table.slice();

    console.log(this.table);
  }

  sortData(sort: Sort) {
    const data = this.table.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedTable = data;
      return;
    }

    this.sortedTable = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name + a.surname, b.name + b.surname, isAsc);
        case 'nickname':
          return compare(a.nickname, b.nickname, isAsc);
        case 'departmentList':
          return compare(
            a.departmentList[0].name,
            b.departmentList[0].name,
            isAsc
          );
        case 'createdAt':
          return compare(a.createdAt, b.createdAt, isAsc);
        default:
          return 0;
      }
    });
  }

  localDate(number: number, local: string) {
    const date = new Date(number);
    const result = date.toLocaleDateString(local, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    return result;
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
