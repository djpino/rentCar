import { Car } from './../../../core/models/car/car.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  @Input() carList: Car[] = [];

  ngOnInit(): void {  
  }

}
