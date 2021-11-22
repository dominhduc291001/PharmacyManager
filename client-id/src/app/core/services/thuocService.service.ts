import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UrlDefault } from 'app/shared/urlDefault';
import { Thuoc } from '../models/thuoc';
import { LoaiThuoc } from '../models/loai-thuoc';
import { ThuocRequest } from '../models/thuoc-request';

@Injectable({
    providedIn: 'root'
})
export class ThuocService {
    private httpOptions = {
        headers: new HttpHeaders({
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Content-Type': 'application/json'
        }),
    };
    constructor(private router: Router, private httpClient: HttpClient) { }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public AllProduct(): Observable<any> {
        const url = `${UrlDefault._apiServer}/api/Product/AllProduct`;
        return this.httpClient
            .get<Thuoc>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public AllProductType(): Observable<any> {
        const url = `${UrlDefault._apiServer}/api/Product/AllProductType`;
        return this.httpClient
            .get<LoaiThuoc>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public CreateProduct(result: ThuocRequest): Observable<any> {
        const url = `${UrlDefault._apiServer}/api/Product/CreateProduct`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public DeleteProduct(result: string): Observable<any> {
        const url = `${UrlDefault._apiServer}/api/Product/DeleteProduct?ProId=${result}`;
        return this.httpClient
            .delete<any>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): any {
        return throwError(error.status);
    }
}
