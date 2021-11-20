import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';
import { UrlDefault } from 'app/shared/urlDefault';

@Component({
    selector: 'approval-information',
    templateUrl: './approval-information.component.html',
    styleUrls: ['../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ApprovalInformationComponent implements OnInit {
    @Input() dataPage: FormConsentCompleteView;

    constructor() { }

    ngOnInit(): void {
    }

    fileDown(atchmnflClCode: string, filePath: string, downFileName: string): any {
        if (atchmnflClCode !== null || filePath !== null || downFileName !== null) {
            const url = '/Home/FileDownLoad?atchmnflClCode=' + atchmnflClCode + '&strRealFileName=' + filePath + '&strOrginalFileName=' + downFileName;
            window.open(UrlDefault._url + url, '_blank');
        } else {
            return false;
        }
    }
}
