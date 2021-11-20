import { Component, ViewEncapsulation, OnInit, Input, AfterContentChecked } from '@angular/core';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';

@Component({
    selector: 'approval-request',
    templateUrl: './approval-request.component.html',
    styleUrls: ['../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ApprovalRequestComponent implements OnInit, AfterContentChecked {
    @Input() dataPage: FormConsentCompleteView;
    fomConfmProcessSttusName: string = '';

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterContentChecked(): void {
        //Called after every check of the component's or directive's content.
        //Add 'implements AfterContentChecked' to the class.
        if (this.dataPage?.formConsentT?.formConsent?.registSeCode === 'AB003004' && this.dataPage?.formConsentT?.formConsent?.fomConfmProcessSttusCode === 'AB007009') {
            this.fomConfmProcessSttusName = '기재사항변경';
        } else if (this.dataPage?.formConsentT?.formConsent?.registSeCode === 'AB003005' && this.dataPage?.formConsentT?.formConsent?.fomConfmProcessSttusCode === 'AB007009') {
            this.fomConfmProcessSttusName = '계량기 양수처리';
        } else {
            this.fomConfmProcessSttusName = this.dataPage?.formConsentT?.formConsent?.fomConfmProcessSttusCodeName;
        }
        if (this.dataPage?.formConsentT?.formConsent?.isReIssueExist === true) {
            this.fomConfmProcessSttusName += ' [재발급신청]';
        }
    }
}
