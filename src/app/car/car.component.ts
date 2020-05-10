import {Component, OnInit} from '@angular/core';
import {Car} from '../../assets/car';
import {CarHttpService} from './car.http.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  title = 'CarComponent';
  cars: Array<Car> = new Array<Car>();
  car: Car = new Car();
  updatingCar: Car = new Car();
  constructor(private httpService: CarHttpService, private router: Router) {}
  ngOnInit(): void {
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['']);
    }
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

  setDataUpdateCar(carId: number) {
    this.httpService.getCar(carId).subscribe((data) => this.updatingCar = data);
  }
}
