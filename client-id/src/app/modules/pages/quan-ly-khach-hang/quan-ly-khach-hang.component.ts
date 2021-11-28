import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoaiThuoc } from 'app/core/models/loai-thuoc';
import { KhachHang } from 'app/core/models/khach-hang';
import { ThuocRequest } from 'app/core/models/thuoc-request';
import { ThuocService } from 'app/core/services/thuocService.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { KhachHangService } from 'app/core/services/khachHangService.service';


@Component({
    selector: 'quan-ly-khach-hang',
    templateUrl: './quan-ly-khach-hang.component.html',
    styleUrls: ['./quan-ly-khach-hang.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class QuanLyKhachHangComponent implements OnInit {
    spinning = false;
    tableData: KhachHang[];
    isVisible = false;
    modelTitle = '';
    contentCreateModel = true;
    khachHang: KhachHang = new KhachHang();

    formData: FormGroup = new FormGroup({
        cusId: new FormControl(),
        cusName: new FormControl(),
        cusEmail: new FormControl(),
        cusPhone: new FormControl(),
        cusAddress: new FormControl(),
        cusLicense: new FormControl()
    });

    // constructor(private _testComplete: InspectionCompleteService, private message: NzMessageService) { }
    constructor(private khachHangService: KhachHangService, private message: NzMessageService) { }

    ngOnInit(): void {
        this.spinning = true;

        this.khachHangService.AllCustomer().subscribe((data) => {
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

    reponsiveTable(): any {
        if (window.innerWidth < 1080) {
            return { x: '1200px' };
        }
        return null;
    }

    showModalCreate(): void {
        this.isVisible = true;
        this.modelTitle = 'Thêm khách hàng mới';
        this.contentCreateModel = true;

        this.formData.setValue({
            cusId: null,
            cusName: null,
            cusEmail: null,
            cusPhone: null,
            cusAddress: null,
            cusLicense: null
        });
    }

    showModalUpdate(khachHang: KhachHang): void {
        this.isVisible = true;
        this.modelTitle = 'Sửa thông tin khách hàng';
        this.contentCreateModel = false;

        this.formData.setValue({
            cusId: khachHang.cusId,
            cusName: khachHang.cusName,
            cusEmail: khachHang.cusEmail,
            cusPhone: khachHang.cusPhone,
            cusAddress: khachHang.cusAddress,
            cusLicense: khachHang.cusLicense
        });
    }

    submitFormCreate(): void {
        this.khachHang.cusId = this.formData.get('cusId').value;
        this.khachHang.cusName = this.formData.get('cusName').value;
        this.khachHang.cusEmail = this.formData.get('cusEmail').value;
        this.khachHang.cusPhone = this.formData.get('cusPhone').value;
        this.khachHang.cusAddress = this.formData.get('cusAddress').value;
        this.khachHang.cusLicense = this.formData.get('cusLicense').value;
        this.khachHangService.CreateOrUpdateCustomer(this.khachHang).subscribe((data) => {
            this.handleCancel();
            this.createMessage('success', 'Thêm khách hàng mới thành công');
            this.ngOnInit();
            this.khachHang = new KhachHang();
        }, (err) => {
            this.createMessage('error', 'Thêm khách hàng mới không thành công');
        });
    }

    submitFormUpdate(): void {
        this.khachHang.cusId = this.formData.get('cusId').value;
        this.khachHang.cusName = this.formData.get('cusName').value;
        this.khachHang.cusEmail = this.formData.get('cusEmail').value;
        this.khachHang.cusPhone = this.formData.get('cusPhone').value;
        this.khachHang.cusAddress = this.formData.get('cusAddress').value;
        this.khachHang.cusLicense = this.formData.get('cusLicense').value;
        this.khachHangService.CreateOrUpdateCustomer(this.khachHang).subscribe((data) => {
            this.handleCancel();
            this.createMessage('success', 'Sửa thông tin khách hàng thành công');
            this.ngOnInit();
            this.khachHang = new KhachHang();
        }, (err) => {
            this.createMessage('error', 'Sửa thông tin khách hàng không thành công');
        });
    }

    deleteCustomer(cusId: string): void {
        this.khachHangService.DeleteCustomer(cusId).subscribe((data) => {
            this.createMessage('success', 'Xóa khách hàng thành công');
            this.ngOnInit();
        }, (err) => {
            this.createMessage('error', 'Xóa khách hàng không thành công');
        });
    }

    handleCancel(): void {
        this.isVisible = false;
    }
}
