import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddJail } from '../manage-module-interface';

@Injectable({
  providedIn: 'root'
})
export class AjailServiceService {

    // private api = "http://localhost:8080";
    private url = "http://localhost:4200/add";

    constructor(private httpClient : HttpClient) { }
  
    getData() : Observable <IAddJail[]> {
      const data = this.httpClient.get<IAddJail[]>(this.url);
      return data;
    }
  
    addData(field : IAddJail) {
      return this.httpClient.post<IAddJail>(this.url, field);
    }
  
    deleteData(field : IAddJail) : Observable <IAddJail> {
      return this.httpClient.delete<IAddJail>(this.url + '/' + field.ajailJailId);
    }
  
    updateData(field : IAddJail) {
      return this.httpClient.put<IAddJail>(this.url + '/' + field.ajailJailId, field);
    }
    
}
