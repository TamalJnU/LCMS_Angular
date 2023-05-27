import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddOperator } from '../manage-module-interface';

@Injectable({
  providedIn: 'root'
})
export class AoServiceService {

    // private api = "http://localhost:8080";
    private url = "http://localhost:4200/add";

    constructor(private httpClient : HttpClient) { }
  
    getData() : Observable <IAddOperator[]> {
      const data = this.httpClient.get<IAddOperator[]>(this.url);
      return data;
    }
  
    addData(field : IAddOperator) {
      return this.httpClient.post<IAddOperator>(this.url, field);
    }
  
    deleteData(field : IAddOperator) : Observable <IAddOperator> {
      return this.httpClient.delete<IAddOperator>(this.url + '/' + field.aoOperatorId);
    }
  
    updateData(field : IAddOperator) {
      return this.httpClient.put<IAddOperator>(this.url + '/' + field.aoOperatorId, field);
    }
  
}
