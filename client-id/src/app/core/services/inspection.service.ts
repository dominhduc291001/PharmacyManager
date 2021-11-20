import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TestAppInfoView } from '../interfaces/test-app-info-view';
import { CopyFormSent2014 } from '../models/test-share-models/copy-form-sent-2014';
import { ProcessTempSave } from '../models/test-share-models/process-temp-save';
import { CopyFormSentIpt } from '../models/test-share-models/copy-form-sent-ipt';
import { TestInfoSave } from '../models/test-info-save';
import { UrlDefault } from 'app/shared/urlDefault';

@Injectable({
  providedIn: 'root'
})
export class InspectionService {
  private httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json'
    }),
  };
  constructor(private httpClient: HttpClient) { }

  public getTestAppInfoView(entrpsSn: number): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/Inspection/GetTestAppInfoView?entrpsSn=${entrpsSn}`;
    return this.httpClient
      .get<TestAppInfoView>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public copyFormSent2014(result: CopyFormSent2014): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionRequest/CopyFormSent_2014`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public infoCopyFormSent2014(result: CopyFormSent2014): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionInfo/CopyFormSent_2014`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public copyFormSent2014Ath(result: CopyFormSent2014): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionRequest/CopyFormSent_2014_Ath`;
    return this.httpClient
      .post<any>(url, result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public infoCopyFormSent2014Ath(result: CopyFormSent2014): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionInfo/CopyFormSent_2014_Ath`;
    return this.httpClient
      .post<any>(url, result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public copyFormSent2014Ipt(result: CopyFormSentIpt): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionRequest/CopyFormSent_2014_Ipt`;
    return this.httpClient
      .post<any>(url, result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public tempSave(result: ProcessTempSave): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionRequest/InspectionRequestTempSave`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public infoTempSave(result: ProcessTempSave): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionInfo/InspectionRequestTempSave`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any{
    return throwError(error.status);
  }
}
