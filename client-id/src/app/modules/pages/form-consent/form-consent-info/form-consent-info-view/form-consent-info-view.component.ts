import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';
import { FormConsentService } from 'app/core/services/form-consent.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'form-consent-info-view',
    templateUrl: './form-consent-info-view.component.html',
    styleUrls: ['./form-consent-info-view.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ConsentInfoViewComponent implements OnInit {
    thisFomConfmSn = null;
    isSpinning = false;
    private sub: any;
    // eslint-disable-next-line @typescript-eslint/member-ordering
    dataMain: FormConsentCompleteView;

    constructor(
        private route: ActivatedRoute,
        private _formConsent: FormConsentService, private message: NzMessageService) {
    }

    ngOnInit(): void {
        this.thisFomConfmSn = this.route.snapshot.paramMap.get('fomConfmSn');
        this.isSpinning = true;

        this.sub = this._formConsent.formConsentInfoView(this.thisFomConfmSn).subscribe((data: FormConsentCompleteView) => {
            this.dataMain = data;
            this.isSpinning = false;
        }, (err) => {
            this.isSpinning = false;
            this.createMessage('error', '데이터 다운로드 실패');
        });
    }

    createMessage(type: string, mess: string): void {
        this.message.create(type, mess);
    }
}
