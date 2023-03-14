import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateTimelineComponent } from './candidate-timeline.component';

describe('CandidateTimelineComponent', () => {
  let component: CandidateTimelineComponent;
  let fixture: ComponentFixture<CandidateTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidateTimelineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CandidateTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
