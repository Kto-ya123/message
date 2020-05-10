import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {routing} from '../app.routing';

@Injectable()
export class LoginHttpService {
  url = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  authorizationQuery(url: string) {

   /* this.http.get(this.url + url + '/response').subscribe((data) => console.log(data));*/

    fetch(this.url + url + '/authorization_query', {headers: {
      'Accept': 'text/plain',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    }}).then((data) => location.href = data.url);
  }

  getToken(username: string, password: string) {
    return this.http.post<string>(this.url + '/login', {login: username, name: password}).toPromise();
  }
}
