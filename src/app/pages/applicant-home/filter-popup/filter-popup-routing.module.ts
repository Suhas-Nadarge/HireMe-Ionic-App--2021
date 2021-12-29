import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterPopupPage } from './filter-popup.page';

const routes: Routes = [
  {
    path: '',
    component: FilterPopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterPopupPageRoutingModule {}
