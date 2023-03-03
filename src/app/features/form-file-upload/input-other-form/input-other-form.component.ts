import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-other-form',
  templateUrl: './input-other-form.component.html',
  styleUrls: ['./input-other-form.component.scss'],
})
export class InputOtherFormComponent {
  @Input()
  header: string = '';

  @Input()
  addResumeForm: any;

  @Input()
  getResumeForm: any;
}
