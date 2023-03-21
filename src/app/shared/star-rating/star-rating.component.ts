import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent {
  @Input()
  starSize: number = 2;

  @Input()
  maxStar: number = 5;

  @Input()
  header: string = '';

  @Input()
  headerWidth: string = '250px';

  @Input()
  color: string = '#EC920E';

  @Input()
  customPadding: string = '10px';

  @Input()
  readonly: boolean = false;

  @Output()
  onSubmit: EventEmitter<any> = new EventEmitter<any>();

  onRatingSet(rating: number): void {
    this.onSubmit.emit(rating);
  }
}
