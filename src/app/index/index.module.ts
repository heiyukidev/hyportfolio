import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { NavigationModule } from '../navigation/navigation.module';
import { TitleModule } from '../title/title.module';
import { RouterModule, Routes } from '@angular/router';

const moduleRoutes : Routes = [{path:'',component:IndexComponent}];

export const IndexRoutes = RouterModule.forChild(moduleRoutes);

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    TitleModule,
    IndexRoutes
  ],
  declarations: [IndexComponent],
  exports:[IndexComponent]
})

export class IndexModule { }
