import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UrlDefault } from 'app/shared/urlDefault';
import { Thuoc } from '../models/thuoc';
import { NguoiDung } from '../models/nguoi-dung';

@Injectable({
  providedIn: 'root'
})
export class NguoiDungService {
  private httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json'
    }),
  };
  constructor(private router: Router, private httpClient: HttpClient) { }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public AllUsers(): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/User/AllUsers`;
    return this.httpClient
      .get<NguoiDung>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any{
    return throwError(error.status);
  }
}
