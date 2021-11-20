import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';
import { FormConsentService } from 'app/core/services/form-consent.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'form-consent-request-view',
    templateUrl: './form-consent-request-view.component.html',
    styleUrls: ['./form-consent-request-view.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ConsentRequestViewComponent implements OnInit {
    thisFomConfmSn = null;
    isSpinning = false;
    dataMain: FormConsentCompleteView;
    isReIssueExist = false;

    constructor(
        private route: ActivatedRoute,
        private _formConsent: FormConsentService,
        private message: NzMessageService) { }

    ngOnInit(): void {
        this.thisFomConfmSn = this.route.snapshot.paramMap.get('fomConfmSn');
        this.isSpinning = true;

        this._formConsent.formConsentRequestView(this.thisFomConfmSn).subscribe((data: FormConsentCompleteView) => {
            this.dataMain = data;
            this.checkIssu(data);
            this.isSpinning = false;
        }, (err) => {
            this.isSpinning = false;
            this.createMessage('error', '데이터 다운로드 실패');
        });
    }

    createMessage(type: string, mess: string): void {
        this.message.create(type, mess);
    }

    checkIssu(listData: FormConsentCompleteView): void {
        for (const item of listData.formConsentT.fomConfmProcessHistList) {
            if (item.fomConfmProcessSttusCode === 'AB007021') {
                this.isReIssueExist = true;
            }
        }
    }
}
