import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../assets/user';

@Injectable()
export class HttpService {
  url = 'https://localhost:44361/api/message';
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url);
  }

  setData(user: User): void {
    this.http.post(this.url, user);
  }
}
