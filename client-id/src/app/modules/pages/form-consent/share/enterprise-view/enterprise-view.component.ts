import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit, AfterContentChecked } from '@angular/core';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';

@Component({
    selector: 'enterprise-view',
    templateUrl: './enterprise-view.component.html',
    styleUrls: ['../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class EnterPriseViewComponent implements OnInit {
    @Input() dataPage: FormConsentCompleteView;
    constructor() { }
    ngOnInit(): void {
    }

    bizrnoStr(item: string): any {
        // eslint-disable-next-line prefer-const
        let result = '';
        if (item !== null) {
            result = item.substr(0, 3) + '-' + item.substr(3, 2) + '-' + item.substr(5, 5);
        }
        return result;
    }

    bplcDetail(zip: string, bass: string, detail: string): any {
        // eslint-disable-next-line prefer-const
        let result = '';
        if (zip !== null) {
            if (zip.length === 5) {
                result += '(' + zip + ') ';
            } else if (zip.length === 6) {
                result += '(' + zip.substr(0, 3) + '-' + zip.substr(3, 3) + ') ';
            }
        }
        result += bass + detail;
        return result;
    }
}
