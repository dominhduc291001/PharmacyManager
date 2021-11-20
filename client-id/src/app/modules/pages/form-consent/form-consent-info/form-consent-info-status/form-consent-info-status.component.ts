import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { DdlFormConsentInfo } from 'app/core/interfaces/ddl-form-consent-info';
import { FormConsentCompleteRp, formConsentData } from 'app/core/interfaces/form-consent-complete-rp';
import { FormConsentCompleteRq } from 'app/core/models/form-consent-complete-rq';
import { FormConsentService } from 'app/core/services/form-consent.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'form-consent-info-status',
    templateUrl: './form-consent-info-status.component.html',
    styleUrls: ['./form-consent-info-status.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ConsentInfoStatusComponent implements OnInit {
    indexPage = 1;
    totalPage: number;
    loadingTable = false;
    tableData: formConsentData[] = [];
    searchRq: FormConsentCompleteRq = new FormConsentCompleteRq();
    lastConfmDe: Date[] = null;
    selectList: DdlFormConsentInfo;

    constructor(private _consent: FormConsentService, private message: NzMessageService) { }

    ngOnInit(): void {
        this.loadingTable = true;

        this._consent.formConsentInfoList(this.searchRq).subscribe((data: FormConsentCompleteRp) => {
            this.tableData = data.gridData;
            this.totalPage = data.gridData[0].totalCount;
            this.loadingTable = false;
        }, (err) => {
            this.loadingTable = false;
            this.createMessage('error', '데이터 다운로드 실패');
        });

        this._consent.ddlFormConsentInfoList().subscribe((data) => {
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
        if (this.lastConfmDe !== null) {
            this.searchRq.lastConfmDe_Start = this.lastConfmDe[0] ?? null;
            this.searchRq.lastConfmDe_End = this.lastConfmDe[1] ?? null;
        }

        this._consent.formConsentInfoList(this.searchRq).subscribe((data: FormConsentCompleteRp) => {
            if (data.gridData.length === 0) {
                this.tableData = [];
                this.totalPage = 1;
            } else {
                this.tableData = data.gridData;
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

        this._consent.formConsentInfoList(this.searchRq).subscribe((data: FormConsentCompleteRp) => {
            this.tableData = data.gridData;
            this.loadingTable = false;
        }, (err) => {
            this.loadingTable = false;
            this.createMessage('error', '페이지 변경 실패');
        });
    }
}
