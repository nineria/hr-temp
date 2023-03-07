import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTableViewComponent } from './resume-table-view.component';

describe('ResumeTableViewComponent', () => {
  let component: ResumeTableViewComponent;
  let fixture: ComponentFixture<ResumeTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeTableViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
