import { NgModule } from '@angular/core';NavigationModule
import { CommonModule } from '@angular/common';
import { ModulesComponent } from './modules.component';
import { NavigationModule } from '../navigation/navigation.module';
import { QuoteModule } from '../quote/quote.module';
import { RouterModule, Routes } from '@angular/router';

const moduleRoutes: Routes = [{ path: '', component: ModulesComponent }];

export const ModulesRoutes = RouterModule.forChild(moduleRoutes);

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    QuoteModule,
    ModulesRoutes
  ],
  declarations: [ModulesComponent],
  exports: [ModulesComponent]
})
export class ModulesModule { }
