import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { TestCompleteSttSelect } from 'app/core/interfaces/complete-status-select';
import { QrcodeSetting } from 'app/core/models/qrcode-setting';
import { QrcodeManagerService } from 'app/core/services/qrcode-manager.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
    selector: 'qrcode-program-edit',
    templateUrl: './qrcode-program-edit.component.html',
    styleUrls: ['./qrcode-program-edit.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class QrcodeProgramEditComponent implements OnInit {
    @Input() dataMain: QrcodeSetting;
    @Input() modeType: string;
    @Input() selectList: TestCompleteSttSelect;
    isSpin = false;

    constructor(private _qrcodeManager: QrcodeManagerService, private drawerRef: NzDrawerRef<string[]>) { }

    ngOnInit(): void {
    }

    validateData(): any {
        if (this.dataMain.athrzChargerID === null || this.dataMain.athrzChargerID === '') {
            alert('담당자명을 요청합니다.');
            return false;
        }
        if (this.dataMain.ktcBrffcCode === null || this.dataMain.ktcBrffcCode === '') {
            alert('검정지사요청된다.');
            return false;
        }
        if (this.dataMain.qrPrintpcMac === null || this.dataMain.qrPrintpcMac === '') {
            alert('인증PC정보를 요청합니다.');
            return false;
        }
        return true;
    }

    checkData(): void {
        for (const item of this.selectList.ktcBrffcCodeList) {
            if (this.dataMain.ktcBrffcCode === item.bsisCode) {
                this.dataMain.ktcBrffcCodeName = item.bsisCodeNm;
            }
        }

        for (const item of this.selectList.athrzChargerList) {
            if (this.dataMain.athrzChargerID === item.userId) {
                this.dataMain.athrzChargerName = `[${item.deptNm}]${item.userNm}`;
            }
        }
    }

    checkMode(): void {
        if (this.modeType === 'update') {
            this.updateData();
        } else {
            this.insertData();
        }
    }

    updateData(): void {
        if (this.validateData() === true) {
            if (this.dataMain.approveDate === null && this.dataMain.approveValue === 'Y') {
                this.dataMain.approveDate = new Date();
            }

            this.checkData();
            this.isSpin = true;

            this._qrcodeManager.updateQRPrintApprove(this.dataMain).subscribe((data) => {
                this.isSpin = false;
                alert('업데이트 성공.');
                this.close();
            }, (err) => {
                this.isSpin = false;
                alert('업데이트가 실패');
            });
        }
    }

    insertData(): void {
        if (this.validateData() === true) {
            if (this.dataMain.approveValue === 'Y') {
                this.dataMain.approveDate = new Date();
            }

            this.checkData();
            this.isSpin = true;

            this._qrcodeManager.updateQRPrintApprove(this.dataMain).subscribe((data) => {
                this.isSpin = false;
                alert('업데이트 성공.');
                this.close();
            }, (err) => {
                this.isSpin = false;
                alert('업데이트가 실패');
            });
        }
    }

    close(): void {
        this.drawerRef.close();
    }
}
