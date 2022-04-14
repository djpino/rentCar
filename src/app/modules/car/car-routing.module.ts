import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './../../layouts/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { CarDetailsComponent } from './pages/car-details/car-details.component';
import { BasicComponent } from './../../layouts/basic/basic.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'List Cars',
        },
      },
    ],
  },
  {
    path: '',
    component: BasicComponent,
    children: [
      {
        path: 'details/:id',
        component: CarDetailsComponent,
        data: {
          title: 'Car Details',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
