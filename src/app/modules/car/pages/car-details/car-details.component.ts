import { Car } from './../../../../core/models/car/car.model';
import { Component, OnInit } from '@angular/core';
import { CarService } from './../../../../core/services/car/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
})
export class CarDetailsComponent implements OnInit {
  id: number;
  car: any = {};
  cars: Car[] = [];

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getCarById(this.id);
  }

  getCarById(id: number) {
    this.carService.getAllCars().subscribe((carList) => {
      if (carList) {
        this.cars = carList as Car[];
        this.cars.forEach((car: Car) => {
          if (car.id == id) {
            this.car = car;
          }
        });
      }
    });
  }
}
