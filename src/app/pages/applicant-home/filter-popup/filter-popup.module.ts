import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterPopupPageRoutingModule } from './filter-popup-routing.module';

import { FilterPopupPage } from './filter-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterPopupPageRoutingModule
  ],
  declarations: [FilterPopupPage]
})
export class FilterPopupPageModule {}
