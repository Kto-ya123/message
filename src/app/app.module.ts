import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CarComponent} from './car/car.component';
import {HttpClientModule} from '@angular/common/http';
import {CarHttpService} from './car/car.http.service';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {ClientComponent} from './client/client.component';
import {ContractComponent} from './contract/contract.component';
import {AccidentComponent} from './accident/accident.component';
import {AccidentHttpService} from './accident/accident.http.service';
import {ClientHttpService} from './client/client.http.service';
import {ContractHttpService} from './contract/contract.http.service';
import {AppComponent} from './main/app.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {routing} from './app.routing';
import {HomeComponent} from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    CarComponent,
    ContractComponent,
    AccidentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    RouterModule,
    routing
  ],
  providers: [CarHttpService, AccidentHttpService, ClientHttpService, ContractHttpService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);
