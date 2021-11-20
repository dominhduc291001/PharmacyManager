import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';
import { FrmLpgDispenser } from 'app/core/models/form-consent-popup/frm-lpg-dispenser';
import { FrmPopupRq } from 'app/core/models/frm-popup-rq';
import { FrmPopupService } from 'app/core/services/frm-popup.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
@Component({
    selector: 'frm-lpg-dispenser',
    templateUrl: './frm-lpg-dispenser.component.html',
    styleUrls: ['../../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class FrmLpgDispenserComponent implements OnInit, AfterContentInit {
    @Input() dataMain: FormConsentCompleteView;
    dataLpgDispenser: FrmLpgDispenser = new FrmLpgDispenser();
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
        this._frm.formConsentLpgDispenserViewPopup(result).subscribe((data) => {
            this.dataLpgDispenser = data;
            this.isSpin = false;
        }, (err) => { this.isSpin = false; });
    }

    goView(lpgdispenserSn: number): void {
        if (lpgdispenserSn !== null) {
            // eslint-disable-next-line prefer-const
            let result2: FrmPopupRq = new FrmPopupRq();
            result2.lpgdispenserSn = lpgdispenserSn;
            this.isSpin = true;
            result2.fomConfmSn = this.dataMain.formConsentT.formConsent.fomConfmSn;
            this._frm.formConsentLpgDispenserViewPopup(result2).subscribe((data) => {
                this.dataLpgDispenser = data;
                this.isSpin = false;
            }, (err) => { this.isSpin = false; });
        }
    }

    close(): void {
        this.drawerRef.close('ok');
    }
}
