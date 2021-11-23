import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UrlDefault } from 'app/shared/urlDefault';
import { NhaCungCap } from '../models/nha-cung-cap';

@Injectable({
    providedIn: 'root'
})
export class NhaCungCapService {
    private httpOptions = {
        headers: new HttpHeaders({
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Content-Type': 'application/json'
        }),
    };
    constructor(private router: Router, private httpClient: HttpClient) { }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public AllSupplier(): Observable<any> {
        const url = `${UrlDefault._apiServer}/api/Supplier/AllSupplier`;
        return this.httpClient
            .get<NhaCungCap>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public CreateOrUpdateSupplier(result: NhaCungCap): Observable<any> {
        const url = `${UrlDefault._apiServer}/api/Supplier/CreateOrUpdateSupplier`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public DeleteSupplier(result: string): Observable<any> {
        const url = `${UrlDefault._apiServer}/api/Supplier/DeleteSupplier?supId=${result}`;
        return this.httpClient
            .delete<any>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): any {
        return throwError(error.status);
    }
}
