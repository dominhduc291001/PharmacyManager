import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoaiThuoc } from 'app/core/models/loai-thuoc';
import { Thuoc } from 'app/core/models/thuoc';
import { ThuocRequest } from 'app/core/models/thuoc-request';
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
    modelTitle = '';
    contentCreateModel = true;
    listTypeName: LoaiThuoc[] = [];
    productNew: ThuocRequest = new ThuocRequest();

    formData: FormGroup = new FormGroup({
        proId: new FormControl(),
        proName: new FormControl(),
        proNo: new FormControl(),
        proProducer: new FormControl(),
        proPack: new FormControl(),
        proUnit: new FormControl(),
        typeId: new FormControl(),
        proPrice: new FormControl(),
    });

    // constructor(private _testComplete: InspectionCompleteService, private message: NzMessageService) { }
    constructor(private _thuocService: ThuocService, private message: NzMessageService) { }

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
        this.modelTitle = 'Thêm thuốc mới';
        this.contentCreateModel = true;

        this._thuocService.AllProductType().subscribe((data) => {
            this.listTypeName = data;
        }, (err) => {
            this.createMessage('error', 'Tải dữ liệu không thành công');
        });
    }

    submitFormCreate(): void {
        this.productNew.proId = this.formData.get('proId').value;
        this.productNew.proName = this.formData.get('proName').value;
        this.productNew.proNo = this.formData.get('proNo').value;
        this.productNew.proProducer = this.formData.get('proProducer').value;
        this.productNew.proPack = this.formData.get('proPack').value;
        this.productNew.proUnit = this.formData.get('proUnit').value;
        this.productNew.typeId = this.formData.get('typeId').value;
        this.productNew.proPrice = Number(this.formData.get('proPrice').value);
        this._thuocService.CreateProduct(this.productNew).subscribe((data) => {
            this.handleCancel();
            this.createMessage('success', 'Thêm thuốc mới thành công');
            this.ngOnInit();
            this.productNew = new ThuocRequest();
        }, (err) => {
            this.createMessage('error', 'Thêm thuốc mới không thành công');
        });
    }

    showModalUpdate(thuoc: Thuoc): void {
        this.isVisible = true;
        this.modelTitle = 'Sửa thông tin thuốc';
        this.contentCreateModel = false;

        this._thuocService.AllProductType().subscribe((data) => {
            this.listTypeName = data;
        }, (err) => {
            this.createMessage('error', 'Tải dữ liệu không thành công');
        });

        this.formData.setValue({
            proId: thuoc.proId,
            proName: thuoc.proName,
            proNo: thuoc.proNo,
            proProducer: thuoc.proProducer,
            proPack: thuoc.proPack,
            proUnit: thuoc.proUnit,
            typeId: thuoc.typeId,
            proPrice: thuoc.proPrice,
        });
    }

    submitFormUpdate(): void {
        this.productNew.proId = this.formData.get('proId').value;
        this.productNew.proName = this.formData.get('proName').value;
        this.productNew.proNo = this.formData.get('proNo').value;
        this.productNew.proProducer = this.formData.get('proProducer').value;
        this.productNew.proPack = this.formData.get('proPack').value;
        this.productNew.proUnit = this.formData.get('proUnit').value;
        this.productNew.typeId = this.formData.get('typeId').value;
        this.productNew.proPrice = Number(this.formData.get('proPrice').value);
        this._thuocService.CreateProduct(this.productNew).subscribe((data) => {
            this.handleCancel();
            this.createMessage('success', 'Sửa thuốc thành công');
            this.ngOnInit();
            this.productNew = new ThuocRequest();
        }, (err) => {
            this.createMessage('error', 'Sửa thuốc không thành công');
        });
    }

    deleteProduct(thuocId: string): void {
        this._thuocService.DeleteProduct(thuocId).subscribe((data) => {
            this.createMessage('success', 'Xóa thuốc thành công');
            this.ngOnInit();
        }, (err) => {
            this.createMessage('error', 'Xóa thuốc không thành công');
        });
    }

    handleCancel(): void {
        this.isVisible = false;
    }
}
