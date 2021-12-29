import { MenuPage } from './../../common/menu/menu.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostedJobsPageRoutingModule } from './posted-jobs-routing.module';

import { PostedJobsPage } from './posted-jobs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostedJobsPageRoutingModule
  ],
  declarations: [PostedJobsPage, MenuPage]
})
export class PostedJobsPageModule {}
