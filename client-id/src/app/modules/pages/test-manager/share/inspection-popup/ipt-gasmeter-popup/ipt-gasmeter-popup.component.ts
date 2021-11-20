/* eslint-disable prefer-const */
import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { IptGasmeterModel } from 'app/core/models/inspection-popup/ipt-gasmeter-model';
import { AthrzDetailRegist } from 'app/core/models/test-share-models/athrz-detail-regist';
import { CopyFormSent2014 } from 'app/core/models/test-share-models/copy-form-sent-2014';
import { InspectionPopupService } from 'app/core/services/inspection-popup.service';
import { InspectionService } from 'app/core/services/inspection.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
    selector     : 'ipt-gasmeter-popup',
    templateUrl  : './ipt-gasmeter-popup.component.html',
    styleUrls    : ['../inspection-popup.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class IptGasmeterPopupComponent implements OnInit, AfterContentInit
{
    @Input()dataMain: AthrzDetailRegist;
    dataGasmeter: IptGasmeterModel = new IptGasmeterModel();
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
        this._popup.iptGasmeterPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data: IptGasmeterModel)=>{
            this.dataGasmeter = data;
            this.isSpin = false;
        },(err)=>{this.isSpin = false;});
    }

    validateDetail(): any{
        if(this.dataGasmeter.iptGasmeterT.gradCode === null || this.dataGasmeter.iptGasmeterT.gradCode === ''){
            alert('등급을 선택해주세요.');
            return false;
        }
        if(this.dataGasmeter.iptGasmeterT.kndCode === null || this.dataGasmeter.iptGasmeterT.kndCode === ''){
            alert('종류를 입력해주세요.');
            return false;
        }
        if(this.dataGasmeter.iptGasmeterT.prcsdgLevelCode === null || this.dataGasmeter.iptGasmeterT.prcsdgLevelCode === ''){
            alert('등급을 선택해주세요.');
            return false;
        }
        if(this.dataGasmeter.iptGasmeterT.envrnCndCode === null || this.dataGasmeter.iptGasmeterT.envrnCndCode === ''){
            alert('정밀도 등급을 선택해주세요.');
            return false;
        }
        if(this.dataGasmeter.iptGasmeterT.remoteDrctStorageAt === null || this.dataGasmeter.iptGasmeterT.remoteDrctStorageAt === ''){
            alert('원격지시장치를 선택해주세요.');
            return false;
        }
        if(this.dataGasmeter.iptGasmeterT.mxmmFluxVal === null ){
            alert('최대유량을 입력해주세요.');
            return false;
        }
        if(this.dataGasmeter.iptGasmeterT.mummFluxVal === null ){
            alert('최소유량을 입력해주세요.');
            return false;
        }
        if(this.dataGasmeter.iptGasmeterT.tranFluxVal === null ){
            alert('전이유량을 입력해주세요.');
            return false;
        }
        if(this.dataGasmeter.iptGasmeterT.mxmmFluxVal < 0 ){
            alert('최대유량은 0 이상 입력하세요.');
            return false;
        }
        if(this.dataGasmeter.iptGasmeterT.mummFluxVal < 0 ){
            alert('최소유량은 0 이상 입력하세요.');
            return false;
        }
        if(this.dataGasmeter.iptGasmeterT.tranFluxVal < 0 ){
            alert('전이유량은 0 이상 입력하세요.');
            return false;
        }
        return true;
    }

    reData(): void{
        for(let item of this.dataGasmeter.gradCodeList){
            if(this.dataGasmeter.iptGasmeterT.gradCode === item.bsisCode){
                this.dataGasmeter.iptGasmeterT.gradCodeName = item.bsisCodeNm;
            }
        }
        for(let item of this.dataGasmeter.kndCodeList){
            if(this.dataGasmeter.iptGasmeterT.kndCode === item.bsisCode){
                this.dataGasmeter.iptGasmeterT.kndCodeName = item.bsisCodeNm;
            }
        }
    }

    saveDetail(): void{
        if(this.validateDetail()){
            this.isSpin = true;
            this.reData();
            this._popup.iptGasmeterProcess(this.dataGasmeter.iptGasmeterT).subscribe((data)=>{
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
