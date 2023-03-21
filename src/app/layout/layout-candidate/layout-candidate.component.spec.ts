import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCandidateComponent } from './layout-candidate.component';

describe('LayoutCandidateComponent', () => {
  let component: LayoutCandidateComponent;
  let fixture: ComponentFixture<LayoutCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutCandidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
