export class User {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  equals(user: User): boolean {
    return (this.name === user.name && this.age === user.age);
  }
}
