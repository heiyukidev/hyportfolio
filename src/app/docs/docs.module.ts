import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';
import { NavigationModule } from '../navigation/navigation.module';
import { QuoteModule } from '../quote/quote.module';
import { RouterModule, Routes } from '@angular/router';

const moduleRoutes: Routes = [{ path: '', component: DocsComponent }];

export const DocsRoutes = RouterModule.forChild(moduleRoutes);

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    QuoteModule,
    DocsRoutes
  ],
  declarations: [DocsComponent],
  exports: [DocsComponent]
})
export class DocsModule { }
