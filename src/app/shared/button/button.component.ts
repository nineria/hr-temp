import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  label: string = '';

  @Input()
  disabled: boolean | string = false;

  @Input()
  type: 'submit' | 'button' = 'button';

  @Input()
  id: string = '';

  @Input()
  variant: 'submit' | 'cancel' | 'back' | 'default' = 'default';

  @Input()
  padding: 'sm' | 'md' | 'lg' = 'md';

  paddingStyle: string = '';

  @Input()
  rounded: 'sm' | 'md' | 'lg' | 'full' = 'sm'; // '10px';

  roundedStyle: string = '';

  @Input()
  leftIcon: string = '';

  @Input()
  iconSize: string = '';

  @Input()
  routerLink: string = '';

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.getPaddingStyle(this.padding);
    this.getRoundedStyle(this.rounded);

    this.isDisable(this.disabled);
  }

  getPaddingStyle(option: any) {
    switch (option) {
      case 'sm':
        this.paddingStyle = '5px 10px';
        break;
      case 'md':
        this.paddingStyle = '10px 15px';
        break;
      case 'lg':
        this.paddingStyle = '15px 20px';
        break;
    }
  }

  getRoundedStyle(option: any) {
    switch (option) {
      case 'sm':
        this.roundedStyle = '8px';
        break;
      case 'md':
        this.roundedStyle = '15px';
        break;
      case 'lg':
        this.roundedStyle = '20px';
        break;
      case 'full':
        this.roundedStyle = '100%';
        break;
    }
  }

  isDisable(option: any) {
    switch (option) {
      case true:
        this.disabled = 'opacity: 0.7; cursor: not-allowed;';
        break;
      case false:
        this.disabled = false;
        break;
      default:
        this.disabled = this.disabled;
        break;
    }
  }
}
