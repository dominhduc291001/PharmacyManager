/* eslint-disable prefer-const */
import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';
import { FrmElementsWater } from 'app/core/models/form-consent-popup/frm-elements-water';
import { FrmPopupRq } from 'app/core/models/frm-popup-rq';
import { FrmPopupService } from 'app/core/services/frm-popup.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
@Component({
    selector: 'frm-elements-water',
    templateUrl: './frm-elements-water.component.html',
    styleUrls: ['../../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class FrmElementsWaterComponent implements OnInit, AfterContentInit {
    @Input() dataMain: FormConsentCompleteView;
    dataElementsWater: FrmElementsWater = new FrmElementsWater();
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
        this._frm.formConsentElementsWaterPopup(result).subscribe((data) => {
            this.dataElementsWater = data;
            this.dataElementsWater.fmsElementsWaterT = this.dataElementsWater.fmsElementsWaterTList[0];
            this.isSpin = false;
        }, (err) => { this.isSpin = false; });
    }

    goView(elementsSn: number): void {
        if (elementsSn !== null) {
            let result: FrmPopupRq = new FrmPopupRq();
            result.elementsSn = elementsSn;
            this.isSpin = true;
            result.fomConfmSn = this.dataMain.formConsentT.formConsent.fomConfmSn;
            this._frm.formConsentElementsWaterPopup(result).subscribe((data) => {
                this.dataElementsWater = data;
                this.isSpin = false;
            }, (err) => { this.isSpin = false; });
        }
    }

    close(): void {
        this.drawerRef.close('ok');
    }
}
