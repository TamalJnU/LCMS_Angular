import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddPp } from '../manage-module-interface';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
    getAllPolices() {
      throw new Error('Method not implemented.');
    }

    private url = "http://localhost:8080/api";

    constructor(private httpClient : HttpClient) { }
  
    public getAllPps() : Observable <IAddPp[]> {
      const data = this.httpClient.get<IAddPp[]>(this.url + '/pps');
      return data;
    }

    public getPp(field : IAddPp) : Observable <IAddPp> {
      return this.httpClient.get<IAddPp>(this.url + '/pps' + '/' + field.appPpId);
    }
  
    public createPp(field : IAddPp) {
      return this.httpClient.post<IAddPp>(this.url + '/pps', field);
    }
  
    public deletePp(field : IAddPp) : Observable <IAddPp> {
      return this.httpClient.delete<IAddPp>(this.url + '/pps' + '/' + field.appPpId);
    }
  
    public updatePp(field : IAddPp) {
      return this.httpClient.put<IAddPp>(this.url + '/pps' + '/' + field.appPpId, field);
    }

}
