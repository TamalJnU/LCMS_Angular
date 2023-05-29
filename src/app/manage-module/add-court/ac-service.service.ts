import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddCourt } from '../manage-module-interface';

@Injectable({
  providedIn: 'root'
})
export class AcServiceService {

  private api = "http://localhost:8080/api";

  constructor(private httpClient : HttpClient) { }

  public getAllCourts() : Observable <IAddCourt[]> {
    const data = this.httpClient.get<IAddCourt[]>(this.api + '/courts');
    return data;
  }

  public getCourt(field : IAddCourt) : Observable <IAddCourt> {
    return this.httpClient.get<IAddCourt>(this.api + '/courts' + '/' + field.acCourtId)
  }

  public createCourt(field : IAddCourt) {
    return this.httpClient.post<IAddCourt>(this.api + '/courts', field);
  }

  public deleteCourt(field : IAddCourt) : Observable <IAddCourt> {
    return this.httpClient.delete<IAddCourt>(this.api + '/courts' + '/' + field.acCourtId);
  }

  public updateCourt(field : IAddCourt) {
    return this.httpClient.put<IAddCourt>(this.api + '/courts' + '/' + field.acCourtId, field);
  }

}
