import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
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
  padding: string = '10px 15px';

  @Input()
  rounded: string = '10px';

  constructor() {}

  ngOnInit(): void {
    switch (this.padding) {
      default:
        this.padding = `padding: ${this.padding};`;
        break;
    }

    switch (this.rounded) {
      case 'sm':
        this.rounded = 'border-radius: 5px;';
        break;
      case 'md':
        this.rounded = 'border-radius: 10px;';

        break;
      case 'lg':
        this.rounded = 'border-radius: 15px;';

        break;
      case 'full':
        this.rounded = 'border-radius: 100%;';
        break;
      default:
        this.rounded = `border-radius: ${this.rounded};`;
        break;
    }
  }
}
