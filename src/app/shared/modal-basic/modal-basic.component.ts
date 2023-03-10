import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  modalTitle: string = '';

  @Input()
  form: any;

  @Input()
  id: string = '';

  @Input()
  type: 'submit' | 'cancel' | 'button' = 'button';

  @Input()
  label: string = '';

  @Input()
  variant: 'submit' | 'cancel' | 'default' = 'default';

  @Output()
  onSubmit: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private modalService: NgbModal, private router: Router) {}

  open() {
    this.modalService
      .open(this.basicTemplateRef, {
        ariaLabelledBy: 'modal-basic-title',
        centered: true,
        size: 'md',
      })
      .result.then((result) => {
        if (result === 'submit') this.onSubmit.emit();
        else if (result === 'default') return;
        else this.router.navigate(['resume']);
      });
  }
}
