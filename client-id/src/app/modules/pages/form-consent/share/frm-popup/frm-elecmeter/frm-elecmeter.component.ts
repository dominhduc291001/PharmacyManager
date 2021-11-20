import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';
import { FrmElecmeter } from 'app/core/models/form-consent-popup/frm-elecmeter';
import { FrmPopupRq } from 'app/core/models/frm-popup-rq';
import { FrmPopupService } from 'app/core/services/frm-popup.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
@Component({
    selector: 'frm-elecmeter',
    templateUrl: './frm-elecmeter.component.html',
    styleUrls: ['../../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class FrmElecmeterComponent implements OnInit, AfterContentInit {
    @Input() dataMain: FormConsentCompleteView;
    dataElecmeter: FrmElecmeter = new FrmElecmeter();
    isSpin = false;

    constructor(private _frm: FrmPopupService, private drawerRef: NzDrawerRef<string[]>) { }

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        // Called after ngOnInit when the component's or directive's content has been initialized.
        // Add 'implements AfterContentInit' to the class.
        // eslint-disable-next-line prefer-const
        let result: FrmPopupRq = new FrmPopupRq();
        this.isSpin = true;
        result.fomConfmSn = this.dataMain.formConsentT.formConsent.fomConfmSn;
        this._frm.formConsentElecmeterViewPopup(result).subscribe((data) => {
            this.dataElecmeter = data;
            this.isSpin = false;
        }, (err) => { this.isSpin = false; });
    }

    close(): void {
        this.drawerRef.close('ok');
    }
}
