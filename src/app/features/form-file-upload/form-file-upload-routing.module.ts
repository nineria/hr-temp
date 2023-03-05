import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFileUploadComponent } from './form-file-upload.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FormFileUploadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormFileUploadRoutingModule {}
