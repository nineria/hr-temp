import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-other-form',
  templateUrl: './input-other-form.component.html',
  styleUrls: ['./input-other-form.component.scss'],
})
export class InputOtherFormComponent {
  @Input()
  header: string = '';

  @Input()
  form: any;

  @Input()
  getForm: any;
}
