import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contract} from '../../assets/contract';

@Injectable()
export class ContractHttpService {
  url = 'http://localhost:8080/contracts';
  constructor(private http: HttpClient) { }

  getContracts() {
    return this.http.get<Array<Contract>>(this.url);
  }

  getContract(id: number) {
    return this.http.get<Contract>(this.url + '/' + id);
  }

  setContract(contract: Contract ) {
    return this.http.post<Contract>(this.url, contract.getObjectJson());
  }

  removeContract(id: number) {
    console.log(id);
    return this.http.delete<Contract>(this.url + '/' + id);
  }

  updateContract(contract: Contract) {
    return this.http.put(this.url, contract.getObjectJson());
  }
}
