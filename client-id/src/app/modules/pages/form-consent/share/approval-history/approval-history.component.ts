import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';

@Component({
    selector: 'approval-history',
    templateUrl: './approval-history.component.html',
    styleUrls: ['../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ApprovalHistoryComponent implements OnInit {
    @Input() dataPage: FormConsentCompleteView;

    constructor() { }

    ngOnInit(): void {
    }
}
