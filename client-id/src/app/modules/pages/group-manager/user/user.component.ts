import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthGroup } from 'app/core/models/auth-group';
import { GroupManagerService } from 'app/core/services/group-manager.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
    listGroup: AuthGroup[] = [];
    listUserInGroup: string[] = [];
    loading = false;
    valueGroupCode = '';

    // eslint-disable-next-line @typescript-eslint/naming-convention
    constructor(private _GroupManager: GroupManagerService, private message: NzMessageService) { }

    ngOnInit(): void {
        this.loading = true;

        this._GroupManager.getAuthGroupAll().subscribe((data) => {
            this.listGroup = data;
            this.loading = false;
        }, (err) => {
            this.loading = false;
            this.createMessage('error', '데이터 다운로드 실패');
        });
    }

    createMessage(type: string, mess: string): void {
        this.message.create(type, mess);
    }

    findAllUserByGroup(event: any): void {
        this.loading = true;
        const groupCode = event.target.value;

        if (groupCode) {
            this._GroupManager.getUserInGroup(groupCode).subscribe((data) => {
                this.listUserInGroup = data;
                this.loading = false;
            }, (err) => {
                this.loading = false;
                this.createMessage('error', '장애 처리');
            });
        }
    }

    changeValue(vaSelect: any): void {
        this.loading = true;

        this._GroupManager.getUserInGroup(vaSelect).subscribe((data) => {
            this.listUserInGroup = data;
            this.loading = false;
        }, (err) => {
            this.loading = false;
            this.createMessage('error', '장애 처리');
        });
    }
}
