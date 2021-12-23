import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicantHomePageRoutingModule } from './applicant-home-routing.module';

import { ApplicantHomePage } from './applicant-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicantHomePageRoutingModule
  ],
  declarations: [ApplicantHomePage]
})
export class ApplicantHomePageModule {}
