import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Accident} from '../../assets/accident';

@Injectable()
export class AccidentHttpService {
  url = 'http://localhost:8080/accidents';
  constructor(private http: HttpClient) { }

  getAccidents() {
    return this.http.get<Array<Accident>>(this.url);
  }

  getAccident(id: number) {
    return this.http.get<Accident>(this.url + '/' + id);
  }

  setAccident(accident: Accident ) {
    return this.http.post<Accident>(this.url, accident.getObjectJson());
  }

  removeAccident(id: number) {
    console.log(id);
    return this.http.delete<Accident>(this.url + '/' + id);
  }

  updateAccident(accident: Accident) {
    return this.http.put(this.url, accident.getObjectJson());
  }
}
