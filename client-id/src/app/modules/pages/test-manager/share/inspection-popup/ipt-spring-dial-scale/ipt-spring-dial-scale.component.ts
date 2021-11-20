/* eslint-disable prefer-const */
import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { AccrcyGradCode } from 'app/core/models/inspection-popup/ipt-platform-model';
import { IptSprdscPlfrmdscDetailT, IptSpringDialScaleModel, IptSpringDialScaleSave, ScSeCodeList } from 'app/core/models/inspection-popup/ipt-spring-dial-scale-model';
import { SpringDialSecodeSave } from 'app/core/models/inspection-popup/ipt-spring-dial-secode';
import { AthrzDetailRegist } from 'app/core/models/test-share-models/athrz-detail-regist';
import { CopyFormSent2014 } from 'app/core/models/test-share-models/copy-form-sent-2014';
import { InspectionPopupService } from 'app/core/services/inspection-popup.service';
import { InspectionService } from 'app/core/services/inspection.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
    selector     : 'ipt-spring-dial-scale',
    templateUrl  : './ipt-spring-dial-scale.component.html',
    styleUrls    : ['../inspection-popup.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class IptSpringDialScaleComponent implements OnInit, AfterContentInit
{
    @Input()dataMain: AthrzDetailRegist;
    dataPage: IptSprdscPlfrmdscDetailT = new IptSprdscPlfrmdscDetailT();
    dataDialScale: IptSprdscPlfrmdscDetailT[] = [];
    selectAccrcyGrad: AccrcyGradCode[] = [];
    selectScSeCode: ScSeCodeList[] = [];
    isSpin = false;
    _scSecode = '';
    _secodeName = '';
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
    tempSel = [];
    constructor(private _popup: InspectionPopupService, private _auth: AuthService, private _inspection: InspectionService,private drawerRef: NzDrawerRef<string[]>){}

    ngOnInit(): void {
    }
    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        this.isSpin = true;
        this._popup.iptSpringDialScalesPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data: IptSpringDialScaleModel)=>{
            this.dataPage = data.iptSprdscPlfrmdscDetailT;
            this.selectAccrcyGrad = data.accrcyGradCodeList;
            this.dataDialScale = data.iptSprdscPlfrmdscDetailListT;
            this.selectScSeCode = data.scSeCodeList;
            this.dataPage.athrzSn = data.iptSprdscPlfrmdscT.athrzSn;
            this.dataPage.athrzDetailSn = data.iptSprdscPlfrmdscT.athrzDetailSn;
            this._scSecode = data.iptSprdscPlfrmdscT.scSeCode;
            this._secodeName = data.iptSprdscPlfrmdscT.scSeCodeName;
            this.isSpin = false;
        });
    }

    saveSecode(): any{
        if(this._scSecode === null || this._scSecode ===''){
            alert('저울종류를 선택하여 주십시오.');
            return false;
        }else{
            this.isSpin = true;
            for(const item of  this.selectScSeCode){
                if(item.bsisCode === this._scSecode){
                    this._secodeName = item.bsisCodeNm;
                }
            }
            let dataSave: SpringDialSecodeSave = new SpringDialSecodeSave();
            dataSave.athrzSn = this.dataMain.athrzSn;
            dataSave.athrzDetailSn = this.dataMain.athrzDetailSn;
            dataSave.fomNm = this.dataPage.fomNm;
            dataSave.scSeCode = this._scSecode;
            dataSave.scSeCodeName = this._secodeName;
            this._popup.iptSpringDialScalesProcess(dataSave).subscribe((data)=>{
                this.isSpin = false;
            },(err)=>{
                this.isSpin = false;
            });
        }
    }

    detailSave(): any{
        if(this.validateData() === true){
            this.isSpin = true;
            let dataSave: IptSpringDialScaleSave = new IptSpringDialScaleSave();
            dataSave.iptSprdscPlfrmdscT.athrzSn = this.dataMain.athrzSn;
            dataSave.iptSprdscPlfrmdscT.athrzDetailSn = this.dataMain.athrzDetailSn;
            dataSave.iptSprdscPlfrmdscT.scSeCode = this._scSecode;
            dataSave.iptSprdscPlfrmdscT.scSeCodeName = this._secodeName;
            dataSave.iptSprdscPlfrmdscT.fomNm = this.dataPage.fomNm;
            dataSave.iptSprdscPlfrmdscDetailT = this.dataPage;
            for(let item of this.selectUnit){
                if(this.dataPage.mummCpctyValUnitCd === item.value){
                    this.dataPage.mummCpctyValUnitCdName = item.name;
                }
            }
            for(let item of this.selectUnit){
                if(this.dataPage.mxCpctyValUnitCode === item.value){
                    this.dataPage.mxCpctyValUnitCodeName = item.name;
                }
            }
            for(let item of this.selectUnit){
                if(this.dataPage.athrzDvsnValUnitCd === item.value){
                    this.dataPage.athrzDvsnValUnitCdName = item.name;
                }
            }
            this._popup.iptSpringDialScalesDetailProcess(dataSave).subscribe((data1)=>{
                this._popup.iptSpringDialScalesPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data: IptSpringDialScaleModel)=>{
                    this.dataDialScale = data.iptSprdscPlfrmdscDetailListT;
                    this.clear();
                    this.dataPage.athrzSn = data.iptSprdscPlfrmdscT.athrzSn;
                    this.dataPage.athrzDetailSn = data.iptSprdscPlfrmdscT.athrzDetailSn;
                    this.isSpin = false;
                },(err)=>{
                    this.isSpin = false;
                });
            },(err)=>{
                this.isSpin = false;
            });
        }else{
            alert('저울종류를 입력하여 주십시오.');
        }
    }

    clear(): any{
        this.dataPage = new IptSprdscPlfrmdscDetailT();
        this.dataPage.athrzSn = this.dataMain.athrzSn;
        this.dataPage.athrzDetailSn = this.dataMain.athrzDetailSn;
    }

    validateData(): any{
        if(this.dataPage.accrcyGradCode === null || this.dataPage.accrcyGradCode === ''){
            alert('정확도 등급을 입력하여 주십시오.');
            return false;
        }
        if(this.dataPage.mxmmCpctyVal === 0 || this.dataPage.mxmmCpctyVal === null){
            alert('최대용량을 입력하여 주십시오.');
            return false;
        }
        if(this.dataPage.mxmmCpctyVal !== 0 && this.dataPage.mxmmCpctyVal < 0.1){
            alert('최대용량은 0.1이상만 입력 가능합니다.');
        }
        if(this.dataPage.mxCpctyValUnitCode === null || this.dataPage.mxCpctyValUnitCode === ''){
            alert('최대용량 단위를 입력하여 주십시오.');
            return false;
        }
        if(this.dataPage.mummCpctyVal === 0 || this.dataPage.mummCpctyVal === null){
            alert('최소용량을 입력하여 주십시오.');
            return false;
        }
        if(this.dataPage.mummCpctyVal !== 0 && this.dataPage.mummCpctyVal < 0.1){
            alert('최소용량은 0.1이상만 입력 가능합니다.');
            return false;
        }
        if(this.dataPage.athrzDivisionVal === 0 || this.dataPage.athrzDivisionVal === null){
            alert('검정눈금을 입력하여 주십시오.');
            return false;
        }
        if(this.dataPage.athrzDivisionVal !== 0 && this.dataPage.athrzDivisionVal < 0.1){
            alert('검정눈금은 0.1이상만 입력 가능합니다.');
            return false;
        }
        if(this.dataPage.athrzDvsnValUnitCd === null || this.dataPage.athrzDvsnValUnitCd === ''){
            alert('검정눈금 단위를 입력하여 주십시오.');
            return false;
        }
        if(this.dataPage.athrzDivisionCo ===0 || this.dataPage.athrzDivisionCo === null){
            alert('검정눈금 수를 입력하여 주십시오.');
            return false;
        }
        if(this.dataPage.athrzDivisionCo !==0 && this.dataPage.athrzDivisionCo < 0.1){
            alert('검정눈금수는 0.1이상만 입력 가능합니다.');
            return false;
        }

        let minText = this.dataPage.mummCpctyVal;
        let minCode = this.dataPage.mummCpctyValUnitCd;
        let maxText = this.dataPage.mxmmCpctyVal;
        let maxCode = this.dataPage.mxCpctyValUnitCode;

        switch (true) {
            case (minCode === 'AC004001'):
                minText = minText * 1000000;
                break;
            case (minCode === 'AC004002'):
                minText = minText * 1000;
                break;
            case (minCode === 'AC004003'):
                minText = minText * 1;
                break;
            case (minCode === 'AC004004'):
                minText = minText / 1000;
                break;
            default:
                minText = minText;
        }

        switch (true) {
            case (maxCode === 'AC004001'):
                maxText = maxText * 1000000;
                break;
            case (maxCode === 'AC004002'):
                maxText = maxText * 1000;
                break;
            case (maxCode === 'AC004003'):
                maxText = maxText * 1;
                break;
            case (maxCode === 'AC004004'):
                maxText = maxText / 1000;
                break;
            default:
                maxText = maxText;
        }
        if(maxText - minText < 0){
            alert('최소용량은 최대용량보다 적어야 합니다.');
            return false;
        }

        return true;
    }

    delDetail(delData: IptSprdscPlfrmdscDetailT): any{
        if(confirm('삭제하시겠습니까?')){
            this.isSpin = true;
            this._popup.iptSpringDialScalesDetailDelete(delData).subscribe((s)=>{
                this._popup.iptSpringDialScalesPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data: IptSpringDialScaleModel)=>{
                    this.dataDialScale = data.iptSprdscPlfrmdscDetailListT;
                    this.isSpin = false;
                },(err)=>{
                    this.isSpin = false;
                });
            },(err)=>{
                this.isSpin = false;
            });
        }
    }
    editDetail(editData: IptSprdscPlfrmdscDetailT): void{
        this.dataPage = editData;
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
