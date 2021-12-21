import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'recruiter-home',
    loadChildren: () => import('./pages/recruiter-home/recruiter-home.module').then( m => m.RecruiterHomePageModule)
  },
  {
    path: 'applicant-home',
    loadChildren: () => import('./pages/applicant-home/applicant-home.module').then( m => m.ApplicantHomePageModule)
  },
  {
    path: 'search-job',
    loadChildren: () => import('./pages/search-job/search-job.module').then( m => m.SearchJobPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
