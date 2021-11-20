/* eslint-disable prefer-const */
import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { AccrcyGradCode, IptPlatformModel, IptPlatformSave, IptPlfrm } from 'app/core/models/inspection-popup/ipt-platform-model';
import { AthrzDetailRegist } from 'app/core/models/test-share-models/athrz-detail-regist';
import { CopyFormSent2014 } from 'app/core/models/test-share-models/copy-form-sent-2014';
import { InspectionPopupService } from 'app/core/services/inspection-popup.service';
import { InspectionService } from 'app/core/services/inspection.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
    selector     : 'ipt-platform-popup',
    templateUrl  : './ipt-platform-popup.component.html',
    styleUrls    : ['../inspection-popup.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class IptPlatformPopupComponent implements OnInit,AfterContentInit
{
    @Input()dataMain: AthrzDetailRegist;
    dataPage: IptPlfrm = new IptPlfrm();
    dataPlatform: IptPlfrm[] = [];
    selectAccrcyGrad: AccrcyGradCode[] = [];
    isSpin = false;
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
    formNm: string = '';
    tempSel = [];

    constructor(private _popup: InspectionPopupService, private _auth: AuthService, private _inspection: InspectionService,private drawerRef: NzDrawerRef<string[]>){}

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        this.isSpin = true;
        this._popup.iptPlatFormScalesPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data: IptPlatformModel)=>{
            this.dataPage = data.iptPlfrmSclDetailT;
            this.dataPlatform = data.iptPlfrmSclDetailListT;
            this.selectAccrcyGrad = data.accrcyGradCodeList;
            this.formNm = data.iptPlfrmSclT.fomNm;
            this.dataPage.athrzSn = data.iptPlfrmSclT.athrzSn;
            this.dataPage.athrzDetailSn = data.iptPlfrmSclT.athrzDetailSn;
            this.isSpin = false;
        });
    }

    clear(): void{
        // eslint-disable-next-line prefer-const
        let temp = new IptPlfrm();
        temp.athrzSn = this.dataPage.athrzSn;
        temp.athrzDetailSn = this.dataPage.athrzDetailSn;
        this.dataPage = temp;
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

    detailSave(): void{
        if(this.validateData() === true){
            this.isSpin = true;
            let dataSave: IptPlatformSave = new IptPlatformSave();
            dataSave.iptPlfrmSclT.athrzSn = this.dataPage.athrzSn;
            dataSave.iptPlfrmSclT.athrzDetailSn = this.dataPage.athrzDetailSn;
            dataSave.iptPlfrmSclT.fomNm = this.formNm;
            dataSave.iptPlfrmSclDetailT = this.dataPage;
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
            this._popup.iptPlatFormScalesDetailProcess(dataSave).subscribe((data)=>{
                this._popup.iptPlatFormScalesPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data1: IptPlatformModel)=>{
                    this.dataPlatform = data1.iptPlfrmSclDetailListT;
                    this.clear();
                    this.dataPage.athrzSn = data1.iptPlfrmSclT.athrzSn;
                    this.dataPage.athrzDetailSn = data1.iptPlfrmSclT.athrzDetailSn;
                    this.isSpin = false;
                },(err)=>{
                    this.isSpin = false;
                });
            },(err)=>{
                this.isSpin = false;
            });
        }else{
            alert('형식을 입력하여 주십시오.');
        }
    }

    editData(item: IptPlfrm): void{
        const temp: IptPlfrm = item;
        this.dataPage = temp;
    }

    deleteData(data: IptPlfrm): void{
        if(confirm('삭제하시겠습니까?')){
            this.isSpin = true;
            this._popup.iptPlatFormScalesDetailDelete(data).subscribe((s)=>{
                this._popup.iptPlatFormScalesPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data1: IptPlatformModel)=>{
                    this.dataPlatform = data1.iptPlfrmSclDetailListT;
                    this.dataPage.athrzSn = data1.iptPlfrmSclT.athrzSn;
                    this.dataPage.athrzDetailSn = data1.iptPlfrmSclT.athrzDetailSn;
                    this.isSpin = false;
                },(err)=>{
                    this.isSpin = false;
                });
            },(err)=>{
                this.isSpin = false;
            });
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

