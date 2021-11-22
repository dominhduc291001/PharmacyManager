import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Thuoc } from 'app/core/models/thuoc';
import { NguoiDungService } from 'app/core/services/nguoiDungService.service';

@Component({
    selector: 'quan-ly-nguoi-dung',
    templateUrl: './quan-ly-nguoi-dung.component.html',
    styleUrls: ['./quan-ly-nguoi-dung.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class QuanLyNguoiDungComponent implements OnInit {
    spinning = false;
    tableData: Thuoc[];
    isVisible = false;

    // constructor(private _testComplete: InspectionCompleteService, private message: NzMessageService) { }
    constructor(private _nguoiDungService: NguoiDungService) { }

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
        // this.message.create(type, mess);
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
