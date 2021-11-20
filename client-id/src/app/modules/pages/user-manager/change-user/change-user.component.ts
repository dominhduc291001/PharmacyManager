/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { UserEmplCheckpass } from 'app/core/models/user-empl-checkpass';
import { UserEmplView } from 'app/core/models/user-empl-view';
import { UserEmplService } from 'app/core/services/user-empl.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-change-user',
    templateUrl: './change-user.component.html',
    styleUrls: ['./change-user.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ChangeUserComponent implements OnInit {
    userId = '';
    user: UserEmplView = new UserEmplView();
    userCheck: UserEmplCheckpass = new UserEmplCheckpass();
    loading = false;
    isVisibleMiddle = false;
    messError: string = '';
    router: any;
    isSpin = false;
    @ViewChild('focusInput') yourControl: ElementRef;
    formData: FormGroup = new FormGroup({
        passwordCurrency: new FormControl('', Validators.required),
        passwordNew: new FormControl('', Validators.required),
        passwordNewAgain: new FormControl('', Validators.required)
    });

    // eslint-disable-next-line @typescript-eslint/member-ordering
    constructor(private _auth: AuthService, private route: ActivatedRoute, private _router: Router, private _UserEmplService: UserEmplService, private message: NzMessageService) {
    }

    ngOnInit(): void {
        this.loading = true;
        this.userId = this.route.snapshot.paramMap.get('userId');

        this._UserEmplService.getEmplView(this.userId).subscribe((data) => {
            this.user = data;
            if (this._auth.userOnl !== data.userId && data.isAdmin === false) {
                alert('당신은 액세스 권한이 없습니다.');
                this._router.navigate(['/KTC/user-manager/user-information']);
            }
            this.loading = false;
        }, (err) => {
            this.loading = false;
            this.createMessage('error', '데이터 다운로드 실패');
        });
    }

    createMessage(type: string, mess: string): void {
        this.message.create(type, mess);
    }

    getErrorPasswordCurrency(): string {
        if (this.formData.get('passwordCurrency').hasError('required')) {
            return '현재 비밀번호는 비워둘 수 없습니다';
        }
    }

    getErrorPasswordNew(): string {
        if (this.formData.get('passwordNew').hasError('required')) {
            return '새 비밀번호는 비워둘 수 없습니다';
        }
    }

    getErrorPasswordNewAgain(): string {
        if (this.formData.get('passwordNewAgain').hasError('required')) {
            return '새 비밀번호 확인은 비워둘 수 없습니다';
        }
    }

    submitForm(): void {
        this.messError = '';
        this.formData.controls.passwordNew.setErrors({ 'passwordMismatch': null });
        this.formData.controls.passwordNewAgain.setErrors({ 'passwordMismatch': null });
        this.formData.controls.passwordNew.updateValueAndValidity();
        this.formData.controls.passwordNewAgain.updateValueAndValidity();
        if (!this.formData.invalid) {
            this.userCheck.password = this.formData.get('passwordCurrency').value;
            this.userCheck.username = this.userId;
            this.isSpin = true;

            this._UserEmplService.checkCurrentPass(this.userCheck).subscribe((data) => {
                if (data) {
                    if (this.formData.get('passwordNew').value === this.formData.get('passwordNewAgain').value) {
                        this.userCheck.password = this.formData.get('passwordNew').value;

                        this._UserEmplService.updatePass(this.userCheck).subscribe((d) => {
                            if (d) {
                                this.isSpin = false;
                                alert('업데이트 성공 다시 로그인하세요.');
                                this._router.navigate(['/sign-out']);
                            } else {
                                this.messError = '업데이트가 실패';
                                this.isSpin = false;
                            }
                        }, (err) => {
                            this.loading = false;
                            this.createMessage('error', '장애 처리');
                        });
                    } else {
                        this.notPasswordMiss();
                        this.isSpin = false;
                    }
                    this.yourControl.nativeElement.focus();
                } else {
                    this.messError = '사용중인 비밀번호가 일치하지 않습니다';
                    this.isSpin = false;
                }
            }, (err) => {
                this.loading = false;
                this.createMessage('error', '장애 처리');
            });
        }
    }

    notPasswordMiss(): void {
        this.messError = '새 비밀번호와 새 비밀번호 확인이 동일하지 않습니다';
        this.formData.controls.passwordNew.setErrors({ 'passwordMismatch': true });
        this.formData.controls.passwordNewAgain.setErrors({ 'passwordMismatch': true });
        this.yourControl.nativeElement.focus();
    }

    showModalMiddle(): void {
        this.isVisibleMiddle = true;
    }

    handleOkMiddle(): void {
        this.isVisibleMiddle = false;
    }

    handleCancelMiddle(): void {
        this.isVisibleMiddle = false;
    }
}
