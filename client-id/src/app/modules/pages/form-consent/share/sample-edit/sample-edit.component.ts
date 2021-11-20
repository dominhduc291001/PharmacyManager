import { Component, ViewEncapsulation, OnInit, Input, AfterContentChecked } from '@angular/core';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';

@Component({
    selector     : 'sample-edit',
    templateUrl  : './sample-edit.component.html',
    styleUrls    : ['../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class SampleEditComponent implements OnInit, AfterContentChecked
{
    @Input()dataPage: FormConsentCompleteView;
    sploreDate: Date = null;
    sploreChargerId: string = '';
    testSploreProcessCode: string = '';

    constructor(){}

    ngOnInit(): void {
    }

    ngAfterContentChecked(): void {
        //Called after every check of the component's or directive's content.
        //Add 'implements AfterContentChecked' to the class.
        this.sploreDate = this.dataPage?.formConsentT?.formConsent?.sploreRceptDe;
        this.sploreChargerId = this.dataPage?.formConsentT?.formConsent?.sploreChargerId;
        this.testSploreProcessCode = this.dataPage?.formConsentT?.formConsent?.testSploreProcessCode;
    }

}
