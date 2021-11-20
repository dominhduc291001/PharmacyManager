import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';
import { UrlDefault } from 'app/shared/urlDefault';

@Component({
    selector     : 'law-view-info',
    templateUrl  : './law-view-info.component.html',
    styleUrls    : ['../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class LawViewInfoComponent implements OnInit
{
    @Input()dataPage: FormConsentCompleteView;

    constructor(){}

    ngOnInit(): void {
    }
}
