import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CarComponent} from './car/car.component';
import {HttpClientModule} from '@angular/common/http';
import {CarHttpService} from './car/car.http.service';
import {Router, RouterModule, Routes, ROUTES} from '@angular/router';
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {ClientComponent} from './client/client.component';
import {ContractComponent} from './contract/contract.component';
import {AccidentComponent} from './accident/accident.component';
import {AccidentHttpService} from './accident/accident.http.service';
import {ClientHttpService} from './client/client.http.service';
import {ContractHttpService} from './contract/contract.http.service';

const routes: Routes = [
  {path: '', component: CarComponent},
  {path: 'client', component: ClientComponent}
]
@NgModule({
  declarations: [
    ClientComponent,
    CarComponent,
    ContractComponent,
    AccidentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [CarHttpService, AccidentHttpService, ClientHttpService, ContractHttpService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [CarComponent]
})
export class AppModule {
}
