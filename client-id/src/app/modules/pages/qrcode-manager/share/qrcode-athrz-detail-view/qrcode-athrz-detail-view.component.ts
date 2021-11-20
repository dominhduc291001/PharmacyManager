import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InspectionDetailList } from 'app/core/interfaces/athrz-confm-issu';
import { ProcessCompleteView } from 'app/core/interfaces/process-complete-view';

@Component({
    selector: 'qrcode-athrz-detail-view',
    templateUrl: './qrcode-athrz-detail-view.component.html',
    styleUrls: ['../qrcode-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class QrcodeAthrzDetailViewComponent implements OnInit {
    @Input() dataPage: ProcessCompleteView;

    constructor(private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit(): void {
    }

    athrzExpDetail(item: InspectionDetailList): any {
        // eslint-disable-next-line prefer-const
        let result = '';
        if (item !== null) {
            if (item?.athrzExpDe !== null) {
                result = `${item?.athrzExpDe.substr(0, 4)}-${item?.athrzExpDe.substr(4, 2)}-30(31)`;
            }
        }
        return result;
    }

    routerComplete(item: number): void {
        if (item !== null) {
            if (item === 0) {
                alert('형식승인정보가 존재하지 않습니다.');
            } else {
                this.router.navigate([`/KTC/FormConsent/FormConsentComplete/status/detail/${item}`]);
            }
        }
    }
}
