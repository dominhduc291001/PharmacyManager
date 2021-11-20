import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AlwncAuthorList } from 'app/core/models/alwnc-author-list';
import { AuthGroup } from 'app/core/models/auth-group';
import { GroupManagerService } from 'app/core/services/group-manager.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-permission',
    templateUrl: './permission.component.html',
    styleUrls: ['./permission.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PermissionComponent implements OnInit {
    listAuthGroupAll: AuthGroup[] = [];
    listAlwncAuthorList: AlwncAuthorList[] = [];
    loading = false;
    valueGroupCode = '';

    // eslint-disable-next-line @typescript-eslint/naming-convention
    constructor(private _GroupManager: GroupManagerService, private message: NzMessageService) { }

    ngOnInit(): void {
        this.loading = true;

        this._GroupManager.getAuthGroupAll().subscribe((data) => {
            this.listAuthGroupAll = data;
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
        if (this.listAlwncAuthorList.length > 0) {
            if (window.innerWidth < 850) {
                return { x: '850px', y: '360px' };
            }
            return { y: '360px' };
        } else {
            if (window.innerWidth < 850) {
                return { x: '850px', y: '360px' };
            }
            return null;
        }
    }

    findAlwncAuthorList(event: any): void {
        this.loading = true;
        const groupCode = event.target.value;

        if (groupCode) {
            this._GroupManager.getAlwncAuthorList(groupCode).subscribe((data) => {
                this.listAlwncAuthorList = data;
                this.listAlwncAuthorList.forEach((element) => {
                    element.idItem = element.id.split('-').filter(s => s !== '')
                        .map(x => parseInt(x, 10));
                    if (element.idItem.length === 1) {
                        element.use = 'Y';
                    }
                });
                this.loading = false;
            }, (err) => {
                this.loading = false;
                this.createMessage('error', '장애 처리');
            });
        }
    }

    changeValueForFindAlwncAuthorList(vaSelect: any): void {
        this.loading = true;

        this._GroupManager.getAlwncAuthorList(vaSelect).subscribe((data) => {
            this.listAlwncAuthorList = data;
            this.listAlwncAuthorList.forEach((element) => {
                element.idItem = element.id.split('-').filter(s => s !== '')
                    .map(x => parseInt(x, 10));
                if (element.idItem.length === 1) {
                    element.use = 'Y';
                }
            });
            this.loading = false;
        }, (err) => {
            this.loading = false;
            this.createMessage('error', '장애 처리');
        });
    }

    findChild(data: AlwncAuthorList): void {
        if (data !== null) {
            if (data.icon === 'B') {
                data.icon = 'R';
            } else {
                data.icon = 'B';
            }

            data.idItem.push(1);
            const arrayNumber = data.idItem;

            this.listAlwncAuthorList.forEach((element) => {
                element.idItem = element.id.split('-').filter(s => s !== '')
                    .map(x => parseInt(x, 10));
                if (element.idItem.toString() === arrayNumber.toString()) {
                    if (element.use === 'Y') {
                        element.use = 'N';
                        if (element.icon === 'B') {
                            element.icon = 'R';
                        }
                        if (element.idItem.length < 5) {
                            element.idItem.push(1);
                            const arrayChild = element.idItem;

                            this.listAlwncAuthorList.forEach((e1) => {
                                e1.idItem = e1.id.split('-').filter(s => s !== '')
                                    .map(x => parseInt(x, 10));
                                if (e1.idItem.toString() === arrayChild.toString()) {
                                    if (e1.use === 'Y') {
                                        e1.use = 'N';
                                        if (e1.icon === 'B') {
                                            e1.icon = 'R';
                                        }
                                        if (e1.idItem.length < 5) {
                                            e1.idItem.push(1);
                                            const arrayCha = e1.idItem;

                                            this.listAlwncAuthorList.forEach((con) => {
                                                con.idItem = con.id.split('-').filter(s => s !== '')
                                                    .map(x => parseInt(x, 10));
                                                if (con.idItem.toString() === arrayCha.toString()) {
                                                    if (con.use === 'Y') {
                                                        con.use = 'N';
                                                    }
                                                    arrayCha[arrayCha.length - 1] += 1;
                                                }
                                            });
                                        }
                                    }
                                    arrayChild[arrayChild.length - 1] += 1;
                                }
                            });
                        }
                    } else {
                        element.use = 'Y';
                    }
                    arrayNumber[arrayNumber.length - 1] += 1;
                }
            });
        }
    }
}
