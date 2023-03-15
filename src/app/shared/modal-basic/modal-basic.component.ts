import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.scss'],
})
export class ModalBasicComponent {
  @ViewChild('basic')
  basicTemplateRef: TemplateRef<any> | undefined;

  closeResult = '';

  @Input()
  form: any;

  @Input()
  id: string = '';

  @Input()
  type: 'submit' | 'button' = 'button';

  @Input()
  buttonLabel: string = '';

  @Input()
  variant: 'submit' | 'cancel' | 'back' | 'default' = 'default';

  @Input()
  leftIcon: string = '';

  @Output()
  onSubmit: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService
      .open(this.basicTemplateRef, {
        centered: true,
        size: 'md',
      })
      .result.then(() => this.onSubmit.emit());
  }
}
