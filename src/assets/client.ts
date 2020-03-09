export class Client {
  public id: number;
  public surname: string;
  public name: string;
  public patronymic: string;
  public passport: string;
  public experience: number;
  public phoneNumber: string;
  public address: string;
  constructor(id: number = 0,
              surname: string = '',
              name: string = '',
              patronymic: string = '',
              passport: string = '',
              experience: number = 0,
              phoneNumber: string = '',
              address: string = '' ) {
    this.id = id;
    this.surname = surname;
    this.name = name;
    this.patronymic = patronymic;
    this.passport = passport;
    this.experience = experience;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }

  getObjectJson() {
    return {id: this.id, surname: this.surname, name: this.name,
      patronymic: this.patronymic, passport: this.passport,
      experience: this.experience, phoneNumber: this.phoneNumber,
      address: this.address};
  }
}
