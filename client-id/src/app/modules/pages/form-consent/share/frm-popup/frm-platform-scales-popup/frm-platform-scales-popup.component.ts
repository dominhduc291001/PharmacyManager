/* eslint-disable prefer-const */
import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';
import { FrmPlatformScale } from 'app/core/models/form-consent-popup/frm-platform-scales';
import { FrmPopupRq } from 'app/core/models/frm-popup-rq';
import { FrmPopupService } from 'app/core/services/frm-popup.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
@Component({
    selector: 'frm-platform-scales-popup',
    templateUrl: './frm-platform-scales-popup.component.html',
    styleUrls: ['../../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class FrmPlatformScalesPopupComponent implements OnInit, AfterContentInit {
    @Input() dataMain: FormConsentCompleteView;
    dataPlatform: FrmPlatformScale = new FrmPlatformScale();
    isSpin = false;

    constructor(private _frm: FrmPopupService, private drawerRef: NzDrawerRef<string[]>) { }

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        // eslint-disable-next-line prefer-const
        let result: FrmPopupRq = new FrmPopupRq();
        this.isSpin = true;
        result.fomConfmSn = this.dataMain.formConsentT.formConsent.fomConfmSn;
        this._frm.frmConsentPlatformScalesViewPopup(result).subscribe((data) => {
            this.dataPlatform = data;
            this.isSpin = false;
        }, (err) => { this.isSpin = false; });
    }

    goView(fomConfmDetailSn: any): void {
        if (fomConfmDetailSn !== null) {
            let result: FrmPopupRq = new FrmPopupRq();
            result.fomConfmDetailSn = fomConfmDetailSn;
            result.fomConfmSn = this.dataMain.formConsentT.formConsent.fomConfmSn;
            this.isSpin = true;
            this._frm.frmConsentPlatformScalesViewPopup(result).subscribe((data) => {
                this.dataPlatform = data;
                this.isSpin = false;
            }, (err) => { this.isSpin = false; });
        }
    }

    close(): void {
        this.drawerRef.close('ok');
    }
}
