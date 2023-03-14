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
  type: string = 'button';

  @Input()
  buttonLabel: string = '';

  @Input()
  variant: string = 'default';

  @Input()
  leftIcon: string = '';

  @Output()
  onSubmit: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private modalService: NgbModal, private router: Router) {}

  open() {
    this.modalService
      .open(this.basicTemplateRef, {
        centered: true,
        size: 'md',
      })
      .result.then((result) => {
        switch (result) {
          case 'submit':
            this.onSubmit.emit();
            break;
          case 'default':
            break;
          default:
            this.router.navigate(['resume']);
            break;
        }
      });
  }
}
