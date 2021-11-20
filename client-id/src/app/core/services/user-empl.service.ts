import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserEmpl } from '../models/user-empl';
import { UrlDefault } from 'app/shared/urlDefault';
import { UserEmplRequest } from '../models/user-empl-request';
import { UserEmplCheckpass } from '../models/user-empl-checkpass';

@Injectable({
    providedIn: 'root'
})
export class UserEmplService {
    private httpOptions = {
        headers: new HttpHeaders({
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Content-Type': 'application/json'
        }),
    };

    // eslint-disable-next-line @typescript-eslint/naming-convention
    private API_SERVER = 'https://localhost:5001';
    constructor(private router: Router, private httpClient: HttpClient) { }

    public getEmplsList(result: UserEmplRequest): Observable<UserEmpl[]> {
        const url = `${UrlDefault._apiServer}/api/Empl/GetEmplList`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public getEmplView(userId: string): Observable<any> {
        const url = `${UrlDefault._apiServer}/api/Empl/GetEmplView?userId=${userId}`;
        return this.httpClient
            .post<string>(url, userId, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public checkCurrentPass(user: UserEmplCheckpass): Observable<any> {
        const url = `${UrlDefault._apiServer}/api/Empl/CheckCurrentPass`;
        return this.httpClient
            .post<boolean>(url, user, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public updatePass(user: UserEmplCheckpass): Observable<any> {
        const url = `${UrlDefault._apiServer}/api/Empl/UpdatePassword`;
        return this.httpClient
            .post<boolean>(url, user, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    private handleError(error: HttpErrorResponse) {
        return throwError(error.status);
    }
}
