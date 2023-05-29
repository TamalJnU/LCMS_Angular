import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddJail } from '../manage-module-interface';

@Injectable({
  providedIn: 'root'
})
export class AjailServiceService {

    private api = "http://localhost:8080/api";

    constructor(private httpClient : HttpClient) { }
  
    public getAllJails() : Observable <IAddJail[]> {
      const data = this.httpClient.get<IAddJail[]>(this.api + '/jails');
      return data;
    }

    public getJail(field : IAddJail) : Observable <IAddJail> {
      return this.httpClient.get<IAddJail>(this.api + '/jails' + '/' + field.ajailJailId);
    }
  
    public createJail(field : IAddJail) {
      return this.httpClient.post<IAddJail>(this.api + '/jails', field);
    }
  
    public deleteJail(field : IAddJail) : Observable <IAddJail> {
      return this.httpClient.delete<IAddJail>(this.api + '/jails' + '/' + field.ajailJailId);
    }
  
    public updateJail(field : IAddJail) {
      return this.httpClient.put<IAddJail>(this.api + '/jails' + '/' + field.ajailJailId, field);
    }
    
}
