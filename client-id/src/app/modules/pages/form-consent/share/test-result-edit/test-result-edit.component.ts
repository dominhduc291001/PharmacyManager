import { Component, ViewEncapsulation, OnInit, Input, AfterContentChecked } from '@angular/core';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';

@Component({
    selector     : 'test-result-edit',
    templateUrl  : './test-result-edit.component.html',
    styleUrls    : ['../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class TestResultEditComponent implements OnInit, AfterContentChecked
{
    @Input()dataPage: FormConsentCompleteView;
    testResultPsexamAt: string = '';
    testComptDe: Date = null;

    constructor(){}

    ngOnInit(): void {
    }

    ngAfterContentChecked(): void {
        //Called after every check of the component's or directive's content.
        //Add 'implements AfterContentChecked' to the class.
        this.testResultPsexamAt = this.dataPage?.formConsentT?.formConsent?.testResultPsexamAt;
        this.testComptDe = this.dataPage?.formConsentT?.formConsent?.testComptDe;
    }
}
