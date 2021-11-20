import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';
import { FrmGrarulerTanVolLol } from 'app/core/models/form-consent-popup/frm-graruler-tan-vol-lol';
import { FrmPopupRq } from 'app/core/models/frm-popup-rq';
import { FrmPopupService } from 'app/core/services/frm-popup.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
@Component({
    selector: 'frm-graruler-tan-vol-lol',
    templateUrl: './frm-graruler-tan-vol-lol.component.html',
    styleUrls: ['../../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class FrmGrarulerTanVolLolComponent implements OnInit, AfterContentInit {
    @Input() dataMain: FormConsentCompleteView;
    dataGrarulerTanVolLol: FrmGrarulerTanVolLol = new FrmGrarulerTanVolLol();
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
        this._frm.formConsentGrarulerTanVolLolViewPopup(result).subscribe((data) => {
            this.dataGrarulerTanVolLol = data;
            this.isSpin = false;
        }, (err) => { this.isSpin = false; });
    }

    close(): void {
        this.drawerRef.close('ok');
    }
}
