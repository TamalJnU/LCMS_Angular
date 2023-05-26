import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addPoliceInterface } from '../manage-module-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApserviceService {

  // private api = "http://localhost:8080";
  private url = "http://localhost:3000/list";

  constructor(private httpClient : HttpClient) { }

  getData() : Observable <addPoliceInterface[]> {
    const data = this.httpClient.get<addPoliceInterface[]>(this.url);
    return data;
  }

  addData(field : addPoliceInterface) {
    return this.httpClient.post<addPoliceInterface>(this.url, field);
  }

  deleteData(field : addPoliceInterface) : Observable <addPoliceInterface> {
    return this.httpClient.delete<addPoliceInterface>(this.url + '/' + field.apPoliceId);
  }

  updateData(field : addPoliceInterface) {
    return this.httpClient.put<addPoliceInterface>(this.url + '/' + field.apPoliceId, field);
  }

}
