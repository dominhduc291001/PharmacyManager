import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Notice } from '../models/notice';
import { UrlDefault } from 'app/shared/urlDefault';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json'
    }),
  };
  constructor(private router: Router, private httpClient: HttpClient) { }

  public getNotice(): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/Dashboard/Notice`;
    return this.httpClient
      .get<Notice>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getDougnutChart(): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/Dashboard/DougnutChart`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getBarChart(monthNumber: number): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/Dashboard/MainCount?monthNumber=${monthNumber}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any{
    return throwError(error.status);
  }
}
