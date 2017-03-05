import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import { RouterModule, Routes } from '@angular/router';
import { QuoteModule } from '../quote/quote.module';
import { FooterModule } from '../footer/footer.module';
import { NavigationModule } from '../navigation/navigation.module';


const moduleRoutes: Routes = [{ path: '', component: SetupComponent }];

export const SetupRoutes = RouterModule.forChild(moduleRoutes);

@NgModule({
  imports: [
    CommonModule,
    QuoteModule,
    FooterModule,
    NavigationModule,
SetupRoutes
  ],
  declarations: [SetupComponent],
  exports: [SetupComponent]
})
export class SetupModule { }
