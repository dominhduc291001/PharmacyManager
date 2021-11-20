import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthGroup } from 'app/core/models/auth-group';
import { GroupManagerService } from 'app/core/services/group-manager.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-user-group',
    templateUrl: './user-group.component.html',
    styleUrls: ['./user-group.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class UserGroupComponent implements OnInit {
    userAt = '';
    searchType = 'A';
    inputSearch?: string = '';
    loading = false;
    listOfData: AuthGroup[];
    listOfDataTemp: AuthGroup[];
    resData: AuthGroup[];

    // eslint-disable-next-line @typescript-eslint/naming-convention
    constructor(private _GroupManager: GroupManagerService, private message: NzMessageService) { }

    ngOnInit(): void {
        this.loading = true;

        this._GroupManager.getAuthGroupAll().subscribe((data) => {
            this.listOfData = data;
            this.listOfDataTemp = data;
            this.resData = data;
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
            return { x: '600px' };
        }
        return null;
    }

    searchList(): void {
        this.loading = true;
        this.listOfData = this.listOfDataTemp;
        const result: AuthGroup[] = this.listOfData;
        if (this.userAt !== '') {
            this.listOfData = result.filter(s => s.isUse === this.userAt);
        }
        if (this.searchType === 'A' && this.inputSearch !== '') {
            this.listOfData = result.filter(s => s.groupCode.trim() === this.inputSearch.trim());
        }
        if (this.searchType === 'B' && this.inputSearch !== '') {
            this.listOfData = result.filter(s => s.authGroupName.trim() === this.inputSearch.trim());
        }
        this.loading = false;
    }
}
