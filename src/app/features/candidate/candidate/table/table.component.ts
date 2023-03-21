import { Component, Input, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { compare } from 'src/app/core/utils/compare';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input()
  tableTitle: string = '';

  @Input()
  table: any[] = [];

  sortedTable: any[] = [];

  page = 1;

  pageSize = 5;

  constructor() {}

  ngOnInit(): void {
    this.sortedTable = this.table.slice();
    this.onPageChange();
  }

  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
  }

  onPageChange() {
    this.sortedTable = this.table.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
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

    this.sortedTable = newTableList;
  }

  onSearchChange(event: string) {
    if (event == '') {
      this.sortedTable = this.table;
      return;
    }

    // filtered member contain only member that includes searchText
    this.sortedTable = this.table.filter(
      (row) =>
        row.name.toLocaleLowerCase().includes(event.toLocaleLowerCase()) ||
        row.surname.toLocaleLowerCase().includes(event.toLocaleLowerCase()) ||
        row.departmentList[0].name
          .toLocaleLowerCase()
          .includes(event.toLocaleLowerCase()) ||
        row.status.toLocaleLowerCase().includes(event.toLocaleLowerCase())
    );
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
