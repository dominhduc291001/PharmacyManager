import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TestCompleteSttSelect } from 'app/core/interfaces/complete-status-select';
import { QrcodeSetting } from 'app/core/models/qrcode-setting';
import { InspectionCompleteService } from 'app/core/services/inspection-complete.service';
import { QrcodeManagerService } from 'app/core/services/qrcode-manager.service';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { QrcodeProgramEditComponent } from '../qrcode-program-edit/qrcode-program-edit.component';

@Component({
    selector: 'qrcode-program-status',
    templateUrl: './qrcode-program-status.component.html',
    styleUrls: ['./qrcode-program-status.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class QrcodeProgramStatusComponent implements OnInit {
    loadingTable = false;
    tableData: QrcodeSetting[];
    searchData: QrcodeSetting = new QrcodeSetting();
    selectItem: TestCompleteSttSelect;
    sizeDrawer = 720;

    constructor(
        private _qrcodeManager: QrcodeManagerService,
        private _testComplete: InspectionCompleteService,
        private drawerService: NzDrawerService,
        private message: NzMessageService) { }

    ngOnInit(): void {
        this.loadingTable = true;

        this._qrcodeManager.selectQRPrintApprove(this.searchData).subscribe((data) => {
            this.tableData = data;
            this.loadingTable = false;
        }, (err) => {
            this.loadingTable = false;
            this.createMessage('error', '데이터 다운로드 실패');
        });

        this._testComplete.getSelectCompleteListStt().subscribe((data) => {
            this.selectItem = data;
        }, (err) => {
            this.loadingTable = false;
            this.createMessage('error', '데이터 다운로드 실패');
        });
    }

    createMessage(type: string, mess: string): void {
        this.message.create(type, mess);
    }

    reponsiveTable(): any {
        if (window.innerWidth < 1080) {
            return { x: '800px' };
        }
        return null;
    }

    search(): void {
        this.loadingTable = true;

        this._qrcodeManager.selectQRPrintApprove(this.searchData).subscribe((data) => {
            this.tableData = data;
            this.loadingTable = false;
        }, (err) => {
            this.loadingTable = false;
            this.createMessage('error', '실패한 검색');
        });
    }

    insertData(): void {
        // eslint-disable-next-line prefer-const
        let result = new QrcodeSetting();
        result.approveValue = 'N';
        result.no = this.tableData.length + 1;
        this.showEdit(result, 'insert');
    }

    showEdit(itemCheck: QrcodeSetting, modeCheck: string): void {
        if (itemCheck !== null && modeCheck !== null) {
            if (window.innerWidth >= 768) {
                this.sizeDrawer = 730;
            };
            if (window.innerWidth < 768 && window.innerWidth >= 600) {
                this.sizeDrawer = 580;
            }
            if (window.innerWidth < 600) {
                this.sizeDrawer = 350;
            }

            const drawerRef = this.drawerService.create<QrcodeProgramEditComponent, { dataMain: QrcodeSetting; modeType: string; selectList: TestCompleteSttSelect }>({
                nzTitle: null,
                nzContent: QrcodeProgramEditComponent,
                nzWidth: this.sizeDrawer,
                nzContentParams: {
                    dataMain: itemCheck,
                    modeType: modeCheck,
                    selectList: this.selectItem
                }
            });

            drawerRef.open();

            drawerRef.afterClose.subscribe(() => {
                this.loadingTable = true;
                this._qrcodeManager.selectQRPrintApprove(this.searchData).subscribe((data) => {
                    this.tableData = data;
                    this.loadingTable = false;
                }, (err) => {
                    this.loadingTable = false;
                    this.createMessage('error', '데이터 다운로드 실패');
                });
            });
        }
    }
}
