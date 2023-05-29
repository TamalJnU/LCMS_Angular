import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddJudge } from '../manage-module-interface';

@Injectable({
  providedIn: 'root'
})
export class AjServiceService {

  private api = "http://localhost:8080/api";

  constructor(private httpClient : HttpClient) { }

  public getAllJudges() : Observable <IAddJudge[]> {
    const data = this.httpClient.get<IAddJudge[]>(this.api + '/judges');
    return data;
  }

  public getJudge(field : IAddJudge) : Observable <IAddJudge> {
    return this.httpClient.get<IAddJudge>(this.api + '/judges' + '/' + field.ajJudgeId)
  }

  public createJudge(field : IAddJudge) {
    return this.httpClient.post<IAddJudge>(this.api + '/judges', field);
  }

  public deleteJudge(field : IAddJudge) : Observable <IAddJudge> {
    return this.httpClient.delete<IAddJudge>(this.api + '/judges' + '/' + field.ajJudgeId);
  }

  public updateJudge(field : IAddJudge) {
    return this.httpClient.put<IAddJudge>(this.api + '/judges' + '/' + field.ajJudgeId, field);
  }
}
