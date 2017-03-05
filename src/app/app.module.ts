import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { IndexModule } from './index/index.module';
import { ResumeModule } from './resume/resume.module';
import { AboutModule } from './about/about.module';
import { DocsModule } from './docs/docs.module';
import { SetupModule } from './setup/setup.module';

import { ModuleRoutes } from './app.routing';
import { ModulesModule } from './modules/modules.module';

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
    DocsModule,
    SetupModule,
    ModulesModule,
    RouterModule.forRoot(ModuleRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
