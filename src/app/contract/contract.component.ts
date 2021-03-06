import {Component, OnInit} from '@angular/core';
import {Contract} from '../../assets/contract';
import {NgForm} from '@angular/forms';
import {ContractHttpService} from './contract.http.service';
import {Client} from '../../assets/client';
import {Car} from '../../assets/car';
import {ClientHttpService} from '../client/client.http.service';
import {CarHttpService} from '../car/car.http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css'],
})
export class ContractComponent implements OnInit {
  title = 'ContractComponent';
  clients: Array<Client> = new Array<Client>();
  cars: Array<Car> = new Array<Car>();
  contracts: Array<Contract> = new Array<Contract>();
  contract: Contract = new Contract();
  updatingContract: Contract = new Contract();
  constructor(private httpService: ContractHttpService, private clientHttpService: ClientHttpService,
              private carHttpService: CarHttpService, private router: Router) {}
  ngOnInit(): void {
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['']);
    }
    this.httpService.getContracts().subscribe((data: Array<Contract>) => this.contracts = data);
    this.carHttpService.getCars().subscribe((data: Array<Car>) => this.cars = data);
    this.clientHttpService.getClients().subscribe((data: Array<Client>) => this.clients = data);
  }
  addContract(contract: Contract): void {
    this.httpService.setContract(contract)
      .subscribe(
        () => this.ngOnInit(),
        error => console.log(error)
      );
  }
  deleteContract(id: number): void {
      this.httpService.removeContract(id)
        .subscribe(
          () => this.ngOnInit()
        );
  }

  updateContract(contract: Contract): void {
    contract = new Contract(contract.id, contract.dateOfStart, contract.dateOfEnd,
      contract.totalCost, contract.client, contract.car);
    this.httpService.updateContract(contract)
      .subscribe(
        () => this.ngOnInit()
      );
  }

  setDataUpdateContract(contractId: number) {
    this.httpService.getContract(contractId).subscribe( (data) => this.updatingContract = data);
  }
}
