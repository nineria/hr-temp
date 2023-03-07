import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  label: string = '';

  @Input()
  disabled: boolean = false;

  @Input()
  type: string = '';

  @Input()
  id: string = '';

  @Input()
  variant: string = 'default';

  @Input()
  size: string = 'md';
}
