/* eslint-disable prefer-const */
import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { IptHotWaterMeterModel } from 'app/core/models/inspection-popup/ipt-hotwater-meter-model';
import { AthrzDetailRegist } from 'app/core/models/test-share-models/athrz-detail-regist';
import { CopyFormSent2014 } from 'app/core/models/test-share-models/copy-form-sent-2014';
import { InspectionPopupService } from 'app/core/services/inspection-popup.service';
import { InspectionService } from 'app/core/services/inspection.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
    selector     : 'ipt-hot-water-meter',
    templateUrl  : './ipt-hot-water-meter.component.html',
    styleUrls    : ['../inspection-popup.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class IptHotWaterMeterComponent implements OnInit, AfterContentInit
{
    @Input()dataMain: AthrzDetailRegist;
    dataWater: IptHotWaterMeterModel = new IptHotWaterMeterModel();
    isSpin = false;
    tempSel = [];
    gradCode1 = [
        {value: 'AA326001', name: '1a'},
        {value: 'AA326002', name: '1b'},
        {value: 'AA326003', name: '1c'},
        {value: 'AA326004', name: '1d'}
    ];
    gradCode2 = [
        {value: 'AA326005', name: '2a'},
        {value: 'AA326006', name: '2b'},
        {value: 'AA326007', name: '2c'},
        {value: 'AA326008', name: '2d'}
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
        this._popup.iptHotWaterMeterPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data: IptHotWaterMeterModel)=>{
            this.dataWater = data;
            this.isSpin = false;
        },(err)=>{this.isSpin = false;});
    }

    changeTpForm(ev: any): void{
        if(ev.value === ''){
            this.dataWater.iptHotWaterMeterT.tpGradCode = '';
        }
    }

    validateDetail(): any{
        if(this.dataWater.iptHotWaterMeterT.fluxFomCode === null || this.dataWater.iptHotWaterMeterT.fluxFomCode === ''){
            alert('유량부 형식을 입력하세요.');
            return false;
        }
        if(this.dataWater.iptHotWaterMeterT.hotWaterMeterstrctCode === null || this.dataWater.iptHotWaterMeterT.hotWaterMeterstrctCode === ''){
            alert('구조를 입력하세요.');
            return false;
        }
        if(this.dataWater.iptHotWaterMeterT.tpFomSeCode === null || this.dataWater.iptHotWaterMeterT.tpFomSeCode === ''){
            alert('온도등급 형식을 입력하세요.');
            return false;
        }
        if(this.dataWater.iptHotWaterMeterT.tpGradCode === null || this.dataWater.iptHotWaterMeterT.tpGradCode === ''){
            alert('온도등급을 입력하세요.');
            return false;
        }
        if(this.dataWater.iptHotWaterMeterT.nmNmValue === null){
            alert('호칭이름을 입력하세요.');
            return false;
        }
        if(this.dataWater.iptHotWaterMeterT.envrnCndCode === null ){
            alert('환경조건을 입력하세요.');
            return false;
        }
        if(this.dataWater.iptHotWaterMeterT.mxmmFluxVal === null ){
            alert('최대유량을 입력하세요.');
            return false;
        }
        if(this.dataWater.iptHotWaterMeterT.tranFluxVal === null ){
            alert('전이유량을 입력하세요.');
            return false;
        }
        if(this.dataWater.iptHotWaterMeterT.mummFluxVal === null ){
            alert('최소유량을 입력하세요');
            return false;
        }
        if(this.dataWater.iptHotWaterMeterT.nmNmValue < 0.1 ){
            alert('호칭이름은 0.1 이상만 가능합니다.');
            return false;
        }
        if(this.dataWater.iptHotWaterMeterT.mxmmFluxVal < 0.1 ){
            alert('최대유량은 0.1 이상만 가능합니다.');
            return false;
        }
        if(this.dataWater.iptHotWaterMeterT.mxmmFluxVal > 2000 ){
            alert('최대유량은 2000 이하만 가능합니다.');
            return false;
        }
        if(this.dataWater.iptHotWaterMeterT.tranFluxVal < 0.01 ){
            alert('전이유량은 0.01 이상만 가능합니다.');
            return false;
        }
        if(this.dataWater.iptHotWaterMeterT.tranFluxVal > 1000 ){
            alert('전이유량은 1000 이상만 가능합니다.');
            return false;
        }
        if(this.dataWater.iptHotWaterMeterT.mxmmFluxVal < 0.01 ){
            alert('최소유량은 0.01 이상만 가능합니다.');
            return false;
        }
        if(this.dataWater.iptHotWaterMeterT.mxmmFluxVal > 1000 ){
            alert('최소유량은 1000 이상만 가능합니다.');
            return false;
        }
        return true;
    }

    reData(): void{
        for(let item of this.dataWater.fomCodeList){
            if(this.dataWater.iptHotWaterMeterT.fluxFomCode === item.bsisCode){
                this.dataWater.iptHotWaterMeterT.fluxFomCodeName = item.bsisCodeNm;
            }
        }
        for(let item of this.dataWater.envrnCndCodeList){
            if(this.dataWater.iptHotWaterMeterT.envrnCndCode === item.bsisCode){
                this.dataWater.iptHotWaterMeterT.envrnCndCodeName = item.bsisCodeNm;
            }
        }
        for(let item of this.dataWater.strctCodeList){
            if(this.dataWater.iptHotWaterMeterT.hotWaterMeterstrctCode === item.bsisCode){
                this.dataWater.iptHotWaterMeterT.hotWaterMeterstrctCodeName = item.bsisCodeNm;
            }
        }
        for(let item of this.dataWater.tpFomSeCodeList){
            if(this.dataWater.iptHotWaterMeterT.tpFomSeCode === item.bsisCode){
                this.dataWater.iptHotWaterMeterT.tpFomSeCodeName = item.bsisCodeNm;
            }
        }
        for(let item of this.gradCode1){
            if(this.dataWater.iptHotWaterMeterT.tpGradCode === item.value){
                this.dataWater.iptHotWaterMeterT.tpGradCodeName = item.name;
            }
        }
        for(let item of this.gradCode2){
            if(this.dataWater.iptHotWaterMeterT.tpGradCode === item.value){
                this.dataWater.iptHotWaterMeterT.tpGradCodeName = item.name;
            }
        }
    }

    saveDetail(): void{
        if(this.validateDetail()){
            this.isSpin = true;
            this.reData();
            this._popup.iptHotWaterMeterProcess(this.dataWater.iptHotWaterMeterT).subscribe((data)=>{
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
