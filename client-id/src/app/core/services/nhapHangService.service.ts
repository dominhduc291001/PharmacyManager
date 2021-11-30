import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UrlDefault } from 'app/shared/urlDefault';

@Injectable({
    providedIn: 'root'
})
export class NhapHangService {
    private httpOptions = {
        headers: new HttpHeaders({
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Content-Type': 'application/json'
        }),
    };
    constructor(private router: Router, private httpClient: HttpClient) { }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public AllImpOrder(): Observable<any> {
        const url = `${UrlDefault._apiServer}/api/ImpOrder/AllImpOrder`;
        return this.httpClient
            .get<any>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public ImpOrderProduct(result: any): Observable<any> {
        const url = `${UrlDefault._apiServer}/api/ImpOrder/ImpOrderProduct`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): any {
        return throwError(error.status);
    }
}
