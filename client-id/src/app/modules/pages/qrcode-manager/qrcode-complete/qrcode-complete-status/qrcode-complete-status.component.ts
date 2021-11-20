/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestCompleteSttSelect } from 'app/core/interfaces/complete-status-select';
import { TestCompleteSttRp } from 'app/core/interfaces/test-complete-status-rp';
import { TestCompleteSttRq } from 'app/core/models/test-complete-status-rq';
import { InspectionCompleteService } from 'app/core/services/inspection-complete.service';
import { QrcodeManagerService } from 'app/core/services/qrcode-manager.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { QrcodeScannerComponent } from '../../share/qrcode-scanner/qrcode-scanner.component';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { ExportQRCodeComplete } from 'app/core/models/export-excel';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'qrcode-complete-status',
    templateUrl: './qrcode-complete-status.component.html',
    styleUrls: ['./qrcode-complete-status.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class QrcodeCompleteStatusComponent implements OnInit {
    spinning = false;
    selectItem: TestCompleteSttSelect;
    tableData: TestCompleteSttRp[];
    searchRq: TestCompleteSttRq = new TestCompleteSttRq();
    indexPage = 1;
    totalPage: number;
    athrzEndDe: Date[] = null;
    expDeDate: Date[] = null;
    sizeDrawer = 720;
    totalCountFinal: number;

    constructor(
        private _testComplete: InspectionCompleteService,
        private _router: Router,
        private route: ActivatedRoute,
        private modalService: NzModalService,
        private _qrcodeService: QrcodeManagerService,
        private message: NzMessageService) { }

    ngOnInit(): void {
        this.spinning = true;

        this._qrcodeService.getQRCodeCompleteList(this.searchRq).subscribe((data) => {
            this.tableData = data;
            if (data.length === 0) {
                this.tableData = [];
                this.totalPage = 0;
                this.totalCountFinal = 0;
            } else {
                this.tableData = data;
                this.totalPage = data[0].totalCount;
                this.totalCountFinal = data[0].totalCount;
            };
            this.spinning = false;
        }, (err) => {
            this.spinning = false;
            this.createMessage('error', '데이터 다운로드 실패');
        });

        this._testComplete.getSelectCompleteListStt().subscribe((data) => {
            this.selectItem = data;
        }, (err) => {
            this.spinning = false;
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

    downloadExcel(): void {
        if (this.expDeDate !== null) {
            this.searchRq.expDe_Start_String = this.expDeDate[0] ?? null;
            this.searchRq.expDe_End_String = this.expDeDate[1] ?? null;
        }
        if (this.athrzEndDe !== null) {
            this.searchRq.athrzEndDe_Start = this.athrzEndDe[0] ?? null;
            this.searchRq.athrzEndDe_End = this.athrzEndDe[1] ?? null;
        }

        this.searchRq.endIndex = this.totalCountFinal;

        this._qrcodeService.getQRCodeCompleteList(this.searchRq).subscribe((data) => {
            this.exportExcel(data);
        }, (err) => {
            this.createMessage('error', '파일 다운로드 실패');
        });
    }

    exportExcel(tableData: any): void {
        if (tableData !== null) {
            // data processing
            const tableDataNew = [];
            tableData.forEach((element) => {
                const itemNew = new ExportQRCodeComplete();
                itemNew.rowNumber = element.rowNumber;
                itemNew.athrzSeCodeName = element.athrzSeCodeName;
                itemNew.athrzRceptNo = element.athrzRceptNo;
                itemNew.entrpsNm = element.entrpsNm;
                if (element.mrnrSeCnt > 0) {
                    itemNew.mrnrSeNmString = element.mrnrSeNm + ' 외 ' + element.mrnrSeCnt;
                } else if (element.mrnrSeCnt === 0) {
                    itemNew.mrnrSeNmString = element.mrnrSeNm;
                }
                itemNew.cnfrmnIssuPrintStrString = element.cnfrmnIssuPrintStr !== '???'
                    ? element.cnfrmnIssuPrintStr : '미신청';
                itemNew.athrzEndDe = element.athrzEndDe;
                tableDataNew.push(itemNew);
            });

            // export to Excel file
            const workbook = new Workbook();
            const worksheet = workbook.addWorksheet('Employee Data');
            const header = ['No.', '구분', '접수번호', '상호명', '계량기종류', '검정담당자', '완료일'];
            const rowHeader = worksheet.addRow(header);
            rowHeader.font = { name: 'Corbel', family: 4, size: 12, underline: 'double', bold: true };
            rowHeader.eachCell((cell, _number) => {
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: '41A5EE' }
                };
                cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            });

            for (const x1 of tableDataNew) {
                const x2 = Object.keys(x1);
                const arrayCol = [];
                for (const y of x2) {
                    arrayCol.push(x1[y]);
                }
                const rowWS = worksheet.addRow(arrayCol);
            }

            worksheet.columns = [{ width: 10 }, { width: 20 }, { width: 30 }, { width: 40 }, { width: 40 }, { width: 15 }, { width: 15 }];
            worksheet.getColumn('A').alignment = { horizontal: 'left' };
            const fname = 'data-qrcode-complete';     // set downloadable file name
            workbook.xlsx.writeBuffer().then((data2) => {   // add data and file name and download
                const blob = new Blob([data2], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                fs.saveAs(blob, fname + '-' + new Date().valueOf() + '.xlsx');
            });
        }
    }

    search(): void {
        this.spinning = true;
        if (this.expDeDate !== null) {
            this.searchRq.expDe_Start_String = this.expDeDate[0] ?? null;
            this.searchRq.expDe_End_String = this.expDeDate[1] ?? null;
        }
        if (this.athrzEndDe !== null) {
            this.searchRq.athrzEndDe_Start = this.athrzEndDe[0] ?? null;
            this.searchRq.athrzEndDe_End = this.athrzEndDe[1] ?? null;
        }

        this._qrcodeService.getQRCodeCompleteList(this.searchRq).subscribe((data) => {
            if (data.length === 0) {
                this.tableData = [];
                this.totalPage = 1;
            } else {
                this.tableData = data;
                this.totalPage = data[0].totalCount;
            };
            this.spinning = false;
        }, (err) => {
            this.spinning = false;
            this.createMessage('error', '실패한 검색');
        });
    }

    pageChange(): void {
        this.spinning = true;
        const start = this.indexPage * 10;
        this.searchRq.startIndex = start - 9;
        this.searchRq.endIndex = start;

        this._qrcodeService.getQRCodeCompleteList(this.searchRq).subscribe((data) => {
            this.tableData = data;
            this.spinning = false;
        }, (err) => {
            this.spinning = false;
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
