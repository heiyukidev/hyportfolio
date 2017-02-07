import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { SliderComponent } from './slider/slider.component';
import { NavigationModule } from '../navigation/navigation.module';
import { RouterModule, Routes } from '@angular/router';

const moduleRoutes : Routes = [{path:'',component:IndexComponent}];

export const IndexRoutes = RouterModule.forChild(moduleRoutes);

@NgModule({
  imports: [
    CommonModule,
    IndexRoutes,
    NavigationModule
  ],
  declarations: [IndexComponent, SliderComponent],
  exports:[IndexComponent]
})

export class IndexModule { }
