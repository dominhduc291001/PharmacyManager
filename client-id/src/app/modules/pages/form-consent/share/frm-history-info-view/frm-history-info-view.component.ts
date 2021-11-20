import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';

@Component({
    selector: 'frm-history-info-view',
    templateUrl: './frm-history-info-view.component.html',
    styleUrls: ['../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class FrmHistoryInfoViewComponent implements OnInit {
    @Input() dataPage: FormConsentCompleteView;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    goToItems(variable: any): void {
        if (variable !== null) {
            const currentUrl = `/KTC/FormConsent/FormConsentInfo/status/detail/${variable}`;
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate([currentUrl]);
            });
        }
    }

    reponsiveTable(): any {
        if (window.innerWidth < 1080) {
            return { x: '1000px' };
        }
        return null;
    }
}
