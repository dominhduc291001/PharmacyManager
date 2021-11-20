import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';
import { UrlDefault } from 'app/shared/urlDefault';

@Component({
    selector     : 'test-result-view',
    templateUrl  : './test-result-view.component.html',
    styleUrls    : ['../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class TestResultViewComponent implements OnInit
{
    @Input()dataPage: FormConsentCompleteView;
    userOnline = '';

    constructor(private _auth: AuthService){}

    ngOnInit(): void {
        this.userOnline = this._auth.userOnl;
    }

    fileDown(atchmnflClCode: string, filePath: string, downFileName: string): any{
        if(atchmnflClCode === null || filePath === null ||  downFileName === null){
            return false;
        }
        const url =  '/Home/FileDownLoad?atchmnflClCode=' + atchmnflClCode + '&strRealFileName=' + filePath + '&strOrginalFileName=' + downFileName;
        window.open(UrlDefault._url + url, '_blank');
    }

}
