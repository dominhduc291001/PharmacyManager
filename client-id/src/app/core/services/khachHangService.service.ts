import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UrlDefault } from 'app/shared/urlDefault';
import { Thuoc } from '../models/thuoc';
import { KhachHang } from '../models/khach-hang';

@Injectable({
    providedIn: 'root'
})
export class KhachHangService {
    private httpOptions = {
        headers: new HttpHeaders({
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Content-Type': 'application/json'
        }),
    };
    constructor(private router: Router, private httpClient: HttpClient) { }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public AllCustomer(): Observable<any> {
        const url = `${UrlDefault._apiServer}/api/Customer/AllCustomer`;
        return this.httpClient
            .get<KhachHang>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public CreateOrUpdateCustomer(result: KhachHang): Observable<any> {
        const url = `${UrlDefault._apiServer}/api/Customer/CreateOrUpdateCustomer`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public DeleteCustomer(result: string): Observable<any> {
        const url = `${UrlDefault._apiServer}/api/Customer/DeleteCustomer?cusId=${result}`;
        return this.httpClient
            .delete<any>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): any {
        return throwError(error.status);
    }
}
