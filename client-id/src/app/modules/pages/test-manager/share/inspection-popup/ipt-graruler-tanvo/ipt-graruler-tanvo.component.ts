/* eslint-disable prefer-const */
import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { IptGrarulerTanvolModel } from 'app/core/models/inspection-popup/ipt-graruler-tanvol-model';
import { AthrzDetailRegist } from 'app/core/models/test-share-models/athrz-detail-regist';
import { CopyFormSent2014 } from 'app/core/models/test-share-models/copy-form-sent-2014';
import { InspectionPopupService } from 'app/core/services/inspection-popup.service';
import { InspectionService } from 'app/core/services/inspection.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
    selector     : 'ipt-graruler-tanvo',
    templateUrl  : './ipt-graruler-tanvo.component.html',
    styleUrls    : ['../inspection-popup.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class IptGrarulerTanvoComponent implements OnInit, AfterContentInit
{
    @Input()dataMain: AthrzDetailRegist;
    dataPage: IptGrarulerTanvolModel = new IptGrarulerTanvolModel();
    isSpin = false;
    tempSel = [];
    constructor(private _popup: InspectionPopupService,
        private _auth: AuthService,
        private _inspection: InspectionService, private drawerRef: NzDrawerRef<string[]>){}

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        this.isSpin = true;
        this._popup.iptGrarulerTanvolPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data: IptGrarulerTanvolModel)=>{
            this.dataPage = data;
            this.isSpin = false;
        },(err)=>{this.isSpin = false;});
    }

    validateDetail(): any{
        if(this.dataPage.tnkMtrqltNm === null || this.dataPage.tnkMtrqltNm === ''){
            alert('탱크 재질을 입력하세요.');
            return false;
        }
        if(this.dataPage.cpctyVal === null){
            alert('용량값을 입력하세요.');
            return false;
        }
        if(this.dataPage.cpctyVal < 0.1){
            alert('용량은 0.1이상만 입력가능 합니다.');
            return false;
        }
        return true;
    }

    saveDetail(): void{
        if(this.validateDetail()){
            this.isSpin = true;
            this._popup.iptGrarulerTanvolProcess(this.dataPage).subscribe((data)=>{
                this.saveConfirm();
            },(err)=>{this.isSpin = false;});
        }
    }

    async saveConfirm(): Promise<any>{
        this.isSpin = true;
        if(this.dataMain.fomConfmSn === null || this.dataMain.fomConfmSn === 0){
            let result: CopyFormSent2014 = new CopyFormSent2014();
            result.mrnrSeCode = this.dataMain.mrnrSeCode;
            result.gubun = 1;
            result.athrzSn = this.dataMain.athrzSn;
            result.athrzDetailSn = this.dataMain.athrzDetailSn;
            result.userId = this._auth.userOnl;
            const dt = await this._inspection.copyFormSent2014Ath(result).toPromise();
            if (dt.stndrdNm != null) {
                // eslint-disable-next-line prefer-const
                let stndrdNms =dt.stndrdNm.split(',');
                // eslint-disable-next-line @typescript-eslint/prefer-for-of
                for (let i = 0; i < stndrdNms.length; i++) {
                    if (stndrdNms[i] !== '') {
                        this.tempSel.push(stndrdNms[i]);
                    }
                }
            }
            this.isSpin = false;
            this.close();
        }else{
            let result: CopyFormSent2014 = new CopyFormSent2014();
            result.fomConfmSn = this.dataMain.fomConfmSn;
            result.gubun = 1;
            result.athrzSn = this.dataMain.athrzSn;
            result.athrzDetailSn = this.dataMain.athrzDetailSn;
            result.userId = this._auth.userOnl;
            const dt = await this._inspection.copyFormSent2014(result).toPromise();
            if (dt.stndrdNm != null) {
                // eslint-disable-next-line prefer-const
                let stndrdNms =dt.stndrdNm.split(',');
                // eslint-disable-next-line @typescript-eslint/prefer-for-of
                for (let i = 0; i < stndrdNms.length; i++) {
                    if (stndrdNms[i] !== '') {
                        this.tempSel.push(stndrdNms[i]);
                    }
                }
            }
            this.isSpin = false;
            this.close();
        }
    }


    close(): void{
        this.drawerRef.close(this.tempSel);
    }
}
