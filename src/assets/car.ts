export class Car {
  public id: number;
  public model: string;
  public color: string;
  public bodyType: string;
  public transmission: string;
  public vehicleNumber: string;
  public isFree: boolean;
  public price: number;
  constructor(id: number = 0,
              model: string = '',
              color: string = '',
              bodyType: string = '',
              transmission: string = '',
              vehicleNumber: string = '',
              isFree: boolean = true,
              price: number = 0 ) {
    this.id = id;
    this.model = model;
    this.color = color;
    this.bodyType = bodyType;
    this.transmission = transmission;
    this.vehicleNumber = vehicleNumber;
    this.isFree = isFree;
    this.price = price;
  }

  getObjectJson() {
    return {id: this.id, model: this.model, color: this.color,
      bodyType: this.bodyType, transmission: this.transmission,
      vehicleNumber: this.vehicleNumber, isFree: this.isFree,
      price: this.price};
  }
}
