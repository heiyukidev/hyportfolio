import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { SliderComponent } from './slider/slider.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IndexComponent, SliderComponent, ButtonsComponent],
  exports:[IndexComponent]
})
export class IndexModule { }
