import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from '../../assets/car';

@Injectable()
export class CarHttpService {
  url = 'http://localhost:8080/cars';
  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get<Array<Car>>(this.url);
  }

  getCar(id: number) {
    return this.http.get<Car>(this.url + '/' + id);
  }

  setCar(car: Car ) {
    return this.http.post<Car>(this.url, car.getObjectJson());
  }

  removeCar(id: number) {
    console.log(id);
    return this.http.delete<Car>(this.url + '/' + id);
  }

  updateCar(car: Car) {
    return this.http.put(this.url, car.getObjectJson());
  }
}
