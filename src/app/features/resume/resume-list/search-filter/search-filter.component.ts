import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { filterForm } from 'src/app/core/forms/filterForm';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent implements OnInit {
  toggle: boolean = false;

  filterForm: FormGroup = filterForm();

  filterList: any[] = [];

  searchText: string = '';

  @Output()
  filteredList: EventEmitter<any[]> = new EventEmitter<any[]>();

  @Output()
  searchChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.filterForm.setValue({
      filter: [
        {
          id: 'designer',
          isSelected: false,
          name: 'Designer',
        },
        {
          id: 'developer',
          isSelected: false,
          name: 'Developer',
        },
        {
          id: 'marketing',
          isSelected: false,
          name: 'Marketing',
        },
      ],
    });
  }

  get form() {
    return this.filterForm.controls;
  }

  onSearchChange(): void {
    this.searchChange.emit(this.searchText);
  }

  onCheckClick(): void {
    this.filteredList.emit(this.form['filter'].value);
  }
}
