import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import { ThuocService } from 'app/core/services/thuocService.service';
import { Thuoc } from 'app/core/models/thuoc';
import { KhachHangService } from 'app/core/services/khachHangService.service';
import { NguoiDungService } from 'app/core/services/nguoiDungService.service';
import { NguoiDung } from 'app/core/models/nguoi-dung';
import { KhachHang } from 'app/core/models/khach-hang';
import { NhapHang } from 'app/core/models/nhap-hang';
import { NhapHangRequest } from 'app/core/models/nhap-hang-request';
import { NhapHangService } from 'app/core/services/nhapHangService.service';
import { NhaCungCap } from 'app/core/models/nha-cung-cap';
import { NhaCungCapService } from 'app/core/services/nhaCungCapService.service';

@Component({
    selector: 'quan-ly-nhap-hang',
    templateUrl: './quan-ly-nhap-hang.component.html',
    styleUrls: ['./quan-ly-nhap-hang.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class QuanLyNhapHangComponent implements OnInit {
    spinning = false;
    tableData: NhapHang[];
    listThuoc: Thuoc[];
    listNhaCungCap: NhaCungCap[];
    listNguoiDung: NguoiDung[];
    isVisible = false;
    impDate: string = null;
    modelTitle = '';
    contentCreateModel = true;
    isEnglish = false;
    nhapHangRequest: NhapHangRequest = new NhapHangRequest();

    formData: FormGroup = new FormGroup({
        impId: new FormControl(),
        impNote: new FormControl(),
        supId: new FormControl(),
        userId: new FormControl(),
        proId: new FormControl(),
        quantity: new FormControl(),
    });

    // eslint-disable-next-line @typescript-eslint/naming-convention
    // eslint-disable-next-line max-len
    constructor(private nguoiDung: NguoiDungService, private nhaCungCapService: NhaCungCapService, private thuocService: ThuocService, private nhapHangService: NhapHangService, private message: NzMessageService, private i18n: NzI18nService) { }

    ngOnInit(): void {
        this.spinning = true;

        this.nhapHangService.AllImpOrder().subscribe((data) => {
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

        this.nhaCungCapService.AllSupplier().subscribe((data) => {
            this.listNhaCungCap = data;
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
        this.modelTitle = 'Thêm đơn nhập hàng mới';
        this.contentCreateModel = true;

        this.formData.setValue({
            impId: null,
            impNote: null,
            supId: null,
            userId: null,
            proId: null,
            quantity: null,
        });
    }

    submitFormCreate(): void {
        this.nhapHangRequest.impId = this.formData.get('impId').value;
        this.nhapHangRequest.impDate = this.impDate;
        this.nhapHangRequest.impNote = this.formData.get('impNote').value;
        this.nhapHangRequest.supId = this.formData.get('supId').value;
        this.nhapHangRequest.userId = this.formData.get('userId').value;
        this.nhapHangRequest.proId = this.formData.get('proId').value;
        this.nhapHangRequest.quantity = this.formData.get('quantity').value;

        console.log(this.nhapHangRequest);

        this.nhapHangService.ImpOrderProduct(this.nhapHangRequest as NhapHangRequest).subscribe((data) => {
            this.handleCancel();
            this.createMessage('success', 'Thêm đơn nhập hàng mới thành công');
            this.ngOnInit();
            this.nhapHangRequest = new NhapHangRequest();
        }, (err) => {
            this.createMessage('error', 'Thêm đơn nhập hàng mới không thành công');
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
