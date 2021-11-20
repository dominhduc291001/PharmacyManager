import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UrlDefault } from 'app/shared/urlDefault';
import { InfoListRq } from '../models/info-list-rq';
import { QrcodeInfoView } from '../interfaces/process-complete-view';
import { QrcodeSetting } from '../models/qrcode-setting';

@Injectable({
  providedIn: 'root'
})
export class QrcodeManagerService {
  private httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json'
    }),
  };
  constructor(private router: Router, private httpClient: HttpClient) { }

  public searchQRCode(result: string): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/QRCode/SearchQRCode?qrCodeNum=${result}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getQRCodeInfoList(result: InfoListRq): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/QRCode/GetQRCodeInfoList`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getQRCodeCompleteList(result: InfoListRq): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/QRCode/GetQRCodeCompleteList`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public qrcodeInfoView(result: string): Observable<QrcodeInfoView>{
    const url = `${UrlDefault._apiServer}/api/QRCode/QRcodeInfoView?athrzSn=${result}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public selectQRPrintApprove(result: QrcodeSetting): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/QRCode/SelectQRPrintApprove`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public updateQRPrintApprove(result: QrcodeSetting): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/QRCode/UpdateQRPrintApprove`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public insertQRPrintApprove(result: QrcodeSetting): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/QRCode/InsertQRPrintApprove`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any{
    return throwError(error.status);
  }
}
