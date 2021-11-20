import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';

@Component({
    selector     : 'law-edit',
    templateUrl  : './law-edit.component.html',
    styleUrls    : ['../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class LawEditComponent implements OnInit
{
    @Input()dataPage: FormConsentCompleteView;

    constructor(){}

    ngOnInit(): void {
    }
}
