import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getMonthDetailsConfig } from 'src/app/core/configs/calendar';
import { MonthDetailType } from 'src/app/core/interfaces/I-calendar';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  toggleMonthSelect: boolean = false;
  toggleYearSelect: boolean = false;

  selectedDate: string = '';

  selectedDateTH: string = '';

  monthSelected: string = '';
  numberOfMonthSelected: number = 0;

  month: number = 0;
  year: number = 0;
  currentYear: number = 0;

  monthDetailList: MonthDetailType[] = [];

  MONTH_LIST = [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน ',
    'พฤษภาคม ',
    'มิถุนายน ',
    'กรกฎาคม ',
    'สิงหาคม ',
    'กันยายน ',
    'ตุลาคม',
    'พฤศจิกายน ',
    'ธันวาคม ',
  ];

  datePickerActive: boolean = false;

  @Input()
  label: string = '';

  @Input()
  placeholder: string = '';

  @Input()
  defaultDate: string = '';

  @Output() onSelectedDate = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    this.getInitialMonth();
    this.getInitialDate();
  }

  getInitialMonth() {
    let date = new Date();
    this.year = date.getFullYear();
    this.currentYear = date.getFullYear();
    this.month = date.getMonth();
    const { monthArray } = getMonthDetailsConfig(this.year, this.month);
    this.monthDetailList = monthArray;
  }

  getInitialDate() {
    if (this.defaultDate === '') return;
    this.defaultDate;

    const date = new Date(this.defaultDate);
    this.selectedDateTH = date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    this.onSelectedDate.emit(this.selectedDate);
  }

  onDatePickerPopup() {
    this.datePickerActive = !this.datePickerActive;
  }

  getMonthStr(month: any) {
    let calculateMonthSelect =
      this.MONTH_LIST[Math.max(Math.min(11, month), 0)] || 'Month';
    this.monthSelected = calculateMonthSelect;
    this.numberOfMonthSelected = month;
  }

  selectMonth(month: any) {
    this.month = month;
    const { monthArray } = getMonthDetailsConfig(this.year, this.month);
    this.monthDetailList = monthArray;
    this.toggleMonthSelect = true;
  }

  selectYear(year: number) {
    this.year = year;
    const { monthArray } = getMonthDetailsConfig(this.year, this.month);
    this.monthDetailList = monthArray;
    this.toggleYearSelect = true;
  }

  setMonth = (offset: any) => {
    this.month = this.month + offset;
    if (this.month === -1) {
      this.month = 11;
      this.year--;
    } else if (this.month === 12) {
      this.month = 0;
      this.year++;
    }
    const { monthArray } = getMonthDetailsConfig(this.year, this.month);
    this.monthDetailList = monthArray;
  };

  onMonthToggle = () => {
    this.toggleMonthSelect = !this.toggleMonthSelect;
  };

  onYearToggle = () => {
    this.toggleYearSelect = !this.toggleYearSelect;
  };

  onDateClick = (day: any) => {
    this.selectedDate = day.dateTimeStr;
    const date = new Date(this.selectedDate);
    this.selectedDateTH = date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    this.onSelectedDate.emit(this.selectedDate);
  };

  createYearRange(currentYear: number, yearRange: number = 500) {
    const temArr = [];
    for (let i = currentYear; i <= currentYear + yearRange; i++) {
      temArr.push(i);
    }

    return temArr;
  }
}
