import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddJudge } from '../manage-module-interface';

@Injectable({
  providedIn: 'root'
})
export class AjServiceService {
  
  // private api = "http://localhost:8080";
  private url = "http://localhost:4200/add";

  constructor(private httpClient : HttpClient) { }

  getData() : Observable <IAddJudge[]> {
    const data = this.httpClient.get<IAddJudge[]>(this.url);
    return data;
  }

  addData(field : IAddJudge) {
    return this.httpClient.post<IAddJudge>(this.url, field);
  }

  deleteData(field : IAddJudge) : Observable <IAddJudge> {
    return this.httpClient.delete<IAddJudge>(this.url + '/' + field.ajJudgeId);
  }

  updateData(field : IAddJudge) {
    return this.httpClient.put<IAddJudge>(this.url + '/' + field.ajJudgeId, field);
  }
}
