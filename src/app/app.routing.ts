import {RouterModule, Routes} from '@angular/router';
import {CarComponent} from './car/car.component';
import {ClientComponent} from './client/client.component';
import {AccidentComponent} from './accident/accident.component';
import {ContractComponent} from './contract/contract.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'cars', component: CarComponent},
  {path: 'clients', component: ClientComponent},
  {path: 'accidents', component: AccidentComponent},
  {path: 'contracts', component: ContractComponent},
  {path: '', component: HomeComponent}
];

export const routing = RouterModule.forRoot(routes);
