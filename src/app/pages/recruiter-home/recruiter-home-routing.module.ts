import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecruiterHomePage } from './recruiter-home.page';

const routes: Routes = [
  {
    path: '',
    component: RecruiterHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecruiterHomePageRoutingModule {}
