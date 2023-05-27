import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddPp } from '../manage-module-interface';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

    // private api = "http://localhost:8080";
    private url = "http://localhost:4200/add";

    constructor(private httpClient : HttpClient) { }
  
    getData() : Observable <IAddPp[]> {
      const data = this.httpClient.get<IAddPp[]>(this.url);
      return data;
    }
  
    addData(field : IAddPp) {
      return this.httpClient.post<IAddPp>(this.url, field);
    }
  
    deleteData(field : IAddPp) : Observable <IAddPp> {
      return this.httpClient.delete<IAddPp>(this.url + '/' + field.appPpId);
    }
  
    updateData(field : IAddPp) {
      return this.httpClient.put<IAddPp>(this.url + '/' + field.appPpId, field);
    }

}
