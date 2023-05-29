import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddJailer } from '../manage-module-interface';

@Injectable({
  providedIn: 'root'
})
export class AjailerServiceService {

  private api = "http://localhost:8080/api";

  constructor(private httpClient : HttpClient) { }

  public getAllJailers() : Observable <IAddJailer[]> {
    const data = this.httpClient.get<IAddJailer[]>(this.api + '/jailers');
    return data;
  }

  public getJailer(field : IAddJailer) : Observable <IAddJailer> {
    return this.httpClient.get<IAddJailer>(this.api + '/jailers' + '/' + field.ajailerJailerId);
  }

  public createJailer(field : IAddJailer) {
    return this.httpClient.post<IAddJailer>(this.api + '/jailers', field);
  }

  public deleteJailer(field : IAddJailer) : Observable <IAddJailer> {
    return this.httpClient.delete<IAddJailer>(this.api + '/jailers' + '/' + field.ajailerJailerId);
  }

  public updateJailer(field : IAddJailer) {
    return this.httpClient.put<IAddJailer>(this.api + '/jailers' + '/' + field.ajailerJailerId, field);
  }
}
