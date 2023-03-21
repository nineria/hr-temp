import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutReimbursementComponent } from './layout-reimbursement/layout-reimbursement.component';
import { LayoutCandidateComponent } from './layout-candidate/layout-candidate.component';

@NgModule({
  declarations: [LayoutReimbursementComponent, LayoutCandidateComponent],
  imports: [CommonModule],
  exports: [LayoutReimbursementComponent, LayoutCandidateComponent],
})
export class LayoutModule {}
