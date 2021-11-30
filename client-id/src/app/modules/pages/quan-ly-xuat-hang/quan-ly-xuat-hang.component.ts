import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { XuatHang } from 'app/core/models/xuat-hang';
import { XuatHangService } from 'app/core/services/xuatHangService.service';
import { XuatHangRequest } from 'app/core/models/xuat-hang-request';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import { ThuocService } from 'app/core/services/thuocService.service';
import { Thuoc } from 'app/core/models/thuoc';
import { NguoiDungService } from 'app/core/services/nguoiDungService.service';
import { NguoiDung } from 'app/core/models/nguoi-dung';
import { NhaCungCapService } from 'app/core/services/nhaCungCapService.service';
import { KhachHang } from 'app/core/models/khach-hang';
import { KhachHangService } from 'app/core/services/khachHangService.service';

@Component({
    selector: 'quan-ly-xuat-hang',
    templateUrl: './quan-ly-xuat-hang.component.html',
    styleUrls: ['./quan-ly-xuat-hang.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class QuanLyXuatHangComponent implements OnInit {
    spinning = false;
    tableData: XuatHang[];
    listThuoc: Thuoc[];
    listKhachHang: KhachHang[];
    listNguoiDung: NguoiDung[];
    isVisible = false;
    expDate: Date = null;
    modelTitle = '';
    contentCreateModel = true;
    isEnglish = false;
    xuatHangRequest: XuatHangRequest = new XuatHangRequest();

    formData: FormGroup = new FormGroup({
        expId: new FormControl(),
        expNote: new FormControl(),
        cusId: new FormControl(),
        userId: new FormControl(),
        proId: new FormControl(),
        quantity: new FormControl(),
        expPrice: new FormControl(),
    });

    // eslint-disable-next-line @typescript-eslint/naming-convention
    // eslint-disable-next-line max-len
    constructor(private nguoiDung: NguoiDungService, private khachHangService: KhachHangService, private thuocService: ThuocService, private xuatHangService: XuatHangService, private message: NzMessageService, private i18n: NzI18nService) { }

    ngOnInit(): void {
        this.spinning = true;

        this.xuatHangService.AllExpOrder().subscribe((data) => {
            this.tableData = data;
            this.spinning = false;
        }, (err) => {
            this.spinning = false;
            this.createMessage('error', 'Tải dữ liệu không thành công');
        });

        this.thuocService.AllProduct().subscribe((data) => {
            this.listThuoc = data;
            this.spinning = false;
        }, (err) => {
            this.spinning = false;
            this.createMessage('error', 'Tải dữ liệu không thành công');
        });

        this.khachHangService.AllCustomer().subscribe((data) => {
            this.listKhachHang = data;
            this.spinning = false;
        }, (err) => {
            this.spinning = false;
            this.createMessage('error', 'Tải dữ liệu không thành công');
        });

        this.nguoiDung.AllUsers().subscribe((data) => {
            this.listNguoiDung = data;
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
        this.modelTitle = 'Thêm đơn xuất hàng mới';
        this.contentCreateModel = true;

        this.formData.setValue({
            expId: null,
            expNote: null,
            cusId: null,
            userId: null,
            proId: null,
            quantity: null,
            expPrice: null,
        });
    }

    submitFormCreate(): void {
        this.xuatHangRequest.expId = this.formData.get('expId').value;
        this.xuatHangRequest.expDate = this.expDate;
        this.xuatHangRequest.expNote = this.formData.get('expNote').value;
        this.xuatHangRequest.cusId = this.formData.get('cusId').value;
        this.xuatHangRequest.userId = this.formData.get('userId').value;
        this.xuatHangRequest.proId = this.formData.get('proId').value;
        this.xuatHangRequest.quantity = this.formData.get('quantity').value;
        this.xuatHangRequest.expPrice = this.formData.get('expPrice').value;

        this.xuatHangService.ExpOrderProduct(this.xuatHangRequest).subscribe((data) => {
            this.handleCancel();
            this.createMessage('success', 'Thêm đơn xuất hàng mới thành công');
            this.ngOnInit();
            this.xuatHangRequest = new XuatHangRequest();
        }, (err) => {
            this.createMessage('error', 'Thêm đơn xuất hàng mới không thành công');
        });
    }

    changeLanguage(): void {
        this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
        this.isEnglish = !this.isEnglish;
    }

    handleCancel(): void {
        this.isVisible = false;
    }
}
