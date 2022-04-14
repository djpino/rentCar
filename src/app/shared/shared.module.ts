import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';



@NgModule({
  declarations: [
    CarouselComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CarouselComponent,
    SearchFilterPipe,
    FormsModule
  ]
})
export class SharedModule { }
