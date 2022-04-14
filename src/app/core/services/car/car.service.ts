import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../../models';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private http: HttpClient) {}
  private _jsonUrl = 'assets/mocks/car/car.mock.json';
  cars: Car[] = [];

  getAllCars(){
    return this.http.get(this._jsonUrl);
  }

}
