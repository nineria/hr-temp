import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateAddComponent } from './candidate-add/candidate-add.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { CandidateEditComponent } from './candidate-edit/candidate-edit.component';
import { CandidateComponent } from './candidate/candidate.component';

const routes: Routes = [
  {
    path: '',
    component: CandidateComponent,
  },
  {
    path: 'add',
    component: CandidateAddComponent,
  },
  {
    path: ':id',
    component: CandidateDetailComponent,
  },
  {
    path: ':id/edit',
    component: CandidateEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidateRoutingModule {}
