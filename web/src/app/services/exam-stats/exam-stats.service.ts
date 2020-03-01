import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExamStats } from 'src/app/shared/models/examstats';

@Injectable({
  providedIn: 'root'
})
export class ExamStatsService {

  apiHost = 'https://vt-es.herokuapp.com';
  // apiHost = 'http://localhost:8011';
  apiUrl = this.apiHost + '/examstats';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getExamStats(): Observable<ExamStats> {
    return this.http.get<ExamStats>(this.apiUrl);
  }


  postQuizStartedToApi(): Observable<boolean> {
    const postBody = '';
    return this.http.post<boolean>(this.apiUrl + '/exam/verkeertrainer/started',
            postBody, this.httpOptions);
  }

  postQuizFinishedToApi(): Observable<boolean> {
    const postBody = '';
    return this.http.post<boolean>(this.apiUrl + '/exam/verkeertrainer/finished',
            postBody, this.httpOptions);
  }
}

export enum ExamStatsActions {
  STARTED,
  FINISHED
 }
