import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddPp } from '../manage-module-interface';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

    private url = "http://localhost:8080/api";

    constructor(private httpClient : HttpClient) { }
  
    getAllPps() : Observable <IAddPp[]> {
      const data = this.httpClient.get<IAddPp[]>(this.url + '/pps');
      return data;
    }
  
    createPp(field : IAddPp) {
      return this.httpClient.post<IAddPp>(this.url + '/pps', field);
    }
  
    deletePp(field : IAddPp) : Observable <IAddPp> {
      return this.httpClient.delete<IAddPp>(this.url + '/pps' + '/' + field.appPpId);
    }
  
    updatePp(field : IAddPp) {
      return this.httpClient.put<IAddPp>(this.url + '/pps' + '/' + field.appPpId, field);
    }

}
