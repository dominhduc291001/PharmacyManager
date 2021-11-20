import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UrlDefault } from 'app/shared/urlDefault';
import { FormConsentCompleteRp, formConsentData } from '../interfaces/form-consent-complete-rp';
import { FormConsentCompleteRq } from '../models/form-consent-complete-rq';
import { DdlFormConsentComplete } from '../interfaces/ddl-form-consent-complete';
import { FormConsentRequestRq } from '../models/form-consent-request-rq';
import { DdlFormConsentInfo } from '../interfaces/ddl-form-consent-info';
import { FormConsentCompleteView } from '../interfaces/form-consent-complete-view';

@Injectable({
    providedIn: 'root'
})
export class FormConsentService {
    private httpOptions = {
        headers: new HttpHeaders({
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Content-Type': 'application/json'
        }),
    };
    constructor(private router: Router, private httpClient: HttpClient) { }

    public formConsentCompleteView(result: number): Observable<FormConsentCompleteView> {
        const url = `${UrlDefault._apiServer}/api/FormConsentComplete/FormConsentCompleteView?fomConfmSn=${result}`;
        return this.httpClient
            .get<any>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public formConsentCompleteList(result: FormConsentCompleteRq): Observable<FormConsentCompleteRp> {
        const url = `${UrlDefault._apiServer}/api/FormConsentComplete/FormConsentCompleteList`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public ddlFormConsentCompleteList(): Observable<DdlFormConsentComplete> {
        const url = `${UrlDefault._apiServer}/api/FormConsentComplete/DdlFormConsentCompleteList`;
        return this.httpClient
            .post<any>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public formConsentRequestList(result: FormConsentRequestRq): Observable<formConsentData[]> {
        const url = `${UrlDefault._apiServer}/api/FormConsentRequest/FormConsentRequestList`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public formConsentRequestView(result: number): Observable<FormConsentCompleteView> {
        const url = `${UrlDefault._apiServer}/api/FormConsentRequest/FormConsentRequestView?fomConfmSn=${result}`;
        return this.httpClient
            .get<any>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public formConsentInfoList(result: FormConsentCompleteRq): Observable<FormConsentCompleteRp> {
        const url = `${UrlDefault._apiServer}/api/FormConsentInfo/FormConsentInfoList`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public ddlFormConsentInfoList(): Observable<DdlFormConsentInfo> {
        const url = `${UrlDefault._apiServer}/api/FormConsentInfo/DdlFormConsentInfoList`;
        return this.httpClient
            .get<any>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public formConsentInfoView(result: number): Observable<FormConsentCompleteView> {
        const url = `${UrlDefault._apiServer}/api/FormConsentInfo/FormConsentInfoView?fomConfmSn=${result}`;
        return this.httpClient
            .get<any>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): any {
        return throwError(error.status);
    }
}
