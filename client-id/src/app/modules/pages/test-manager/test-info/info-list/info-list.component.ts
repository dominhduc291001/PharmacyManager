import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { InfoListRp } from 'app/core/interfaces/info-list-rp';
import { TestProcessSttSelect } from 'app/core/interfaces/test-process-status-select';
import { InfoListRq } from 'app/core/models/info-list-rq';
import { InspectionInfoService } from 'app/core/services/inspection-info.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'info-list',
    templateUrl: './info-list.component.html',
    styleUrls: ['./info-list.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class InfoListComponent implements OnInit {
    selectItem: TestProcessSttSelect;
    tableData: InfoListRp = new InfoListRp();
    searchRq: InfoListRq = new InfoListRq();
    indexPage = 1;
    totalPage: number;
    loadingTable = false;
    athrzEndDe: Date[] = null;
    expDeDate: Date[] = null;
    athrzHopeDe: Date[] = null;

    constructor(private _infoList: InspectionInfoService, private message: NzMessageService) { }

    ngOnInit(): void {
        this.loadingTable = true;

        this._infoList.getInspectionInfo(this.searchRq).subscribe((data) => {
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
}
