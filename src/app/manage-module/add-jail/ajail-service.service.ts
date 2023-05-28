import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddJail } from '../manage-module-interface';

@Injectable({
  providedIn: 'root'
})
export class AjailServiceService {

    private url = "http://localhost:8080/api";

    constructor(private httpClient : HttpClient) { }
  
    getAllJails() : Observable <IAddJail[]> {
      const data = this.httpClient.get<IAddJail[]>(this.url + '/jails');
      return data;
    }
  
    createJail(field : IAddJail) {
      return this.httpClient.post<IAddJail>(this.url + '/jails', field);
    }
  
    deleteJail(field : IAddJail) : Observable <IAddJail> {
      return this.httpClient.delete<IAddJail>(this.url + '/jails' + '/' + field.ajailJailId);
    }
  
    updateJail(field : IAddJail) {
      return this.httpClient.put<IAddJail>(this.url + '/jails' + '/' + field.ajailJailId, field);
    }
    
}
