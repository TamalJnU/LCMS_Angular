import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAddPolice } from '../manage-module-interface';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Constant-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApserviceService {

  private api = "http://localhost:8080/api";

  constructor(private httpClient : HttpClient) { }

  public getAllPolices() : Observable <IAddPolice[]> {
    const data = this.httpClient.get<IAddPolice[]>(this.api + '/polices');
    return data;
  }

  public getPolice(field : IAddPolice) : Observable <IAddPolice> {
    return this.httpClient.get<IAddPolice>(this.api + '/polices' + '/' + field.apPoliceId);
  }

  public createPolice(field : IAddPolice) {
    return this.httpClient.post<IAddPolice>(this.api + '/polices', field);
  }

  public deletePolice(field : IAddPolice) : Observable <IAddPolice> {
    return this.httpClient.delete<IAddPolice>(this.api + '/polices' + '/' + field.apPoliceId);
  }

  public updatePolice(field : IAddPolice) {
    return this.httpClient.put<IAddPolice>(this.api + '/polices' + '/' + field.apPoliceId, field);
  }

  public editPoliceById(id: number): Observable<IAddPolice>{
    return this.httpClient.get<IAddPolice>(this.api + '/polices' + '/' + id);
  }

}
