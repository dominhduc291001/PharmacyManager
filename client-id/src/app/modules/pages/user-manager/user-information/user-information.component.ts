import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserEmpl } from 'app/core/models/user-empl';
import { UserEmplRequest } from 'app/core/models/user-empl-request';
import { UserEmplService } from 'app/core/services/user-empl.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-user-information',
    templateUrl: './user-information.component.html',
    styleUrls: ['./user-information.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class UserInformationComponent implements OnInit {
    searchE: UserEmplRequest = new UserEmplRequest();
    indexPage = 1;
    totalPage: number;
    searchDeptNm: string = '';
    searchType: string = 'A';
    searchText: any = '';
    loading = false;
    listOfData: UserEmpl[];

    // eslint-disable-next-line @typescript-eslint/naming-convention
    constructor(private _UserEmplService: UserEmplService, private message: NzMessageService) { }

    ngOnInit(): void {
        this.loading = true;

        this._UserEmplService.getEmplsList(this.searchE).subscribe((data) => {
            this.listOfData = data;
            this.totalPage = data[0].totalCount;
            this.loading = false;
        }, (err) => {
            this.loading = false;
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

    searchList(): void {
        this.loading = true;
        this.searchE = new UserEmplRequest();
        this.searchE.startIndex = 1;
        this.searchE.endIndex = 10;
        this.searchE.searchDeptCode = null;
        this.searchE.searchUseAt = null;

        if (this.searchDeptNm !== '') {
            this.searchE.searchType = null;
            this.searchE.searchText = null;
            this.searchE.searchDeptNm = this.searchDeptNm;
        } else if (this.searchDeptNm === '' && this.searchType !== '' && this.searchText !== '') {
            this.searchE.searchType = this.searchType;
            this.searchE.searchText = this.searchText;
            this.searchE.searchDeptNm = null;
        }

        this._UserEmplService.getEmplsList(this.searchE).subscribe((data) => {
            if (data.length === 0) {
                this.listOfData = [];
                this.totalPage = 0;
            } else {
                this.listOfData = data;
                this.totalPage = data[0].totalCount;
            };
            this.loading = false;
        }, (err) => {
            this.loading = false;
            this.createMessage('error', '실패한 검색');
        });
    }

    pageChange(): void {
        this.loading = true;
        const start = this.indexPage * 10;
        this.searchE.startIndex = start - 9;
        this.searchE.endIndex = start;

        this._UserEmplService.getEmplsList(this.searchE).subscribe((data) => {
            this.listOfData = data;
            this.totalPage = data[0].totalCount;
            this.loading = false;
        }, (err) => {
            this.loading = false;
            this.createMessage('error', '페이지 변경 실패');
        });
    }
}
