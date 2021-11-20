import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UrlDefault{
    static _url: string = 'https://metrology.ktc.re.kr';
    // static _apiServer: string = 'https://localhost:5001';    // debug
    static _apiServer: string = 'https://api.ktc.thlone.vn';    // công ty
    // static _apiServer: string = 'https://qr.worknit.kr';    // khách hàng
}
