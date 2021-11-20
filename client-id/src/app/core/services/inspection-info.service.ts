import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { InfoListRq } from '../models/info-list-rq';
import { InspecTemp } from '../models/test-share-models/process-temp-save';
import { ProcessCompleteView } from '../interfaces/process-complete-view';
import { ProcessInfoEditModel } from '../interfaces/process-info-edit-model';
import { AthrzConfmIssuInfo } from '../interfaces/athrz-confm-issu-info';
import { TestInfoSave } from '../models/test-info-save';
import { UrlDefault } from 'app/shared/urlDefault';

@Injectable({
  providedIn: 'root'
})
export class InspectionInfoService {
  private httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json'
    }),
  };
  constructor(private router: Router, private httpClient: HttpClient) { }

  public getInspectionInfo(result: InfoListRq): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionInfo/GetInspectionInfoList`;
    return this.httpClient
      .post<InfoListRq>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getSelectInfoList(): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionRequest/GetDdlInspecReqList`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getInspectionDetailProcess(result: InspecTemp): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionInfo/InspectionDetailProcess`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getInspectionInfoView(result: number): Observable<ProcessCompleteView>{
    const url = `${UrlDefault._apiServer}/api/InspectionInfo/InspectionInfoView?athrzSn=${result}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getInspectionInfoEdit(result: number): Observable<ProcessInfoEditModel>{
    const url = `${UrlDefault._apiServer}/api/InspectionInfo/InspectionInfoEdit?athrzSn=${result}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getAthrzConfmIssuInfo(result: number): Observable<AthrzConfmIssuInfo>{
    const url = `${UrlDefault._apiServer}/api/InspectionInfo/GetAthrzConfmIssuInfo?athrzSn=${result}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public delDetailProcess(_athrzSn: number, _athrzDetailSn: number): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptDetailProcess`;
    const result = {
        athrzSn: _athrzSn,
        athrzDetailSn: _athrzDetailSn,
        mode: 'D'
    };
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public inspectionInfoSave(result: TestInfoSave): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionInfo/InspectionInfoSave`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any{
    return throwError(error.status);
  }
}
