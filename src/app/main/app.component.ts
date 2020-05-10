import {Component, OnInit} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ContractComponent';
  name: string;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    setInterval(() => this.name = sessionStorage.getItem('name'), 500);
    if (sessionStorage.getItem('token') !== null) {
      this.router.navigate(['']);
    }
  }

  public logout(): void {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
