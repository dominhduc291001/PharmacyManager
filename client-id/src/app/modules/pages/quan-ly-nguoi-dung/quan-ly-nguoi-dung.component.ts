import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NguoiDung } from 'app/core/models/nguoi-dung';
import { NguoiDungService } from 'app/core/services/nguoiDungService.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'quan-ly-nguoi-dung',
    templateUrl: './quan-ly-nguoi-dung.component.html',
    styleUrls: ['./quan-ly-nguoi-dung.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class QuanLyNguoiDungComponent implements OnInit {
    spinning = false;
    tableData: NguoiDung[];
    isVisible = false;
    modelTitle = '';
    contentCreateModel = true;

    // constructor(private _testComplete: InspectionCompleteService, private message: NzMessageService) { }
    constructor(private _nguoiDungService: NguoiDungService, private message: NzMessageService) { }

    ngOnInit(): void {
        this.spinning = true;

        this._nguoiDungService.AllUsers().subscribe((data) => {
            this.tableData = data;
            this.spinning = false;
        }, (err) => {
            this.spinning = false;
            this.createMessage('error', 'Tải dữ liệu không thành công');
        });
    }

    createMessage(type: string, mess: string): void {
        this.message.create(type, mess);
    }

    showModalCreate(): void {
        this.isVisible = true;
        this.modelTitle = 'Thêm người dùng mới';
        this.contentCreateModel = true;
    }

    submitFormCreate(): void {
    }

    showModalUpdate(nguoiDung: NguoiDung): void {
        this.isVisible = true;
        this.modelTitle = 'Sửa thông tin người dùng';
        this.contentCreateModel = false;
    }

    submitFormUpdate(): void {
    }

    deleteProduct(userId: string): void {
        this._nguoiDungService.DeleteUser(userId).subscribe((data) => {
            this.createMessage('success', 'Xóa người dùng thành công');
            this.ngOnInit();
        }, (err) => {
            this.createMessage('error', 'Xóa người dùng không thành công');
        });
    }

    reponsiveTable(): any {
        if (window.innerWidth < 1080) {
            return { x: '1200px' };
        }
        return null;
    }

    showModal(): void {
        this.isVisible = true;
    }

    handleCancel(): void {
        this.isVisible = false;
    }
}
