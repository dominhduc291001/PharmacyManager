import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';
import { UrlDefault } from 'app/shared/urlDefault';


@Component({
    selector     : 'issue-info',
    templateUrl  : './issue-info.component.html',
    styleUrls    : ['../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class IssueInfoViewComponent implements OnInit
{
    @Input()dataPage: FormConsentCompleteView;

    constructor(){}

    ngOnInit(): void {
    }

    fileDown(atchmnflClCode: string, filePath: string, downFileName: string): any{
        if(atchmnflClCode === null || filePath === null ||  downFileName === null){
            return false;
        }
        const url =  '/Home/FileDownLoad?atchmnflClCode=' + atchmnflClCode + '&strRealFileName=' + filePath + '&strOrginalFileName=' + downFileName;
        window.open(UrlDefault._url + url, '_blank');
    }
}
