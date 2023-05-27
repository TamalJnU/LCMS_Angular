import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddCourt } from '../manage-module-interface';

@Injectable({
  providedIn: 'root'
})
export class AcServiceService {

  private url = "http://localhost:4200/add";

  constructor(private httpClient : HttpClient) { }

  getData() : Observable <IAddCourt[]> {
    const data = this.httpClient.get<IAddCourt[]>(this.url);
    return data;
  }

  addData(field : IAddCourt) {
    return this.httpClient.post<IAddCourt>(this.url, field);
  }

  deleteData(field : IAddCourt) : Observable <IAddCourt> {
    return this.httpClient.delete<IAddCourt>(this.url + '/' + field.acCourtId);
  }

  updateData(field : IAddCourt) {
    return this.httpClient.put<IAddCourt>(this.url + '/' + field.acCourtId, field);
  }

}
