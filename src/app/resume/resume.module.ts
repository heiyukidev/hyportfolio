import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component'
import { RouterModule, Routes } from '@angular/router';
import { QuoteModule } from '../quote/quote.module';
import { NavigationModule } from '../navigation/navigation.module';

const moduleRoutes: Routes = [{ path: '', component: ResumeComponent }];

export const ResumeRoutes = RouterModule.forChild(moduleRoutes);

@NgModule({
  imports: [
    CommonModule,
    ResumeRoutes,
    QuoteModule,
    NavigationModule
  ],
  declarations: [ResumeComponent],
  exports: [ResumeComponent]
})
export class ResumeModule { }
