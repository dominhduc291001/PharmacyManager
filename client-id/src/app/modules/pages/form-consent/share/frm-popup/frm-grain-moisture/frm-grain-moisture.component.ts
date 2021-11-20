/* eslint-disable prefer-const */
import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';
import { FrmGrainMoisture } from 'app/core/models/form-consent-popup/frm-grain-moisture';
import { FrmPopupRq } from 'app/core/models/frm-popup-rq';
import { FrmPopupService } from 'app/core/services/frm-popup.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
@Component({
    selector: 'frm-grain-moisture',
    templateUrl: './frm-grain-moisture.component.html',
    styleUrls: ['../../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class FrmGrainMoistureComponent implements OnInit, AfterContentInit {
    @Input() dataMain: FormConsentCompleteView;
    dataGrainMoisture: FrmGrainMoisture = new FrmGrainMoisture();
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
        this._frm.formConsentGrainMoistureViewPopup(result).subscribe((data) => {
            this.dataGrainMoisture = data;
            this.isSpin = false;
        }, (err) => { this.isSpin = false; });
    }

    goView(fmsGrainMstureMetersSn: number): void {
        if (fmsGrainMstureMetersSn !== null) {
            let result2: FrmPopupRq = new FrmPopupRq();
            result2.fmsGrainMstureMetersSn = fmsGrainMstureMetersSn;
            this.isSpin = true;
            result2.fomConfmSn = this.dataMain.formConsentT.formConsent.fomConfmSn;
            this._frm.formConsentGrainMoistureViewPopup(result2).subscribe((data) => {
                this.dataGrainMoisture = data;
                this.isSpin = false;
            }, (err) => { this.isSpin = false; });
        }
    }

    close(): void {
        this.drawerRef.close('ok');
    }
}
