import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NguoiDung } from 'app/core/models/nguoi-dung';
import { NguoiDungMoi } from 'app/core/models/nguoi-dung-moi';
import { Role } from 'app/core/models/role';
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
    formData: FormGroup = new FormGroup({
        userId: new FormControl(),
        userPass: new FormControl(),
        fullName: new FormControl(),
        phoneNumber: new FormControl(),
        email: new FormControl()
    });

    // constructor(private _testComplete: InspectionCompleteService, private message: NzMessageService) { }
    constructor(private _nguoiDungService: NguoiDungService, private message: NzMessageService) { }

    ngOnInit(): void {
        this.loadingData();
    }

    loadingData(): void{
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
        this.formData.reset();
        this.isVisible = true;
        this.modelTitle = 'Thêm người dùng mới';
        this.contentCreateModel = true;
    }

    submitFormCreate(): void {
        this._nguoiDungService.createOrUpdate(this.formData.value as NguoiDungMoi).subscribe((data)=>{
            // eslint-disable-next-line prefer-const
            let role: Role = new Role();
            role.userId = this.formData.controls.userId.value;
            this._nguoiDungService.addRole(role).subscribe((data2)=>{
                this.createMessage('success', 'Tạo người dùng thành công');
                this.loadingData();
                this.formData.reset();
                this.handleCancel();
            });
        },(err)=>{
            this.createMessage('error', 'Tạo người dùng không thành công');
        });
    }

    showModalUpdate(nguoiDung: NguoiDung): void {
        console.log('ahuhu');
        this.formData.reset();
        this.formData.setValue({
            userId: nguoiDung.userId,
            userPass: '',
            fullName: nguoiDung.fullName,
            phoneNumber: nguoiDung.phoneNumber,
            email: nguoiDung.email
        });
        this.isVisible = true;
        this.modelTitle = 'Sửa thông tin người dùng';
        this.contentCreateModel = false;
    }

    submitFormUpdate(): void {
        this._nguoiDungService.createOrUpdate(this.formData.value as NguoiDungMoi).subscribe((data)=>{
                this.createMessage('success', 'Cập nhập người dùng thành công');
                this.loadingData();
                this.formData.reset();
                this.handleCancel();
        },(err)=>{
            this.createMessage('error', 'Cập nhập người dùng không thành công');
        });
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
