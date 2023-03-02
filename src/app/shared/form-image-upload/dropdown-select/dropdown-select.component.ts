import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss'],
})
export class DropdownSelectComponent {
  @Input()
  header: string = '';

  onClick(e: MouseEvent): void {
    e.preventDefault();
  }
}
