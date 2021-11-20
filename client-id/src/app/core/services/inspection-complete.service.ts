import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TestCompleteSttRq } from '../models/test-complete-status-rq';
import { ProcessCompleteView } from '../interfaces/process-complete-view';
import { UrlDefault } from 'app/shared/urlDefault';

@Injectable({
  providedIn: 'root'
})
export class InspectionCompleteService {
  private httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json'
    }),
  };
  constructor(private router: Router, private httpClient: HttpClient) { }

  public getInspectionCompleteStt(result: TestCompleteSttRq): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionComplete/GetInspectionCompleteList`;
    return this.httpClient
      .post<TestCompleteSttRq>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getSelectCompleteListStt(): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionComplete/GetDdlInspecCompList`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getInspectionCompleteView(result: number): Observable<ProcessCompleteView>{
    const url = `${UrlDefault._apiServer}/api/InspectionComplete/GetInspectionCompleteView?athrzSn=${result}`;
    return this.httpClient
      .post<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any{
    return throwError(error.status);
  }
}
