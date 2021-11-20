import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit, AfterContentChecked } from '@angular/core';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';


@Component({
    selector     : 'gauge-edit',
    templateUrl  : './gauge-edit.component.html',
    styleUrls    : ['../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class GaugeEditViewComponent implements OnInit, AfterContentChecked
{
    @Input()dataPage: FormConsentCompleteView;
    mrnrCode: string = '';

    constructor(){}

    ngOnInit(): void {
    }

    ngAfterContentChecked(): void {
        //Called after every check of the component's or directive's content.
        //Add 'implements AfterContentChecked' to the class.
        this.mrnrCode = this.dataPage?.formConsentT?.formConsent?.mrnrSeCode;
    }
}
