import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicantHomePage } from './applicant-home.page';

const routes: Routes = [
  {
    path: '',
    component: ApplicantHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicantHomePageRoutingModule {}
