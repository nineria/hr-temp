import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss'],
})
export class DropdownsComponent implements OnInit {
  @Input() dropdownOptionList: string[] = [];
  @Input() placeholderVal: string = '';
  @Input() validationAlert: string | undefined = '';
  @Input() inputDropdownValue?: string | null | any = '';
  @Output() optionChosenEvent = new EventEmitter<string | null | object>();

  filteredOptionList: string[] = [];
  detectionTouch: boolean = false;
  turnOnOption: boolean = false;

  constructor() {}

  ngOnInit() {
    this.isDefaultValue();
    this.filteredOptionList = this.dropdownOptionList;
  }

  isDefaultValue() {
    this.optionChosenEvent.emit(
      this.setValueBeforeSend(this.inputDropdownValue, this.detectionTouch)
    );
  }

  isTurnOnOption(optionValue: string | null) {
    this.turnOnOption = !this.turnOnOption;
    this.checkConditionError();
    if (!optionValue) return;
    this.optionChosenEvent.emit(
      this.setValueBeforeSend(optionValue, this.detectionTouch)
    );
    this.inputDropdownValue = optionValue;
    this.filteredOptionList = this.dropdownOptionList;
  }

  onInputChange(e: any) {
    console.log('indexL');
    this.turnOnOption = true;
    this.checkConditionError();
    this.inputDropdownValue = e.target.value;
    console.log('asd', e.target.value);
    this.filteredOptionList = this.searchFromArray(e.target.value);
    this.optionChosenEvent.emit(
      this.setValueBeforeSend(this.inputDropdownValue, this.detectionTouch)
    );
  }

  checkConditionError() {
    if (this.inputDropdownValue === '') {
      // Alert Err will pop up
      this.detectionTouch = true;
    } else {
      // Alert Err will fade out
      this.detectionTouch = false;
    }
  }

  searchFromArray(value: string) {
    this.filteredOptionList = this.dropdownOptionList;
    let matches = [],
      i;
    for (i = 0; i < this.filteredOptionList.length; i++) {
      if (this.filteredOptionList[i].match(value)) {
        matches.push(this.filteredOptionList[i]);
      }
    }

    return matches.length > 0 ? matches : this.checkFilteredCondition();
  }

  setValueBeforeSend(value: string | null, validation: boolean) {
    const objectInputValue = {
      value: value,
      validate: validation,
    };
    return objectInputValue;
  }

  checkFilteredCondition() {
    if (this.inputDropdownValue) {
      this.turnOnOption = false;
    }
    return this.dropdownOptionList;
  }
}
