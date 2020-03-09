import {Client} from './client';
import {Car} from './car';
export class Contract {
  public id: number;
  public dateOfStart: Date;
  public dateOfEnd: Date;
  public totalCost: number;
  public client: Client;
  public car: Car;

  constructor(id: number = 0,
              dateOfStart: Date = new Date(0),
              dateOfEnd: Date = new Date(0),
              totalCost: number = 0,
              client: Client = new Client(),
              car: Car = new Car()) {
    this.id = id;
    this.dateOfStart = dateOfStart;
    this.dateOfEnd = dateOfEnd;
    this.totalCost = totalCost;
    this.client = client;
    this.car = car;

  }

  getObjectJson() {
    return {id: this.id, dateOfStart: this.dateOfStart, dateOfEnd: this.dateOfEnd,
      totalCost: this.totalCost, client: this.client, car: this.car};
  }
}
