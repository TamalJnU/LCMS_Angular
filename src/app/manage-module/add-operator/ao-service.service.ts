import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddOperator } from '../manage-module-interface';

@Injectable({
  providedIn: 'root'
})
export class AoServiceService {

    private url = "http://localhost:8080/api";

    constructor(private httpClient : HttpClient) { }
  
    public getAllOperators() : Observable <IAddOperator[]> {
      const data = this.httpClient.get<IAddOperator[]>(this.url + '/operators');
      return data;
    }

    public getOperator(field : IAddOperator) : Observable <IAddOperator> {
      return this.httpClient.get<IAddOperator>(this.url + '/operators' + '/' + field.aoOperatorId);
    }
  
    public createOperator(field : IAddOperator) {
      return this.httpClient.post<IAddOperator>(this.url + '/operators', field);
    }
  
    public deleteOperator(field : IAddOperator) : Observable <IAddOperator> {
      return this.httpClient.delete<IAddOperator>(this.url + '/operators' + '/' + field.aoOperatorId);
    }
  
    public updateOperator(field : IAddOperator) {
      return this.httpClient.put<IAddOperator>(this.url + '/operators' + '/' + field.aoOperatorId, field);
    }
  
}
