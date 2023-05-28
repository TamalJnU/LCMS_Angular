import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddJudge } from '../manage-module-interface';

@Injectable({
  providedIn: 'root'
})
export class AjServiceService {

  private url = "http://localhost:8080/api";

  constructor(private httpClient : HttpClient) { }

  getAllJudges() : Observable <IAddJudge[]> {
    const data = this.httpClient.get<IAddJudge[]>(this.url + '/judges');
    return data;
  }

  createJudge(field : IAddJudge) {
    return this.httpClient.post<IAddJudge>(this.url + '/judges', field);
  }

  deleteJudge(field : IAddJudge) : Observable <IAddJudge> {
    return this.httpClient.delete<IAddJudge>(this.url + '/judges' + '/' + field.ajJudgeId);
  }

  updateJudge(field : IAddJudge) {
    return this.httpClient.put<IAddJudge>(this.url + '/judges' + '/' + field.ajJudgeId, field);
  }
}
