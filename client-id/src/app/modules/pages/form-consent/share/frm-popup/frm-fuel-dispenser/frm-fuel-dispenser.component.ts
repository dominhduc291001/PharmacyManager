import {
    Component,
    ViewEncapsulation,
    OnInit,
    Input,
    AfterContentInit,
} from '@angular/core';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';
import { FrmFuelDispenser } from 'app/core/models/form-consent-popup/frm-fuel-dispenser';
import { FrmPopupRq } from 'app/core/models/frm-popup-rq';
import { FrmPopupService } from 'app/core/services/frm-popup.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
@Component({
    selector: 'frm-fuel-dispenser',
    templateUrl: './frm-fuel-dispenser.component.html',
    styleUrls: ['../../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class FrmFuelDispenserComponent implements OnInit, AfterContentInit {
    @Input() dataMain: FormConsentCompleteView;
    dataFuelDispenser: FrmFuelDispenser = new FrmFuelDispenser();
    isSpin = false;

    constructor(
        private _frm: FrmPopupService,
        private drawerRef: NzDrawerRef<string[]>
    ) { }

    ngOnInit(): void { }

    ngAfterContentInit(): void {
        // Called after ngOnInit when the component's or directive's content has been initialized.
        // Add 'implements AfterContentInit' to the class.
        // eslint-disable-next-line prefer-const
        let result: FrmPopupRq = new FrmPopupRq();
        this.isSpin = true;
        result.fomConfmSn = this.dataMain.formConsentT.formConsent.fomConfmSn;
        this._frm.formConsentFuelDispenserViewPopup(result).subscribe(
            (data) => {
                this.dataFuelDispenser = data;
                this.isSpin = false;
            },
            (err) => {
                this.isSpin = false;
            }
        );
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    goView(FueldispenserSn: number): void {
        if (FueldispenserSn !== null) {
            const result2: FrmPopupRq = new FrmPopupRq();
            result2.fueldispenserSn = FueldispenserSn;
            this.isSpin = true;
            result2.fomConfmSn = this.dataMain.formConsentT.formConsent.fomConfmSn;
            this._frm.formConsentFuelDispenserViewPopup(result2).subscribe(
                (data) => {
                    this.dataFuelDispenser = data;
                    this.isSpin = false;
                },
                (err) => {
                    this.isSpin = false;
                }
            );
        }
    }

    close(): void {
        this.drawerRef.close('ok');
    }
}
