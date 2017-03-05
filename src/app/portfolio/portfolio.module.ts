import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { RouterModule, Routes } from '@angular/router';
import { QuoteModule } from '../quote/quote.module';
import { FooterModule } from '../footer/footer.module';
import { NavigationModule } from '../navigation/navigation.module';

const moduleRoutes: Routes = [{ path: '', component: PortfolioComponent }];

export const PortfolioRoutes = RouterModule.forChild(moduleRoutes);

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutes ,
    QuoteModule,
    FooterModule,
    NavigationModule
  ],
  declarations: [PortfolioComponent],
exports:[PortfolioComponent]
})
export class PortfolioModule { }
