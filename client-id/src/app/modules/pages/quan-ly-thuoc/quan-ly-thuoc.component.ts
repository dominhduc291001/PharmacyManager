import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Thuoc } from 'app/core/models/thuoc';
import { ThuocService } from 'app/core/services/thuocService.service';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
    selector: 'quan-ly-thuoc',
    templateUrl: './quan-ly-thuoc.component.html',
    styleUrls: ['./quan-ly-thuoc.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class QuanLyThuocComponent implements OnInit {
    spinning = false;
    tableData: Thuoc[];
    isVisible = false;

    // constructor(private _testComplete: InspectionCompleteService, private message: NzMessageService) { }
    constructor(private _thuocService: ThuocService) { }

    ngOnInit(): void {
        this.spinning = true;

        this._thuocService.AllProduct().subscribe((data) => {
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
