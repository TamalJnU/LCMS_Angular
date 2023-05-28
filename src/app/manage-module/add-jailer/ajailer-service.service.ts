import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddJailer } from '../manage-module-interface';

@Injectable({
  providedIn: 'root'
})
export class AjailerServiceService {

  private url = "http://localhost:8080/api";

  constructor(private httpClient : HttpClient) { }

  getAllJailers() : Observable <IAddJailer[]> {
    const data = this.httpClient.get<IAddJailer[]>(this.url + '/jailers');
    return data;
  }

  createJailer(field : IAddJailer) {
    return this.httpClient.post<IAddJailer>(this.url + '/jailers', field);
  }

  deleteJailer(field : IAddJailer) : Observable <IAddJailer> {
    return this.httpClient.delete<IAddJailer>(this.url + '/jailers' + '/' + field.ajailerJailerId);
  }

  updateJailer(field : IAddJailer) {
    return this.httpClient.put<IAddJailer>(this.url + '/jailers' + '/' + field.ajailerJailerId, field);
  }
}
