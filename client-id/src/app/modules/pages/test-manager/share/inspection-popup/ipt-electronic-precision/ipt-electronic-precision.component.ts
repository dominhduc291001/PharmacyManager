/* eslint-disable prefer-const */
import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { IptElectronProcesionModel, IptEltrnPrcsBlDetailT, IptEltrnPrcsBlT, SelectItem } from 'app/core/models/inspection-popup/ipt-electron-precision-model';
import { AthrzDetailRegist } from 'app/core/models/test-share-models/athrz-detail-regist';
import { CopyFormSent2014 } from 'app/core/models/test-share-models/copy-form-sent-2014';
import { InspectionPopupService } from 'app/core/services/inspection-popup.service';
import { InspectionService } from 'app/core/services/inspection.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
    selector     : 'ipt-electronic-precision',
    templateUrl  : './ipt-electronic-precision.component.html',
    styleUrls    : ['../inspection-popup.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class IptElectronicPrecisionComponent implements OnInit, AfterContentInit
{
    @Input()dataMain: AthrzDetailRegist;
    dataPage: IptEltrnPrcsBlDetailT = new IptEltrnPrcsBlDetailT();
    selectAccrcyGrad: SelectItem[] = [];
    selectCtnrCode: SelectItem[] = [];
    selectMesurScope: SelectItem[] = [];
    selectScopeCode: SelectItem[] = [];
    dataElectronic: IptEltrnPrcsBlDetailT[] = [];
    isSpin = false;
    mode = 0;
    isDisabled1 = false;
    isDisabled2 = false;
    tempSel = [];
    selectUnit = [
        {
            bsisCode: 'AC004001',
            bsisCodeNm: 't'
        },
        {
            bsisCode: 'AC004002',
            bsisCodeNm: 'kg'
        },
        {
            bsisCode: 'AC004003',
            bsisCodeNm: 'g'
        },
        {
            bsisCode: 'AC004004',
            bsisCodeNm: 'mg'
        }
    ];
    constructor(private _popup: InspectionPopupService, private _auth: AuthService ,private _inspection: InspectionService,private drawerRef: NzDrawerRef<string[]>){}

    ngOnInit(): void {
    }
    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        this.isSpin = true;
        this._popup.iptElectronicPrecisionPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data: IptElectronProcesionModel) => {
            //this.dataPage = data.iptEltrnPrcsBlT;
            this.dataElectronic = data.iptEltrnPrcsBlTList;
            this.selectAccrcyGrad = data.accrcyGradCodeList;
            this.selectCtnrCode = data.cntnrCodeList;
            this.selectMesurScope = data.mesurScopeCodeList;
            this.selectScopeCode = data.scopeCodeList;
            this.dataPage.athrzSn = data.iptEltrnPrcsBlT.athrzSn;
            this.dataPage.athrzDetailSn = data.iptEltrnPrcsBlT.athrzDetailSn;
            this.isSpin = false;
        },(err)=>{
            this.isSpin = false;
        });
    }

    changeMesur(event: any): void{
        this.mode = 0;
        if(event.value === 'AA329001'){
            this.mode = 1;
            this.isDisabled1 = true;
            this.isDisabled2 = true;
            this.dataPage.iptEltrnPrcsBlDetailListT[1] = new IptEltrnPrcsBlT();
            this.dataPage.iptEltrnPrcsBlDetailListT[2] = new IptEltrnPrcsBlT();
        }
        if(event.value === 'AA329002'){
            this.mode = 2;
            this.isDisabled1 = false;
            this.isDisabled2 = false;
        }
        if(event.value === 'AA329003'){
            this.mode = 3;
            this.isDisabled1 = false;
            this.isDisabled2 = true;
            this.dataPage.iptEltrnPrcsBlDetailListT[2] = new IptEltrnPrcsBlT();
        }
    }

    validateData(): any{
        if(this.dataPage.mesurScopeCode === null || this.dataPage.mesurScopeCode === ''){
            alert('계량범위를 선택하여 주십시오.');
            return false;
        }
        if((this.dataPage.scopeCode === null || this.dataPage.scopeCode === '') && this.mode === 2){
            alert('계량범위를 선택하여 주십시오.');
            return false;
        }
        if(this.dataPage.fomNm === null || this.dataPage.fomNm === ''){
            alert('형식을 입력하여 주십시오.');
            return false;
        }
        if(this.dataPage.iptEltrnPrcsBlDetailListT[0].accrcyGradCode === null || this.dataPage.iptEltrnPrcsBlDetailListT[0].accrcyGradCode === ''){
            alert('정확도 등급을 입력하여 주십시오.');
            return false;
        }
        if(this.dataPage.iptEltrnPrcsBlDetailListT[0].accrcyGradCode === null || this.dataPage.iptEltrnPrcsBlDetailListT[0].accrcyGradCode === ''){
            alert('정확도 등급을 입력하여 주십시오.');
            return false;
        }
        if(this.dataPage.iptEltrnPrcsBlDetailListT[0].mxmmCpctyVal === null || this.dataPage.iptEltrnPrcsBlDetailListT[0].mxmmCpctyVal === 0){
            alert('최대용량을 입력하여 주십시오.');
            return false;
        }
        if(this.dataPage.iptEltrnPrcsBlDetailListT[0].mxmmCpctyVal !== 0 && this.dataPage.iptEltrnPrcsBlDetailListT[0].mxmmCpctyVal <0.1){
            alert('최대용량은 0.1이상만 입력 가능합니다.');
            return false;
        }
        if(this.dataPage.iptEltrnPrcsBlDetailListT[0].mxCpctyValUnitCode === null || this.dataPage.iptEltrnPrcsBlDetailListT[0].mxCpctyValUnitCode === ''){
            alert('최대용량 단위를 입력하여 주십시오.');
            return false;
        }
        if(this.dataPage.iptEltrnPrcsBlDetailListT[0].athrzDivisionVal === null || this.dataPage.iptEltrnPrcsBlDetailListT[0].athrzDivisionVal === 0){
            alert('검정눈금을 입력하여 주십시오.');
            return false;
        }
        if(this.dataPage.iptEltrnPrcsBlDetailListT[0].athrzDivisionVal !== 0 && this.dataPage.iptEltrnPrcsBlDetailListT[0].athrzDivisionVal <0.1){
            alert('검정눈금은 0.1이상만 입력 가능합니다.');
            return false;
        }
        if(this.dataPage.iptEltrnPrcsBlDetailListT[0].athrzDvsnValUnitCd === null || this.dataPage.iptEltrnPrcsBlDetailListT[0].athrzDvsnValUnitCd === ''){
            alert('검정눈금 단위를 입력하여 주십시오.');
            return false;
        }
        if(this.dataPage.iptEltrnPrcsBlDetailListT[0].realDivisionVal === null || this.dataPage.iptEltrnPrcsBlDetailListT[0].realDivisionVal === 0){
            alert('실제눈금을 입력하여 주십시오.');
            return false;
        }
        if(this.dataPage.iptEltrnPrcsBlDetailListT[0].realDivisionVal !== 0 && this.dataPage.iptEltrnPrcsBlDetailListT[0].realDivisionVal <0.1){
            alert('실제눈금은 0.1이상만 입력 가능합니다.');
            return false;
        }
        if(this.dataPage.iptEltrnPrcsBlDetailListT[0].realDvsnValUnitCd === null || this.dataPage.iptEltrnPrcsBlDetailListT[0].realDvsnValUnitCd === ''){
            alert('실제눈금 단위를 입력하여 주십시오.');
            return false;
        }

        let minText = this.dataPage.iptEltrnPrcsBlDetailListT[0].mummCpctyVal;
        let minCode = this.dataPage.iptEltrnPrcsBlDetailListT[0].mummCpctyValUnitCd;
        let maxText = this.dataPage.iptEltrnPrcsBlDetailListT[0].mxmmCpctyVal;
        let maxCode = this.dataPage.iptEltrnPrcsBlDetailListT[0].mxCpctyValUnitCode;

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

    reData(): void{
        for(let i = 0; i<3 ; ++i){
            this.dataPage.iptEltrnPrcsBlDetailListT[i].athrzSn = this.dataMain.athrzSn;
            this.dataPage.iptEltrnPrcsBlDetailListT[i].athrzDetailSn = this.dataMain.athrzDetailSn;
        }
        for(let item of this.selectUnit){
            if(this.dataPage.iptEltrnPrcsBlDetailListT[0].mummCpctyValUnitCd === item.bsisCode){
                this.dataPage.iptEltrnPrcsBlDetailListT[0].mummCpctyValUnitCdName = item.bsisCodeNm;
            }
            if(this.dataPage.iptEltrnPrcsBlDetailListT[1].mummCpctyValUnitCd === item.bsisCode){
                this.dataPage.iptEltrnPrcsBlDetailListT[1].mummCpctyValUnitCdName = item.bsisCodeNm;
            }
            if(this.dataPage.iptEltrnPrcsBlDetailListT[2].mummCpctyValUnitCd === item.bsisCode){
                this.dataPage.iptEltrnPrcsBlDetailListT[2].mummCpctyValUnitCdName = item.bsisCodeNm;
            }
        }
        for(let item of this.selectUnit){
            if(this.dataPage.iptEltrnPrcsBlDetailListT[0].mxCpctyValUnitCode === item.bsisCode){
                this.dataPage.iptEltrnPrcsBlDetailListT[0].mxCpctyValUnitCodeName = item.bsisCodeNm;
            }
            if(this.dataPage.iptEltrnPrcsBlDetailListT[1].mxCpctyValUnitCode === item.bsisCode){
                this.dataPage.iptEltrnPrcsBlDetailListT[1].mxCpctyValUnitCodeName = item.bsisCodeNm;
            }
            if(this.dataPage.iptEltrnPrcsBlDetailListT[2].mxCpctyValUnitCode === item.bsisCode){
                this.dataPage.iptEltrnPrcsBlDetailListT[2].mxCpctyValUnitCodeName = item.bsisCodeNm;
            }
        }
        for(let item of this.selectUnit){
            if(this.dataPage.iptEltrnPrcsBlDetailListT[0].athrzDvsnValUnitCd === item.bsisCode){
                this.dataPage.iptEltrnPrcsBlDetailListT[0].athrzDvsnValUnitCdName = item.bsisCodeNm;
            }
            if(this.dataPage.iptEltrnPrcsBlDetailListT[1].athrzDvsnValUnitCd === item.bsisCode){
                this.dataPage.iptEltrnPrcsBlDetailListT[1].athrzDvsnValUnitCdName = item.bsisCodeNm;
            }
            if(this.dataPage.iptEltrnPrcsBlDetailListT[2].athrzDvsnValUnitCd === item.bsisCode){
                this.dataPage.iptEltrnPrcsBlDetailListT[2].athrzDvsnValUnitCdName = item.bsisCodeNm;
            }
        }
        for(let item of this.selectUnit){
            if(this.dataPage.iptEltrnPrcsBlDetailListT[0].realDvsnValUnitCd === item.bsisCode){
                this.dataPage.iptEltrnPrcsBlDetailListT[0].realDvsnValUnitCdName = item.bsisCodeNm;
            }
            if(this.dataPage.iptEltrnPrcsBlDetailListT[1].realDvsnValUnitCd === item.bsisCode){
                this.dataPage.iptEltrnPrcsBlDetailListT[1].realDvsnValUnitCdName = item.bsisCodeNm;
            }
            if(this.dataPage.iptEltrnPrcsBlDetailListT[2].realDvsnValUnitCd === item.bsisCode){
                this.dataPage.iptEltrnPrcsBlDetailListT[2].realDvsnValUnitCdName = item.bsisCodeNm;
            }
        }
        for(let item of this.selectUnit){
            if(this.dataPage.iptEltrnPrcsBlDetailListT[0].cntnrNmUnitCode === item.bsisCode){
                this.dataPage.iptEltrnPrcsBlDetailListT[0].cntnrNmUnitCodeName = item.bsisCodeNm;
            }
            if(this.dataPage.iptEltrnPrcsBlDetailListT[1].cntnrNmUnitCode === item.bsisCode){
                this.dataPage.iptEltrnPrcsBlDetailListT[1].cntnrNmUnitCodeName = item.bsisCodeNm;
            }
            if(this.dataPage.iptEltrnPrcsBlDetailListT[2].cntnrNmUnitCode === item.bsisCode){
                this.dataPage.iptEltrnPrcsBlDetailListT[2].cntnrNmUnitCodeName = item.bsisCodeNm;
            }
        }
        for(let item of this.selectAccrcyGrad){
            if(this.dataPage.iptEltrnPrcsBlDetailListT[0].accrcyGradCode === item.bsisCode){
                this.dataPage.iptEltrnPrcsBlDetailListT[0].accrcyGradCodeName = item.bsisCodeNm;
            }
            if(this.dataPage.iptEltrnPrcsBlDetailListT[1].accrcyGradCode === item.bsisCode){
                this.dataPage.iptEltrnPrcsBlDetailListT[1].accrcyGradCodeName = item.bsisCodeNm;
            }
            if(this.dataPage.iptEltrnPrcsBlDetailListT[2].accrcyGradCode === item.bsisCode){
                this.dataPage.iptEltrnPrcsBlDetailListT[2].accrcyGradCodeName = item.bsisCodeNm;
            }
        }
        for(let item of this.selectMesurScope){
            if(this.dataPage.mesurScopeCode === item.bsisCode){
                this.dataPage.mesurScopeCodeName = item.bsisCodeNm;
            }
        }
        for(let item of this.selectScopeCode){
            if(this.dataPage.scopeCode === item.bsisCode){
                this.dataPage.scopeCodeName = item.bsisCodeNm;
            }
        }
        if(this.dataPage.scopeCode === null || this.dataPage.scopeCode === ''){
            this.dataPage.scopeCode = 'AA104001';
            this.dataPage.scopeCodeName = '싱글 레인지';

        }
    }

    saveData(): any{
        if(this.validateData() === true){
            this.isSpin = true;
            this.reData();
            this._popup.iptElectronicPrecisionProcess(this.dataPage).subscribe((s)=>{
                this._popup.iptElectronicPrecisionPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data: IptElectronProcesionModel) => {
                    this.dataElectronic = data.iptEltrnPrcsBlTList;
                    this.clear();
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

    editData(data: IptEltrnPrcsBlDetailT): void{
        this.dataPage = data;
        if(this.dataPage.mesurScopeCode === 'AA329001'){
            this.mode = 1;
            this.isDisabled1 = true;
            this.isDisabled2 = true;
        }
        if(this.dataPage.mesurScopeCode === 'AA329002'){
            this.mode = 2;
            this.isDisabled1 = false;
            this.isDisabled2 = false;
        }
        if(this.dataPage.mesurScopeCode === 'AA329003'){
            this.mode = 3;
            this.isDisabled1 = false;
            this.isDisabled2 = true;
        }
    }

    deleteData(data: IptEltrnPrcsBlDetailT): void{
        this.isSpin = true;
        this._popup.iptElectronicPrecisionDelete(data).subscribe((s)=>{
            this._popup.iptElectronicPrecisionPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data1: IptElectronProcesionModel) => {
                this.dataElectronic = data1.iptEltrnPrcsBlTList;
                this.isSpin = false;
            },(err)=>{
                this.isSpin = false;
            });
        },(err)=>{
            this.isSpin = false;
        });
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

    clear(): void{
        this.dataPage = new IptEltrnPrcsBlDetailT();
        this.dataPage.athrzSn = this.dataMain.athrzSn;
        this.dataPage.athrzDetailSn = this.dataMain.athrzDetailSn;
        this.mode = 0;
        this.isDisabled1 = false;
        this.isDisabled2 = false;
    }
}
