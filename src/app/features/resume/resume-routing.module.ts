import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeAddComponent } from './resume-add/resume-add.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ResumeComponent,
  },
  {
    path: 'add',
    component: ResumeAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeRoutingModule {}
