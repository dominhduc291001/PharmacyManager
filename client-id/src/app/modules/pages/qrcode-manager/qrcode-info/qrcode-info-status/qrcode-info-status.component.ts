import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoListRp } from 'app/core/interfaces/info-list-rp';
import { TestProcessSttSelect } from 'app/core/interfaces/test-process-status-select';
import { InfoListRq } from 'app/core/models/info-list-rq';
import { InspectionInfoService } from 'app/core/services/inspection-info.service';
import { QrcodeManagerService } from 'app/core/services/qrcode-manager.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { QrcodeScannerComponent } from '../../share/qrcode-scanner/qrcode-scanner.component';

@Component({
    selector: 'qrcode-info-status',
    templateUrl: './qrcode-info-status.component.html',
    styleUrls: ['./qrcode-info-status.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class QrcodeInfoStatusComponent implements OnInit {
    selectItem: TestProcessSttSelect;
    tableData: InfoListRp = new InfoListRp();
    searchRq: InfoListRq = new InfoListRq();
    indexPage = 1;
    totalPage: number;
    loadingTable = false;
    athrzEndDe: Date[] = null;
    expDeDate: Date[] = null;
    athrzHopeDe: Date[] = null;
    sizeDrawer = 720;

    constructor(
        private _infoList: InspectionInfoService,
        private modalService: NzModalService,
        private _qrcodeService: QrcodeManagerService,
        private _router: Router,
        private route: ActivatedRoute,
        private message: NzMessageService) { }

    ngOnInit(): void {
        this.loadingTable = true;

        this._qrcodeService.getQRCodeInfoList(this.searchRq).subscribe((data) => {
            this.tableData = data;
            this.totalPage = data.inspectionInfoList[0].totalCount;
            this.loadingTable = false;
        }, (err) => {
            this.loadingTable = false;
            this.createMessage('error', '데이터 다운로드 실패');
        });

        this._infoList.getSelectInfoList().subscribe((data) => {
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
            return { x: '1200px' };
        }
        return null;
    }

    search(): void {
        this.loadingTable = true;
        if (this.athrzEndDe !== null) {
            this.searchRq.athrzEndDe_Start = this.athrzEndDe[0] ?? null;
            this.searchRq.athrzEndDe_End = this.athrzEndDe[1] ?? null;
        }
        if (this.athrzHopeDe !== null) {
            this.searchRq.athrzHopeDe_Start = this.athrzHopeDe[0] ?? null;
            this.searchRq.athrzHopeDe_End = this.athrzHopeDe[1] ?? null;
        }
        if (this.expDeDate !== null) {
            this.searchRq.expDe_Start_String = this.expDeDate[0] ?? null;
            this.searchRq.expDe_End_String = this.expDeDate[1] ?? null;
        }

        this._infoList.getInspectionInfo(this.searchRq).subscribe((data) => {
            if (data.inspectionInfoList.length === 0) {
                this.tableData.inspectionInfoList = [];
                this.totalPage = 1;
            } else {
                this.tableData = data;
                this.totalPage = this.tableData.inspectionInfoList[0].totalCount;
            };
            this.loadingTable = false;
        }, (err) => {
            this.loadingTable = false;
            this.createMessage('error', '실패한 검색');
        });
    }

    pageChange(): void {
        this.loadingTable = true;
        const start = this.indexPage * 10;
        this.searchRq.startIndex = start - 9;
        this.searchRq.endIndex = start;

        this._infoList.getInspectionInfo(this.searchRq).subscribe((data) => {
            this.tableData = data;
            this.loadingTable = false;
        }, (err) => {
            this.loadingTable = false;
            this.createMessage('error', '페이지 변경 실패');
        });
    }

    showScanQr(): void {
        if (window.innerWidth >= 768) {
            this.sizeDrawer = 1080;
        };
        if (window.innerWidth < 768 && window.innerWidth >= 600) {
            this.sizeDrawer = 580;
        }
        if (window.innerWidth < 600) {
            this.sizeDrawer = 350;
        }

        const modalScan = this.modalService.create({
            nzTitle: null,
            nzContent: QrcodeScannerComponent,
            nzWidth: this.sizeDrawer,
            nzStyle: { top: '20px' },
            nzOkDisabled: true,
            nzCancelDisabled: true,
            nzFooter: null
        });

        modalScan.afterClose.subscribe(async (data: string) => {
            if (data !== '') {
                const resultArr = data.split('/');
                const qrNum = resultArr[resultArr.length - 1];
                if (qrNum !== '') {
                    const dataResult = await this._qrcodeService.searchQRCode(qrNum).toPromise();
                    if (dataResult === 0) {
                        alert('스캔에 실패했습니다. 다시 시도해 주세요.');
                    } else {
                        this._router.navigate([`view/${dataResult}`], { relativeTo: this.route });
                    }
                } else {
                    alert('스캔에 실패했습니다. 다시 시도해 주세요.');
                }
            }
        });
    }
}
