import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface ProjectType {
  id: number | null;
  name: string | null;
}
@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss'],
})
export class DropdownsComponent implements OnInit {
  @Input() dropdownOptionList: any[] = [];
  @Input() dropdownTitle?: string;
  @Input() placeholderVal: string = '';
  @Input() validationAlert: string | undefined = '';
  @Input() inputDropdownValue?: string | null | any = '';
  @Output() optionChosenEvent = new EventEmitter<string | null | object>();

  filteredOptionList: any[] = [];
  detectionTouch: boolean = false;
  turnOnOption: boolean = false;

  constructor() {}

  ngOnInit() {
    this.isDefaultValue();
  }

  isDefaultValue() {
    this.optionChosenEvent.emit(
      this.setValueBeforeSend(this.inputDropdownValue, this.detectionTouch)
    );
  }

  isTurnOnOptionAndChoose(optionValue: ProjectType | null) {
    this.filteredOptionList = this.dropdownOptionList;

    this.turnOnOption = !this.turnOnOption;
    this.checkConditionError();
    if (!optionValue) return;
    this.optionChosenEvent.emit(
      this.setValueBeforeSend(optionValue, this.detectionTouch)
    );
    this.inputDropdownValue = optionValue.name;
    this.filteredOptionList = this.dropdownOptionList;
  }

  onInputChange(e: any) {
    this.turnOnOption = true;
    this.checkConditionError();
    this.inputDropdownValue = e.target.value;

    this.searchFromArray(e.target.value);
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
    if (value == '') {
      this.filteredOptionList = [];
      return;
    }
    this.filteredOptionList = this.dropdownOptionList.filter((member) =>
      member.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
  }

  setValueBeforeSend(value: ProjectType, validation: boolean) {
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
