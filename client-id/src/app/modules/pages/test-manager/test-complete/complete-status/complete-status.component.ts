import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TestCompleteSttSelect } from 'app/core/interfaces/complete-status-select';
import { TestCompleteSttRp } from 'app/core/interfaces/test-complete-status-rp';
import { TestCompleteSttRq } from 'app/core/models/test-complete-status-rq';
import { InspectionCompleteService } from 'app/core/services/inspection-complete.service';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
    selector: 'complete-status',
    templateUrl: './complete-status.component.html',
    styleUrls: ['./complete-status.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class CompleteStatusComponent implements OnInit {
    spinning = false;
    selectItem: TestCompleteSttSelect;
    tableData: TestCompleteSttRp[];
    searchRq: TestCompleteSttRq = new TestCompleteSttRq();
    indexPage = 1;
    totalPage: number;
    athrzEndDe: Date[] = null;
    expDeDate: Date[] = null;

    constructor(private _testComplete: InspectionCompleteService, private message: NzMessageService) { }

    ngOnInit(): void {
        this.spinning = true;

        this._testComplete.getInspectionCompleteStt(this.searchRq).subscribe((data) => {
            this.tableData = data;
            this.totalPage = data[0].totalCount;
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
            return { x: '1200px' };
        }
        return null;
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

        this._testComplete.getInspectionCompleteStt(this.searchRq).subscribe((data) => {
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

        this._testComplete.getInspectionCompleteStt(this.searchRq).subscribe((data) => {
            this.tableData = data;
            this.spinning = false;
        }, (err) => {
            this.spinning = false;
            this.createMessage('error', '페이지 변경 실패');
        });
    }
}
