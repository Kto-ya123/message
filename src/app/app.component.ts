import {Component, OnInit} from '@angular/core';
import { User } from '../assets/user';
import { NgForm } from '@angular/forms';
import {MenuItem, MessageService} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent /*implements OnInit*/ {
  title = 'AppComponent';
  users: Array<User> = [];
  name: string;
  age: number;
  items: MenuItem[];
  constructor(private messageService: MessageService) {}
  ngOnInit() {
    this.items = [
      {label: 'Delete', icon: 'pi pi-refresh', command: () => {
          this.getIndexUser(new User('Artur', 24));
        }}
    ];
  }
  addUser(myForm: NgForm): void {
    const user: User = new User( this.name, this.age );
    if (this.getIndexUser(user) === -1) {
      this.users.push(user);
    }
  }
  deleteUser(myForm: NgForm): void {
    const user: User = new User( this.name, this.age );
    const indexUser: number = this.getIndexUser(user);
    if(indexUser >= 0) {
      this.users.splice(indexUser, 1);
    }
  }
  getIndexUser(user: User): number {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].equals(new User(this.name, this.age))) {
        return i;
      }
    }
    return -1;
  }
}
