import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecruiterHomePageRoutingModule } from './recruiter-home-routing.module';

import { RecruiterHomePage } from './recruiter-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecruiterHomePageRoutingModule
  ],
  declarations: [RecruiterHomePage]
})
export class RecruiterHomePageModule {}
