import {Component, OnInit} from '@angular/core';
import {Client} from '../../assets/client';
import {NgForm} from '@angular/forms';
import {ClientHttpService} from '../client/client.http.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  title = 'ClientComponent';
  clients: Array<Client> = new Array<Client>();
  client: Client = new Client();
  updatingClient: Client = new Client();
  constructor(private httpService: ClientHttpService ) {}
  ngOnInit(): void {
    this.httpService.getClients().subscribe((data: Array<Client>) => this.clients = data);
  }
  addClient(client: Client): void {

    this.httpService.setClient(client)
      .subscribe(
        () => this.ngOnInit(),
        error => console.log(error)
      );
  }
  deleteClient(id: number): void {
      this.httpService.removeClient(id)
        .subscribe(
          () => this.ngOnInit()
        );
  }

  updateClient(client: Client): void {
    client = new Client(client.id, client.surname, client.name, client.patronymic,
      client.passport, client.experience, client.phoneNumber, client.address);
    this.httpService.updateClient(client)
      .subscribe(
        () => this.ngOnInit()
      );
  }

  setDataUpdateClient(clientId: number) {
    this.httpService.getClient(clientId).subscribe((data) => this.updatingClient = data);
  }
}
