import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class HttpSupportService {
apiUrl="http://localhost:56598/";
  constructor(private _http:Http) { }
  getEmployees(){
    return this._http.get(this.apiUrl + '/api/Employee/GetEmployees')
              .map((response: Response) =>response.json())
              
  }
  saveCustomer(customer){
    return this._http.post(this.apiUrl + '/api/Employee/PostEmployee', customer)
            .map((response: Response) => response.json())
            
  }
}
