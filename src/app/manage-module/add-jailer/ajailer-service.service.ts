import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddJailer } from '../manage-module-interface';

@Injectable({
  providedIn: 'root'
})
export class AjailerServiceService {
  
  // private api = "http://localhost:8080";
  private url = "http://localhost:4200/add";

  constructor(private httpClient : HttpClient) { }

  getData() : Observable <IAddJailer[]> {
    const data = this.httpClient.get<IAddJailer[]>(this.url);
    return data;
  }

  addData(field : IAddJailer) {
    return this.httpClient.post<IAddJailer>(this.url, field);
  }

  deleteData(field : IAddJailer) : Observable <IAddJailer> {
    return this.httpClient.delete<IAddJailer>(this.url + '/' + field.ajailerJailerId);
  }

  updateData(field : IAddJailer) {
    return this.httpClient.put<IAddJailer>(this.url + '/' + field.ajailerJailerId, field);
  }
}
