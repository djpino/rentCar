import { Component, OnInit } from '@angular/core';
import { CarService } from './../../../../core/services/car/car.service';
import { Car } from './../../../../core/models/car/car.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cars: Car[] = [];
  carsToSlide: Car[] = [];
  ready: boolean = false;
  public searchItem: any = '';

  constructor(private carService: CarService) {}


  ngOnInit(): void {
    this.getAllCars();
  }

  async getAllCars() {
    await this.carService.getAllCars().subscribe({
      next: (cars) => {
        this.cars = cars as Car[];
        let randomHome = this.random(this.cars, 12);
        this.cars = randomHome;
        let randomCarousel = this.random(this.cars, 5);
        this.carsToSlide = randomCarousel;
        this.ready = true;
      },
      error: (error) => console.error(error),
    });
  }

  random(arr: Car[], num = 1) {
    const res = [];
    for (let i = 0; i < num; ) {
      const random = Math.floor(Math.random() * arr.length);
      if (res.indexOf(arr[random]) !== -1) {
        continue;
      }
      res.push(arr[random]);
      i++;
    }
    return res;
  }
}
