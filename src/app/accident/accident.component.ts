import {Component, OnInit} from '@angular/core';
import {Accident} from '../../assets/accident';
import {NgForm} from '@angular/forms';
import {AccidentHttpService} from './accident.http.service';
import {ContractHttpService} from '../contract/contract.http.service';
import {Contract} from '../../assets/contract';

@Component({
  selector: 'app-accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.css'],
})
export class AccidentComponent implements OnInit {
  title = 'AccidentComponent';
  accidents: Array<Accident> = new Array<Accident>();
  accident: Accident = new Accident();
  contracts: Array<Contract> = new Array<Contract>();
  updatingAccident: Accident = new Accident();
  constructor(private httpService: AccidentHttpService, private contractHttpService: ContractHttpService ) {}
  ngOnInit(): void {
    this.httpService.getAccidents().subscribe((data: Array<Accident>) => this.accidents = data);
    this.contractHttpService.getContracts().subscribe((data: Array<Contract>) => this.contracts  = data);
  }
  addAccident(accident: Accident): void {

    this.httpService.setAccident(accident)
      .subscribe(
        () => this.ngOnInit(),
        error => console.log(error)
      );
  }
  deleteAccident(id: number): void {
      this.httpService.removeAccident(id)
        .subscribe(
          () => this.ngOnInit()
        );
  }

  updateAccident(accident: Accident): void {
    accident = new Accident(accident.id, accident.dateOfAccident,
      accident.costOfDamage, accident.contract);
    this.httpService.updateAccident(accident)
      .subscribe(
        () => this.ngOnInit()
      );
  }
  setDataUpdateAccident(accidentId: number) {
    this.httpService.getAccident(accidentId).subscribe((data) => this.updatingAccident = data);
  }
}
