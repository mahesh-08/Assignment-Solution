import { Customer } from './interface/customer';
import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _httpClient:HttpClient) { }
  //dataURL:string="./assets/data.json";
  private dataURL = 'api/customers';
  private statesURL = 'api/states';

  getAllCustomers():Observable<Customer[]>{
    return  this._httpClient.get<Customer[]>(this.dataURL)
    .pipe(
      tap(),
      //catchError(this.handleError)
            )
  }

  addCustomer(customer:Customer){
    return this._httpClient.post(this.dataURL,customer)
    .pipe(
      tap());
  }

  deleteCustomer(customerId){
    return this._httpClient.delete(this.dataURL+"/"+customerId)
    .pipe(
      tap());
  }

  updateCustomer(customer:Customer):Observable<number>{
    let httpHeaders = new HttpHeaders({
      'content-Type' : 'application/json'
    });
    return this._httpClient.put<Customer>(this.dataURL+"/"+customer.id,customer,{
      headers: httpHeaders,
      observe: 'response'
    })
    .pipe(
      map(res=>res.status),
       //catchError(this.handleError)
    );
  }

  getStates(){
    return  this._httpClient.get(this.statesURL)
    .pipe(
      tap(),
      //catchError(this.handleError)
            )
  }

}
