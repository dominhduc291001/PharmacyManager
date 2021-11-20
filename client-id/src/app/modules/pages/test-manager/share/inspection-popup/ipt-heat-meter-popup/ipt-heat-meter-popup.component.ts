/* eslint-disable prefer-const */
import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { IptHeatMeterModel } from 'app/core/models/inspection-popup/ipt-heatmeter-model';
import { AthrzDetailRegist } from 'app/core/models/test-share-models/athrz-detail-regist';
import { CopyFormSent2014 } from 'app/core/models/test-share-models/copy-form-sent-2014';
import { InspectionPopupService } from 'app/core/services/inspection-popup.service';
import { InspectionService } from 'app/core/services/inspection.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
    selector     : 'ipt-heat-meter-popup',
    templateUrl  : './ipt-heat-meter-popup.component.html',
    styleUrls    : ['../inspection-popup.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class IptHeatMeterPopupComponent implements OnInit, AfterContentInit
{
    @Input()dataMain: AthrzDetailRegist;
    dataPage: IptHeatMeterModel = new IptHeatMeterModel();
    isSpin = false;
    tempSel = [];
    fluxFomCodeList = [
        {value: 'AA201001', name:'접선류 임펠러식'},
        {value: 'AA201002', name:'수직 월트만식'},
        {value: 'AA201003', name:'초음파식'},
        {value: 'AA201004', name:'전자기식'}
    ];
    innerFomCodeList = [
        {value: 'AA201001', name:'복갑'},
        {value: 'AA201002', name:'단갑'},
        {value: 'AA201003', name:'해당없음'}
    ];
    kndCodeList = [
        {value: 'AA203001', name:'조합형'},
        {value: 'AA203002', name:'혼합형'}
    ];
    fluxLevelCode = [
        {value: 'AA204001', name:'1'},
        {value: 'AA204002', name:'2'},
        {value: 'AA204003', name:'3'}
    ];
    fluxEnvrnGradCode = [
        {value: 'AA206001', name:'A형'},
        {value: 'AA206002', name:'B형'},
        {value: 'AA206003', name:'C형'}
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
        this._popup.iptHeatMeterPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data: IptHeatMeterModel)=>{
            this.dataPage = data;
            this.isSpin = false;
        },(err)=>{this.isSpin = false;});
    }

    validateDetail(): any{
        if(this.dataPage.fluxFomCode === null || this.dataPage.fluxFomCode === ''){
            alert('유량부 형식을 입력하십시오.');
            return false;
        }
        if(this.dataPage.innerFomCode === null || this.dataPage.innerFomCode === ''){
            alert('내갑형식을 입력하십시오.');
            return false;
        }
        if(this.dataPage.kndCode === null || this.dataPage.kndCode === ''){
            alert('종류를 입력하십시오.');
            return false;
        }
        if(this.dataPage.fluxLevelCode === null || this.dataPage.fluxLevelCode === ''){
            alert('유량부등급을 입력하십시오.');
            return false;
        }
        if(this.dataPage.fluxNmNmValue === null){
            alert('호칭이름을 입력하십시오.');
            return false;
        }
        if(this.dataPage.fluxNmNmValue < 0.1){
            alert('호칭이름은 0.1이상만 가능합니다.');
            return false;
        }
        if(this.dataPage.fluxEnvrnGradCode === null || this.dataPage.fluxEnvrnGradCode === ''){
            alert('환경등급을 입력하십시오.');
            return false;
        }
        if(this.dataPage.calcTmstFomNm === null || this.dataPage.calcTmstFomNm === ''){
            alert('감온부 형식을 입력하십시오.');
            return false;
        }
        if(this.dataPage.calcEnvrnGradCode === null || this.dataPage.calcEnvrnGradCode === ''){
            alert('환경등급을 입력하십시오.');
            return false;
        }
        if(this.dataPage.calcTpLimitNm === null || this.dataPage.calcTpLimitNm === ''){
            alert('"온도한계를 입력하십시오.');
            return false;
        }
        if(this.dataPage.overFluxVal === null){
            alert('과부하 유량을 입력하십시오.');
            return false;
        }
        if(this.dataPage.overFluxVal < 0.1){
            alert('과부하 유량은 0.1이상만 가능합니다.');
            return false;
        }
        if(this.dataPage.mxmmFluxVal === null){
            alert('최대유량을 입력하십시오.');
            return false;
        }
        if(this.dataPage.mxmmFluxVal < 0.1){
            alert('최대유량은 0.1이상만 가능합니다.');
            return false;
        }
        if(this.dataPage.mummFluxVal === null){
            alert('최소유량을 입력하십시오.');
            return false;
        }
        return true;
    }

    reData(): void{
        for(let item of this.fluxFomCodeList){
            if(this.dataPage.fluxFomCode === item.value){
                this.dataPage.fluxFomCodeName = item.name;
            }
        }
        for(let item of this.innerFomCodeList){
            if(this.dataPage.innerFomCode === item.value){
                this.dataPage.innerFomCodeName = item.name;
            }
        }
        for(let item of this.kndCodeList){
            if(this.dataPage.kndCode === item.value){
                this.dataPage.kndCodeName = item.name;
            }
        }
        for(let item of this.fluxLevelCode){
            if(this.dataPage.fluxLevelCode === item.value){
                this.dataPage.fluxLevelCodeName = item.name;
            }
        }
        for(let item of this.fluxEnvrnGradCode){
            if(this.dataPage.calcEnvrnGradCode === item.value){
                this.dataPage.calcEnvrnGradCodeName = item.name;
            }
        }
        for(let item of this.fluxEnvrnGradCode){
            if(this.dataPage.fluxEnvrnGradCode === item.value){
                this.dataPage.fluxEnvrnGradCodeName = item.name;
            }
        }
    }

    saveDetail(): void{
        if(this.validateDetail()){
            this.isSpin = true;
            this.reData();
            this._popup.iptHeatMeterProcess(this.dataPage).subscribe((data)=>{
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
