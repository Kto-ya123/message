import {Contract} from './contract';

export class Accident {
  public id: number;
  public dateOfAccident: Date;
  public costOfDamage: number;
  public contract: Contract;
  constructor(id: number = 0,
              dateOfAccident: Date = new Date(0),
              costOfDamage: number = 0,
              contract: Contract = new Contract()) {
    this.id = id;
    this.dateOfAccident = dateOfAccident;
    this.costOfDamage = costOfDamage;
    this.contract = contract;
  }

  getObjectJson() {
    return {id: this.id, dateOfAccident: this.dateOfAccident,
      costOfDamage: this.costOfDamage, contract: this.contract};
  }
}
