import {Component, OnInit} from '@angular/core';
import {LoginHttpService} from './login.http.service';
import {urlAutorization} from './url.autorization';
import {ActivatedRoute, Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-contract',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'LoginComponent';
  urls = urlAutorization;
  username: string;
  password: string;
  constructor(private httpService: LoginHttpService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

  public logIn(urlCode: string): void {
    this.httpService.authorizationQuery(urlCode);
  }

  public getToken(): void {
    this.httpService.getToken(this.username, this.password)
      .then(() => alert('Введены неверные данные'))
      .then()
      .finally()
      .catch(token => {
        const jwtHelper = new JwtHelperService();
        if (token.error.text) {
          const decodedToken = jwtHelper.decodeToken(token.error.text);
          sessionStorage.setItem('name', decodedToken.name);
          sessionStorage.setItem('user_id', decodedToken.user_id);
          sessionStorage.setItem('token', token.text);
          this.router.navigate(['']);
        } else {
          alert('Введены неверные данные');
        }
      });
  }
}
