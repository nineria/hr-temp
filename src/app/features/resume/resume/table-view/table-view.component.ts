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
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent implements OnInit {
  @Input()
  tableTitle: string = '';

  @Input()
  table: any[] = [];

  sortedTable: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.sortedTable = this.table.slice();
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

  onFilteredSelect(event: any) {
    const tmpTableList = this.table;
    const filterList = event.filter((e: any) => e.isSelected === true);
    const newTableList = [];

    if (filterList.length < 1) {
      this.sortedTable = this.table.slice();
      return;
    }

    for (let i = 0; i < tmpTableList.length; i++) {
      for (let j = 0; j < filterList.length; j++) {
        if (tmpTableList[i].departmentList[0].name === filterList[j].name) {
          newTableList.push(tmpTableList[i]);
        }
      }
    }

    // tmp.map((item, i: number) => {
    //   filter.map((item: any, j: number) => {
    //     if (tmp[i].departmentList[0].name === filter[j].name) {
    //       newArr.push(tmp[i]);
    //     }
    //   });
    // });

    this.sortedTable = newTableList;
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
