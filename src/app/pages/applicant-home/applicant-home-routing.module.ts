import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicantHomePage } from './applicant-home.page';

const routes: Routes = [
  {
    path: '',
    component: ApplicantHomePage
  },
  {
    path: 'filter-popup',
    loadChildren: () => import('./filter-popup/filter-popup.module').then( m => m.FilterPopupPageModule)
  },
  {
    path: 'saved-jobs',
    loadChildren: () => import('./saved-jobs/saved-jobs.module').then( m => m.SavedJobsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicantHomePageRoutingModule {}
