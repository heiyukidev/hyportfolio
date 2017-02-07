import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';

const moduleRoutes : Routes = [{path:'',component:AboutComponent}];

export const AboutRoutes = RouterModule.forChild(moduleRoutes);

@NgModule({
  imports: [
    CommonModule,
    AboutRoutes
  ],
  declarations: [AboutComponent],
  exports : [AboutComponent]
})
export class AboutModule { }
