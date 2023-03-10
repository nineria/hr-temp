import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeAddComponent } from './resume-add/resume-add.component';
import { ResumeListComponent } from './resume-list/resume-list.component';
import { ResumeViewComponent } from './resume-view/resume-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ResumeListComponent,
  },
  {
    path: 'add',
    component: ResumeAddComponent,
  },
  {
    path: ':id',
    component: ResumeViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeRoutingModule {}
