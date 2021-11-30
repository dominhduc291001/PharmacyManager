import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UrlDefault } from 'app/shared/urlDefault';

@Injectable({
    providedIn: 'root'
})
export class XuatHangService {
    private httpOptions = {
        headers: new HttpHeaders({
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Content-Type': 'application/json'
        }),
    };
    constructor(private router: Router, private httpClient: HttpClient) { }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public AllExpOrder(): Observable<any> {
        const url = `${UrlDefault._apiServer}/api/ExpOrder/AllExpOrder`;
        return this.httpClient
            .get<any>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public ExpOrderProduct(result: any): Observable<any> {
        const url = `${UrlDefault._apiServer}/api/ExpOrder/ExpOrderProduct`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): any {
        return throwError(error.status);
    }
}
