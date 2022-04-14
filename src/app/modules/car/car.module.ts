import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';

import { CarRoutingModule } from './car-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CarDetailsComponent } from './pages/car-details/car-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarDetailsComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    SharedModule
  ]
})
export class CarModule { }
