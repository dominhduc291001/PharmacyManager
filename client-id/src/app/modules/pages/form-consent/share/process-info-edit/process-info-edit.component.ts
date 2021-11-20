import { Component, ViewEncapsulation, OnInit, Input, AfterContentChecked } from '@angular/core';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';


@Component({
    selector     : 'process-info-edit',
    templateUrl  : './process-info-edit.component.html',
    styleUrls    : ['../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ProcessInfoEditComponent implements OnInit, AfterContentChecked
{
    @Input()dataPage: FormConsentCompleteView;
    rcepde: Date = null;
    ceratsPblictePrarnDe: Date = null;
    rceptConfmerId: string = '';
    fomConfmChargerId: string = '';
    fomConfmRspnberId: string = '';

    constructor(){}

    ngOnInit(): void {
    }

    ngAfterContentChecked(): void {
        //Called after every check of the component's or directive's content.
        //Add 'implements AfterContentChecked' to the class.
        if(this.dataPage?.formConsentT?.formConsent?.rceptConfmDt?.toString() === '0001-01-01T00:00:00'){
            this.dataPage.formConsentT.formConsent.rceptConfmDt = null;
        }
        this.rcepde = this.dataPage?.formConsentT?.formConsent?.rceptDe;
        this.ceratsPblictePrarnDe = this.dataPage?.formConsentT?.formConsent?.ceratsPblictePrarnDe;
        this.rceptConfmerId = this.dataPage?.formConsentT?.formConsent?.rceptConfmerId;
        this.fomConfmChargerId = this.dataPage?.formConsentT?.formConsent?.fomConfmChargerId;
        this.fomConfmRspnberId = this.dataPage?.formConsentT?.formConsent?.fomConfmRspnberId;
    }
}
