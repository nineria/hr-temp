import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { addResumeForm } from 'src/app/core/forms/addresume';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent {
  @Input()
  addResumeForm: any;

  @Input()
  getResumeForm: any;
}
