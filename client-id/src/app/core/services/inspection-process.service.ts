import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TestProcessSttRq } from '../models/test-process-status-rq';
import { formConfmNo, TestProcessSttDetail } from '../interfaces/test-process-status-detail';
import { ProcessHistList } from '../interfaces/process-hist-list';
import { ProcessAtchmnflList } from '../interfaces/process-atchmnfl-list';
import { ProcessInfoSelect } from '../interfaces/process-info-select';
import { AthrzConfmIssu } from '../interfaces/athrz-confm-issu';
import { EntrpsAddress } from '../models/test-share-models/entrps-address';
import { UrlDefault } from 'app/shared/urlDefault';

@Injectable({
  providedIn: 'root'
})
export class InspectionProcessService {
  private httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json'
    }),
  };
  constructor(private router: Router, private httpClient: HttpClient) { }

  public getInspectionStt(result: TestProcessSttRq): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionRequest/GetInspectionRequestList`;
    return this.httpClient
      .post<TestProcessSttRq>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getSelectListStt(): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionRequest/GetDdlInspecReqList`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getProcessStatusDetail(athrzSn: number): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionRequest/GetInspectionRequestView?athrzSn=${athrzSn}`;
    return this.httpClient
      .get<TestProcessSttDetail>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getProcessHistList(athrzSn: number): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionRequest/GetProcessHistList?athrzSn=${athrzSn}`;
    return this.httpClient
      .get<ProcessHistList>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getProcessAtchmnflList(athrzSn: number): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionRequest/GetInspectionAtchmnflList?athrzSn=${athrzSn}`;
    return this.httpClient
      .get<ProcessAtchmnflList>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getProcessInfoSelect(): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionRequest/GetDdlProcessInfoList`;
    return this.httpClient
      .get<ProcessInfoSelect>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getAthrzConfmIssuRequest(athrzSn: number): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionRequest/GetAthrzConfmIssuRequest?athrzSn=${athrzSn}`;
    return this.httpClient
      .get<AthrzConfmIssu>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public entrpsAddressList(entrprsSn: number): Observable<EntrpsAddress[]>{
    const url = `${UrlDefault._apiServer}/api/InspectionRequest/EntrpsAddressList?entrprsSn=${entrprsSn}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public entrpsFomConfmList(entrprsSn: number): Observable<formConfmNo[]>{
    const url = `${UrlDefault._apiServer}/api/InspectionRequest/FomConfmList?entrprsSn=${entrprsSn}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any{
    return throwError(error.status);
  }
}
