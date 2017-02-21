import { Routes } from '@angular/router';


export const ModuleRoutes: Routes = [
  {
    path: '',
    loadChildren: './index/index.module#IndexModule'
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'resume',
    loadChildren: './resume/resume.module#ResumeModule'
  },
  { path: '**', redirectTo: '' }
];
