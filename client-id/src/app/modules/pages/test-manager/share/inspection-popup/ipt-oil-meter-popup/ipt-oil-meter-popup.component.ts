/* eslint-disable prefer-const */
import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { IptOilMeterModel } from 'app/core/models/inspection-popup/ipt-oilmeter-model';
import { AthrzDetailRegist } from 'app/core/models/test-share-models/athrz-detail-regist';
import { CopyFormSent2014 } from 'app/core/models/test-share-models/copy-form-sent-2014';
import { InspectionPopupService } from 'app/core/services/inspection-popup.service';
import { InspectionService } from 'app/core/services/inspection.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
    selector     : 'ipt-oil-meter-popup',
    templateUrl  : './ipt-oil-meter-popup.component.html',
    styleUrls    : ['../inspection-popup.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class IptOilMeterPopupComponent implements OnInit, AfterContentInit
{
    @Input()dataMain: AthrzDetailRegist;
    dataOil: IptOilMeterModel = new IptOilMeterModel();
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
        this._popup.iptOilMeterPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data: IptOilMeterModel)=>{
            this.dataOil = data;
            this.isSpin = false;
        },(err)=>{this.isSpin = false;});
    }

    validateDetail(): any{
        if(this.dataOil.iptOilmeterT.fomCode === null || this.dataOil.iptOilmeterT.fomCode === ''){
            alert('형식을 선택해주십시요.');
            return false;
        }
        if(this.dataOil.iptOilmeterT.strctCode === null || this.dataOil.iptOilmeterT.strctCode === ''){
            alert('구조를 선택해주십시요.');
            return false;
        }
        if(this.dataOil.iptOilmeterT.modelNm === null){
            alert('모델명을 입력해주십시요.');
            return false;
        }
        if(this.dataOil.iptOilmeterT.cirDmVal === null){
            alert('호칭지름을 입력해주십시요.');
            return false;
        }
        if(this.dataOil.iptOilmeterT.envrnCndCode === null || this.dataOil.iptOilmeterT.envrnCndCode === ''){
            alert('환경조건을 선택해주십시요.');
            return false;
        }
        if(this.dataOil.iptOilmeterT.cirDmVal < 0.1){
            alert('호칭지름은 0.1이상만 입력 가능합니다.');
            return false;
        }
        if(this.dataOil.iptOilmeterT.cirDmVal > 100){
            alert('호칭지름은 100 이하만 0.1이상만 입력 가능합니다.');
            return false;
        }
        return true;
    }

    reData(): void{

        for(let item of this.dataOil.fomCodeList){
            if(this.dataOil.iptOilmeterT.fomCode === item.bsisCode){
                this.dataOil.iptOilmeterT.fomCodeName = item.bsisCodeNm;
            }
        }
    }

    saveDetail(): void{
        if(this.validateDetail()){
            this.isSpin = true;
            this.reData();
            this._popup.iptOilMeterProcess(this.dataOil.iptOilmeterT).subscribe((data)=>{
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
