/* eslint-disable prefer-const */
import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { IptWeightModel } from 'app/core/models/inspection-popup/ipt-weight-model';
import { AthrzDetailRegist } from 'app/core/models/test-share-models/athrz-detail-regist';
import { CopyFormSent2014 } from 'app/core/models/test-share-models/copy-form-sent-2014';
import { InspectionPopupService } from 'app/core/services/inspection-popup.service';
import { InspectionService } from 'app/core/services/inspection.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
    selector     : 'ipt-weight-popup',
    templateUrl  : './ipt-weight-popup.component.html',
    styleUrls    : ['../inspection-popup.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class IptWeightPopupComponent implements OnInit, AfterContentInit
{
    @Input()dataMain: AthrzDetailRegist;
    dataWeightPopup: IptWeightModel = new IptWeightModel();
    isSpin = false;
    tempSel = [];
    selectUnit = [
        {
            value: 'AC004001',
            name: 't'
        },
        {
            value: 'AC004002',
            name: 'kg'
        },
        {
            value: 'AC004003',
            name: 'g'
        },
        {
            value: 'AC004004',
            name: 'mg'
        }
    ];
    constructor(private _popup: InspectionPopupService,
        private _auth: AuthService,
         private _inspection: InspectionService, private drawerRef: NzDrawerRef<string[]>){}

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        this.isSpin = true;
        this._popup.iptWeightPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data: IptWeightModel)=>{
            this.dataWeightPopup = data;
            this.isSpin = false;
        },(err)=>{this.isSpin = false;});
    }

    validateDetail(): any{
        if(this.dataWeightPopup.iptWeightT.fomNm === null || this.dataWeightPopup.iptWeightT.fomNm === ''){
            alert('형식명을 입력하여 주십시오.');
            return false;
        }
        if(this.dataWeightPopup.iptWeightT.gradCode === null || this.dataWeightPopup.iptWeightT.gradCode === ''){
            alert('등급을 선택하세요.');
            return false;
        }
        if(this.dataWeightPopup.iptWeightT.tyCode === null || this.dataWeightPopup.iptWeightT.tyCode === ''){
            alert('구성을 선택하세요.');
            return false;
        }
        if(this.dataWeightPopup.iptWeightT.pceGngchVal < 0.1 && this.dataWeightPopup.iptWeightT.tyCode === 'AA108001'){
            alert('공칭값은 0.1이상만 입력가능합니다.');
            return false;
        }
        if(this.dataWeightPopup.iptWeightT.setGngchMxmmVal < 0.1 && this.dataWeightPopup.iptWeightT.tyCode === 'AA108002'){
            alert('공칭값(최소)은 0.1이상만 입력가능합니다.');
            return false;
        }
        if(this.dataWeightPopup.iptWeightT.setGngchMummVal < 0.1 && this.dataWeightPopup.iptWeightT.tyCode === 'AA108002'){
            alert('공칭값(최소)은 0.1이상만 입력가능합니다.');
            return false;
        }
        return true;
    }

    reData(): void{
        if(this.dataWeightPopup.iptWeightT.setGngchMummVal === null){
            this.dataWeightPopup.iptWeightT.setGngchMummVal = 0;
        }
        if(this.dataWeightPopup.iptWeightT.setGngchMxmmVal === null){
            this.dataWeightPopup.iptWeightT.setGngchMxmmVal = 0;
        }
        if(this.dataWeightPopup.iptWeightT.pceGngchVal === null){
            this.dataWeightPopup.iptWeightT.pceGngchVal = 0;
        }
        for(let item of this.dataWeightPopup.gradCodeList){
            if(this.dataWeightPopup.iptWeightT.gradCode === item.bsisCode){
                this.dataWeightPopup.iptWeightT.gradCodeName = item.bsisCodeNm;
            }
        }

        for(let item of this.dataWeightPopup.tyCodeList){
            if(this.dataWeightPopup.iptWeightT.tyCode === item.bsisCode){
                this.dataWeightPopup.iptWeightT.tyCodeName = item.bsisCodeNm;
            }
        }

        for(let item of this.selectUnit){
            if(this.dataWeightPopup.iptWeightT.pceGngchValUnitCode === item.value){
                this.dataWeightPopup.iptWeightT.pceGngchValUnitCodeName = item.name;
            }
        }

        for(let item of this.selectUnit){
            if(this.dataWeightPopup.iptWeightT.setGngchMummValUnitCd === item.value){
                this.dataWeightPopup.iptWeightT.setGngchMummValUnitCdName = item.name;
            }
        }

        for(let item of this.selectUnit){
            if(this.dataWeightPopup.iptWeightT.setGngchMxmmValUnitCd === item.value){
                this.dataWeightPopup.iptWeightT.setGngchMxmmValUnitCdName = item.name;
            }
        }
    }

    saveDetail(): void{
        if(this.validateDetail()){
            this.isSpin = true;
            this.reData();
            this._popup.iptWeightProcess(this.dataWeightPopup.iptWeightT).subscribe((data)=>{
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
