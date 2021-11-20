/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthGroup } from '../models/auth-group';
import { AlwncAuthorList } from '../models/alwnc-author-list';
import { UrlDefault } from 'app/shared/urlDefault';

@Injectable({
    providedIn: 'root'
})
export class GroupManagerService {
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    };

    constructor(private router: Router, private httpClient: HttpClient) { }

    public getAuthGroupAll(): Observable<any> {
        const url = `${UrlDefault._apiServer}/api/AuthGroup/AuthGroupAll`;
        return this.httpClient
            .get<AuthGroup>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public getUserInGroup(groupCode: string): Observable<any> {
        const url = `${UrlDefault._apiServer}/api/AuthGroup/UserInGroup?groupCode=${groupCode}`;
        return this.httpClient
            .post<string>(url, groupCode, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public getAlwncAuthorList(groupCode: string): Observable<any> {
        const url = `${UrlDefault._apiServer}/api/AuthGroup/AlwncAuthorList?groupCode=${groupCode}`;
        return this.httpClient
            .post<AlwncAuthorList>(url, groupCode, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    private handleError(error: HttpErrorResponse) {
        return throwError(error.status);
    }
}
