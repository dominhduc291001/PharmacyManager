import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NhaCungCap } from 'app/core/models/nha-cung-cap';
import { NhaCungCapService } from 'app/core/services/nhaCungCapService.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'quan-ly-nha-cung-cap',
    templateUrl: './quan-ly-nha-cung-cap.component.html',
    styleUrls: ['./quan-ly-nha-cung-cap.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class QuanLyNhaCungCapComponent implements OnInit {
    spinning = false;
    tableData: NhaCungCap[];
    isVisible = false;
    modelTitle = '';
    contentCreateModel = true;
    nhaCungCap: NhaCungCap = new NhaCungCap();

    formData: FormGroup = new FormGroup({
        supId: new FormControl(),
        supName: new FormControl(),
        supEmail: new FormControl(),
        supPhone: new FormControl(),
        supAddress: new FormControl(),
        supNo: new FormControl(),
        supLicense: new FormControl()
    });

    // constructor(private _testComplete: InspectionCompleteService, private message: NzMessageService) { }
    constructor(private nhaCungCapService: NhaCungCapService, private message: NzMessageService) { }

    ngOnInit(): void {
        this.spinning = true;

        this.nhaCungCapService.AllSupplier().subscribe((data) => {
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
        this.modelTitle = 'Thêm nhà cung cấp mới';
        this.contentCreateModel = true;

        this.formData.setValue({
            supId: null,
            supName: null,
            supEmail: null,
            supPhone: null,
            supAddress: null,
            supNo: null,
            supLicense: null
        });
    }

    showModalUpdate(nhaCungCap: NhaCungCap): void {
        this.isVisible = true;
        this.modelTitle = 'Sửa thông tin nhà cung cấp';
        this.contentCreateModel = false;

        this.formData.setValue({
            supId: nhaCungCap.supId,
            supName: nhaCungCap.supName,
            supEmail: nhaCungCap.supEmail,
            supPhone: nhaCungCap.supPhone,
            supAddress: nhaCungCap.supAddress,
            supNo: nhaCungCap.supNo,
            supLicense: nhaCungCap.supLicense
        });
    }

    submitFormCreate(): void {
        this.nhaCungCap.supId = this.formData.get('supId').value;
        this.nhaCungCap.supName = this.formData.get('supName').value;
        this.nhaCungCap.supEmail = this.formData.get('supEmail').value;
        this.nhaCungCap.supPhone = this.formData.get('supPhone').value;
        this.nhaCungCap.supAddress = this.formData.get('supAddress').value;
        this.nhaCungCap.supNo = this.formData.get('supNo').value;
        this.nhaCungCap.supLicense = this.formData.get('supLicense').value;
        this.nhaCungCapService.CreateOrUpdateSupplier(this.nhaCungCap).subscribe((data) => {
            this.handleCancel();
            this.createMessage('success', 'Thêm nhà cung cấp mới thành công');
            this.ngOnInit();
            this.nhaCungCap = new NhaCungCap();
        }, (err) => {
            this.createMessage('error', 'Thêm nhà cung cấp mới không thành công');
        });
    }

    submitFormUpdate(): void {
        this.nhaCungCap.supId = this.formData.get('supId').value;
        this.nhaCungCap.supName = this.formData.get('supName').value;
        this.nhaCungCap.supEmail = this.formData.get('supEmail').value;
        this.nhaCungCap.supPhone = this.formData.get('supPhone').value;
        this.nhaCungCap.supAddress = this.formData.get('supAddress').value;
        this.nhaCungCap.supNo = this.formData.get('supNo').value;
        this.nhaCungCap.supLicense = this.formData.get('supLicense').value;
        this.nhaCungCapService.CreateOrUpdateSupplier(this.nhaCungCap).subscribe((data) => {
            this.handleCancel();
            this.createMessage('success', 'Sửa thông tin nhà cung cấp thành công');
            this.ngOnInit();
            this.nhaCungCap = new NhaCungCap();
        }, (err) => {
            this.createMessage('error', 'Sửa thông tin nhà cung cấp không thành công');
        });
    }

    deleteCustomer(cusId: string): void {
        this.nhaCungCapService.DeleteSupplier(cusId).subscribe((data) => {
            this.createMessage('success', 'Xóa nhà cung cấp thành công');
            this.ngOnInit();
        }, (err) => {
            this.createMessage('error', 'Xóa nhà cung cấp không thành công');
        });
    }

    handleCancel(): void {
        this.isVisible = false;
    }
}
