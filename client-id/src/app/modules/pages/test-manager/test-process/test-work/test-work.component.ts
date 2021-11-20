import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { TestProcessSttRp } from 'app/core/interfaces/test-process-status-rp';
import { TestProcessSttSelect } from 'app/core/interfaces/test-process-status-select';
import { TestProcessSttRq } from 'app/core/models/test-process-status-rq';
import { InspectionProcessService } from 'app/core/services/inspection-process.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'test-work',
    templateUrl: './test-work.component.html',
    styleUrls: ['./test-work.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class TestWorkComponent implements OnInit {
    selectItem: TestProcessSttSelect;
    tableData: TestProcessSttRp[];
    searchRq: TestProcessSttRq = new TestProcessSttRq();
    indexPage = 1;
    totalPage: number;
    loadingTable = false;
    expDeDate: Date[] = null;
    rqstDate: Date[] = null;
    receptDeDate: Date[] = null;

    constructor(private _testManager: InspectionProcessService, private _auth: AuthService, private message: NzMessageService) { }

    ngOnInit(): void {
        this.loadingTable = true;
        this.searchRq.username = this._auth.userOnl;
        this.searchRq.getAllUser = false;

        this._testManager.getInspectionStt(this.searchRq).subscribe((data) => {
            this.tableData = data;
            this.totalPage = data[0].totalCount;
            this.loadingTable = false;
        }, (err) => {
            this.loadingTable = false;
            this.createMessage('error', '데이터 다운로드 실패');
        });

        this._testManager.getSelectListStt().subscribe((data) => {
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
        if (this.rqstDate !== null) {
            this.searchRq.rqstDt_Start = this.rqstDate[0] ?? null;
            this.searchRq.rqstDt_End = this.rqstDate[1] ?? null;
        }
        if (this.receptDeDate !== null) {
            this.searchRq.rceptDe_Start = this.receptDeDate[0] ?? null;
            this.searchRq.rceptDe_End = this.receptDeDate[1] ?? null;
        }
        if (this.expDeDate !== null) {
            this.searchRq.expDe_Start_String = this.expDeDate[0] ?? null;
            this.searchRq.expDe_End_String = this.expDeDate[1] ?? null;
        }

        this._testManager.getInspectionStt(this.searchRq).subscribe((data) => {
            if (data.length === 0) {
                this.tableData = [];
                this.totalPage = 1;
            } else {
                this.tableData = data;
                this.totalPage = data[0].totalCount;
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

        this._testManager.getInspectionStt(this.searchRq).subscribe((data) => {
            this.tableData = data;
            this.loadingTable = false;
        }, (err) => {
            this.loadingTable = false;
            this.createMessage('error', '페이지 변경 실패');
        });
    }
}
