/* eslint-disable prefer-const */
import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';
import { FrmProtableWhealLoad } from 'app/core/models/form-consent-popup/frm-protable-wheal-load';
import { FrmPopupRq } from 'app/core/models/frm-popup-rq';
import { FrmPopupService } from 'app/core/services/frm-popup.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
@Component({
    selector: 'frm-protable-wheal-load',
    templateUrl: './frm-protable-wheal-load.component.html',
    styleUrls: ['../../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class FrmProtableWhealLoadComponent implements OnInit, AfterContentInit {
    @Input() dataMain: FormConsentCompleteView;
    dataProtableWhealLoad: FrmProtableWhealLoad = new FrmProtableWhealLoad();
    isSpin = false;

    constructor(private _frm: FrmPopupService, private drawerRef: NzDrawerRef<string[]>) { }

    ngOnInit(): void {
    }

    goView(ptbWhLoadScSn: any): void {
        if (ptbWhLoadScSn !== null) {
            let result: FrmPopupRq = new FrmPopupRq();
            result.ptbWhLoadScSn = ptbWhLoadScSn;
            result.fomConfmSn = this.dataMain.formConsentT.formConsent.fomConfmSn;
            this.isSpin = true;
            this._frm.frmConsentProtableWhealLoadViewPopup(result).subscribe((data) => {
                this.dataProtableWhealLoad = data;
                this.isSpin = false;
            }, (err) => { this.isSpin = false; });
        }
    }

    ngAfterContentInit(): void {
        // Called after ngOnInit when the component's or directive's content has been initialized.
        // Add 'implements AfterContentInit' to the class.
        // eslint-disable-next-line prefer-const
        let result: FrmPopupRq = new FrmPopupRq();
        result.fomConfmSn = this.dataMain.formConsentT.formConsent.fomConfmSn;
        this.isSpin = true;
        this._frm.frmConsentProtableWhealLoadViewPopup(result).subscribe((data) => {
            this.dataProtableWhealLoad = data;
            this.isSpin = false;
        }, (err) => { this.isSpin = false; });
    }

    close(): void {
        this.drawerRef.close('ok');
    }
}
