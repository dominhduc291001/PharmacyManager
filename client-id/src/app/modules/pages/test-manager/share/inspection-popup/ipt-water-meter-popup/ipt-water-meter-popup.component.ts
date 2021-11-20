/* eslint-disable prefer-const */
import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { IptWaterMeterModel } from 'app/core/models/inspection-popup/ipt-watermeter-model';
import { AthrzDetailRegist } from 'app/core/models/test-share-models/athrz-detail-regist';
import { CopyFormSent2014 } from 'app/core/models/test-share-models/copy-form-sent-2014';
import { InspectionPopupService } from 'app/core/services/inspection-popup.service';
import { InspectionService } from 'app/core/services/inspection.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
    selector     : 'ipt-water-meter-popup',
    templateUrl  : './ipt-water-meter-popup.component.html',
    styleUrls    : ['../inspection-popup.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class IptWaterMeterPopupComponent implements OnInit, AfterContentInit
{
    @Input()dataMain: AthrzDetailRegist;
    dataWater: IptWaterMeterModel = new IptWaterMeterModel();
    isSpin = false;
    tempSel = [];
    cbMxmmFluxRateVal: number = -1;
    constructor(private _popup: InspectionPopupService,
        private _auth: AuthService,
        private _inspection: InspectionService, private drawerRef: NzDrawerRef<string[]>){}
    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        this.isSpin = true;
        this._popup.iptWatermeterPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data: IptWaterMeterModel)=>{
            this.dataWater = data;
            this.isSpin = false;
        },(err)=>{this.isSpin = false;});
    }

    validateDetail(): any{
        if(this.cbMxmmFluxRateVal !== -1){
            this.dataWater.iptWaterMeterT.mxmmFluxRateVal = this.cbMxmmFluxRateVal;
        }
        if(this.dataWater.iptWaterMeterT.fluxFomCode === null || this.dataWater.iptWaterMeterT.fluxFomCode === ''){
            alert('유량부 형식을 선택하세요.');
            return false;
        }
        if(this.dataWater.iptWaterMeterT.innerFomCode === null || this.dataWater.iptWaterMeterT.innerFomCode === ''){
            alert('내갑형식을 선택하세요.');
            return false;
        }
        if(this.dataWater.iptWaterMeterT.waterMeterstrctCode === null || this.dataWater.iptWaterMeterT.waterMeterstrctCode === ''){
            alert('구조를 선택하세요.');
            return false;
        }
        if(this.dataWater.iptWaterMeterT.prcsdgLevelCode === null || this.dataWater.iptWaterMeterT.prcsdgLevelCode === ''){
            alert('정밀도 등급을 선택하세요.');
            return false;
        }
        if(this.dataWater.iptWaterMeterT.nmNmValue === null){
            alert('호칭이름을 입력하세요.');
            return false;
        }
        if(this.dataWater.iptWaterMeterT.envrnCndCode === null ){
            alert('환경조건을 선택하세요.');
            return false;
        }
        if(this.dataWater.iptWaterMeterT.mxmmFluxVal === null ){
            alert('최대유량을 입력하세요.');
            return false;
        }
        if(this.dataWater.iptWaterMeterT.tranFluxRateVal === null ){
            alert('전이유량비를 입력하세요.');
            return false;
        }
        if(this.dataWater.iptWaterMeterT.mxmmFluxRateVal === null ){
            alert('최대유량비를 입력하세요.');
            return false;
        }
        if(this.dataWater.iptWaterMeterT.nmNmValue < 0.1 ){
            alert('호칭이름은 0.1 이상만 가능합니다.');
            return false;
        }
        if(this.dataWater.iptWaterMeterT.mxmmFluxVal < 0.1 ){
            alert('최대유량은 0.1 이상만 가능합니다.');
            return false;
        }
        if(this.dataWater.iptWaterMeterT.tranFluxRateVal < 0 ){
            alert('전이유량비는 0 이상만 가능합니다.');
            return false;
        }
        if(this.dataWater.iptWaterMeterT.mxmmFluxVal < 0.1 ){
            alert('최대유량비는 0.1 이상만 가능합니다.');
            return false;
        }
        return true;
    }

    reData(): void{
        for(let item of this.dataWater.fomCodeList){
            if(this.dataWater.iptWaterMeterT.fluxFomCode === item.bsisCode){
                this.dataWater.iptWaterMeterT.fluxFomCodeName = item.bsisCodeNm;
            }
        }
        for(let item of this.dataWater.innerFomCodeList){
            if(this.dataWater.iptWaterMeterT.innerFomCode === item.bsisCode){
                this.dataWater.iptWaterMeterT.innerFomCodeName = item.bsisCodeNm;
            }
        }
        for(let item of this.dataWater.strctCodeList){
            if(this.dataWater.iptWaterMeterT.waterMeterstrctCode === item.bsisCode){
                this.dataWater.iptWaterMeterT.waterMeterstrctCodeName = item.bsisCodeNm;
            }
        }
    }

    saveDetail(): void{
        if(this.validateDetail()){
            this.isSpin = true;
            this.reData();
            this._popup.iptWatermeterProcess(this.dataWater.iptWaterMeterT).subscribe((data)=>{
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
