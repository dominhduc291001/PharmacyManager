import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { UrlDefault } from 'app/shared/urlDefault';
@Injectable()
export class AuthService
{
    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for access token
     */
    set accessToken(token: string)
    {
        localStorage.setItem('accessToken', token);
    }

    get accessToken(): string
    {
        return localStorage.getItem('accessToken') ?? '';
    }

    set userOnl(token: string){
        localStorage.setItem('username',  AuthUtils.getUserOnl(token));
    }

    get userOnl(): string
    {
        return localStorage.getItem('username') ?? '';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------


    /**
     * Sign in
     *
     * @param credentials
     */
    signIn(credentials: { username: string; password: string }): Observable<any>
    {
        // return this._httpClient.post('http://api.ktc.thlone.vn/api/Auth/Login', credentials).pipe(
        //     switchMap((response: any) => {

        //         // Store the access token in the local storage
        //         this.accessToken = response.accessToken;
        //         this.userOnl = response.accessToken;
        //         // Return a new observable with the response
        //         return of(response);
        //     })
        // );
        return this._httpClient.post(`${UrlDefault._apiServer}/api/Auth/Login`, credentials).pipe(
            switchMap((response: any) => {
                this.accessToken = response.accessToken;
                this.userOnl = response.accessToken;
                return of(response);
            })
        );
    }

    /**
     * Sign out
     */
    signOut(): Observable<any>
    {
        // Remove the access token from the local storage
        localStorage.removeItem('accessToken');
        localStorage.removeItem('username');
        // Return the observable
        return of(true);
    }


    check(): Observable<boolean>
    {
        // Check the access token availability
        if ( !this.accessToken )
        {
            return of(false);
        }
        // Check the access token expire date
        if ( AuthUtils.isTokenExpired(this.accessToken) )
        {
            return of(false);
        }
        return of(true);
    }
}
