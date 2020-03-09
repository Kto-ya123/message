import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '../../assets/Client';

@Injectable()
export class ClientHttpService {
  url = 'http://localhost:8080/clients';
  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get<Array<Client>>(this.url);
  }

  getClient(id: number) {
    return this.http.get<Client>(this.url + '/' + id);
  }

  setClient(client: Client ) {
    return this.http.post<Client>(this.url, client.getObjectJson());
  }

  removeClient(id: number) {
    console.log(id);
    return this.http.delete<Client>(this.url + '/' + id);
  }

  updateClient(client: Client) {
    return this.http.put(this.url, client.getObjectJson());
  }
}
