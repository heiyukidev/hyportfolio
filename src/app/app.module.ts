import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { IndexModule } from './index/index.module';
import { ResumeModule } from './resume/resume.module';
import { AboutModule } from './about/about.module';

const moduleRoutes: Routes = [
  {
    path: '',
    loadChildren: './index/index.module#IndexModule'
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IndexModule,
    ResumeModule,
    AboutModule,
    RouterModule.forRoot(moduleRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
