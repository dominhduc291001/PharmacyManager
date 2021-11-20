import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';


@Component({
    selector     : 'reissue-view',
    templateUrl  : './reissue-view.component.html',
    styleUrls    : ['../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ReissueViewComponent implements OnInit
{
    @Input()dataPage: FormConsentCompleteView;

    constructor(){}

    ngOnInit(): void {
    }
}
