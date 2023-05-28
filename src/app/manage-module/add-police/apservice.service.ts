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

  private url = "http://localhost:8080";

  constructor(private httpClient : HttpClient) { }

  getData() : Observable <IAddPolice[]> {
    const data = this.httpClient.get<IAddPolice[]>(this.url);
    return data;
  }

  addData(field : IAddPolice) {
    return this.httpClient.post<IAddPolice>(this.url, field, httpOptions);
  }

  deleteData(field : IAddPolice) : Observable <IAddPolice> {
    return this.httpClient.delete<IAddPolice>(this.url + '/' + field.apPoliceId);
  }

  updateData(field : IAddPolice) {
    return this.httpClient.put<IAddPolice>(this.url + '/' + field.apPoliceId, field, httpOptions);
  }

}
