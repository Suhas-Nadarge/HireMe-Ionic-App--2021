import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicantHomePageRoutingModule } from './applicant-home-routing.module';

import { ApplicantHomePage } from './applicant-home.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MenuPage } from '../common/menu/menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicantHomePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ApplicantHomePage, MenuPage]
})
export class ApplicantHomePageModule {}
