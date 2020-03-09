import {Component, OnInit} from '@angular/core';
import {Car} from '../../assets/car';
import {NgForm} from '@angular/forms';
import {CarHttpService} from './car.http.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  title = 'CarComponent';
  cars: Array<Car> = new Array<Car>();
  car: Car = new Car();
  constructor(private httpService: CarHttpService ) {}
  ngOnInit(): void {
    this.httpService.getCars().subscribe((data: Array<Car>) => this.cars = data);
  }
  addCar(car: Car): void {

    this.httpService.setCar(car)
      .subscribe(
        () => this.ngOnInit(),
        error => console.log(error)
      );
  }
  deleteCar(id: number): void {
      this.httpService.removeCar(id)
        .subscribe(
          () => this.ngOnInit()
        );
  }

  updateCar(car: Car): void {
    car = new Car(car.id, car.model, car.color, car.bodyType, car.transmission, car.vehicleNumber, car.isFree, car.price)
    this.httpService.updateCar(car)
      .subscribe(
        () => this.ngOnInit()
      );
  }
}
