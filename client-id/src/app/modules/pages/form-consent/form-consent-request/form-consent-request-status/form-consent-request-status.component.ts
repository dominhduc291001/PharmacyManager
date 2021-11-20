import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { DdlFormConsentComplete } from 'app/core/interfaces/ddl-form-consent-complete';
import { formConsentData } from 'app/core/interfaces/form-consent-complete-rp';
import { FormConsentRequestRq } from 'app/core/models/form-consent-request-rq';
import { FormConsentService } from 'app/core/services/form-consent.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'form-consent-request-status',
    templateUrl: './form-consent-request-status.component.html',
    styleUrls: ['./form-consent-request-status.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ConsentRequestStatusComponent implements OnInit {
    indexPage = 1;
    totalPage: number;
    loadingTable = false;
    tableData: formConsentData[] = [];
    searchRq: FormConsentRequestRq = new FormConsentRequestRq();
    selectList: DdlFormConsentComplete;
    confmDe: Date[] = null;

    constructor(private _consent: FormConsentService, private message: NzMessageService) { }

    ngOnInit(): void {
        this.loadingTable = true;

        this._consent.formConsentRequestList(this.searchRq).subscribe((data: formConsentData[]) => {
            this.tableData = data;
            this.totalPage = data[0].totalCount;
            this.loadingTable = false;
        }, (err) => {
            this.loadingTable = false;
            this.createMessage('error', '데이터 다운로드 실패');
        });

        this._consent.ddlFormConsentCompleteList().subscribe((data) => {
            this.selectList = data;
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
            return { x: '1000px' };
        }
        return null;
    }

    search(): void {
        this.loadingTable = true;
        if (this.confmDe !== null) {
            this.searchRq.rqstDt_Start = this.confmDe[0] ?? null;
            this.searchRq.rqstDt_End = this.confmDe[1] ?? null;
        }

        this._consent.formConsentRequestList(this.searchRq).subscribe((data: formConsentData[]) => {
            if (data.length === 0) {
                this.tableData = [];
                this.totalPage = 1;
            } else {
                this.tableData = data;
                this.totalPage = this.tableData[0].totalCount;
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

        this._consent.formConsentRequestList(this.searchRq).subscribe((data: formConsentData[]) => {
            this.tableData = data;
            this.loadingTable = false;
        }, (err) => {
            this.loadingTable = false;
            this.createMessage('error', '페이지 변경 실패');
        });
    }
}
