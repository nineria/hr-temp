import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  @Input()
  userDetail: any;

  formatLocalDate(createdAt: number, local: string) {
    const date = new Date(createdAt);
    const result = date.toLocaleDateString(local, {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

    return result;
  }
}
