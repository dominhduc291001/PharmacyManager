/* eslint-disable prefer-const */
import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { IptElementsWaterT, IptElementWaterModel } from 'app/core/models/inspection-popup/ipt-element-water-model';
import { AthrzDetailRegist } from 'app/core/models/test-share-models/athrz-detail-regist';
import { CopyFormSent2014 } from 'app/core/models/test-share-models/copy-form-sent-2014';
import { InspectionPopupService } from 'app/core/services/inspection-popup.service';
import { InspectionService } from 'app/core/services/inspection.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
    selector     : 'ipt-elements-water-popup',
    templateUrl  : './ipt-elements-water-popup.component.html',
    styleUrls    : ['../inspection-popup.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class IptElementsWaterPopupComponent implements OnInit
{
    @Input()dataMain: AthrzDetailRegist;
    dataDetail: IptElementsWaterT = new IptElementsWaterT();
    dataEwater: IptElementWaterModel = new IptElementWaterModel();
    isSpin = false;
    tempSel = [];
    constructor(private _popup: InspectionPopupService,
        private _auth: AuthService,
         private _inspection: InspectionService, private drawerRef: NzDrawerRef<string[]>){}

    ngOnInit(): void {
        this.isSpin = true;
        this._popup.iptElementsWaterPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data: IptElementWaterModel)=>{
            this.dataEwater = data;
            if(data.iptElementsWaterTList.length > 0){
                this.dataDetail = {...data.iptElementsWaterTList[0]};
            }
            this.isSpin = false;
        },(err)=>{this.isSpin = false;});
    }

    validateDetail(): any{
        if(this.dataDetail.fomCode === null || this.dataDetail.fomCode === ''){
            alert('형식을 입력하세요.');
            return false;
        }
        if(this.dataDetail.elementsModlCn === null || this.dataDetail.elementsModlCn === ''){
            alert('모델명을 입력하세요.');
            return false;
        }
        if(this.dataDetail.envrnCndCode === null || this.dataDetail.envrnCndCode === ''){
            alert('환경조건을 입력하세요.');
            return false;
        }
        return true;
    }

    reData(): void{
        this.dataDetail.athrzSn = this.dataMain.athrzSn;
        this.dataDetail.athrzDetailSn = this.dataMain.athrzDetailSn;
        for(let item of this.dataEwater.fomCodeList){
            if(this.dataDetail.fomCode === item.bsisCode){
                this.dataDetail.fomCodeName = item.bsisCodeNm;
            }
        }

        for(let item of this.dataEwater.envrnCndCodeList){
            if(this.dataDetail.envrnCndCode === item.bsisCode){
                this.dataDetail.envrnCndCodeName = item.bsisCodeNm;
            }
        }
    }

    saveDetail(): void{
        if(this.validateDetail()){
            this.isSpin = true;
            this.reData();
            this._popup.iptElementsWaterProcess(this.dataDetail).subscribe((data)=>{;
                this._popup.iptElementsWaterPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data1: IptElementWaterModel)=>{
                    this.dataEwater.iptElementsWaterTList = [...data1.iptElementsWaterTList];
                    this.isSpin = false;
                },(err)=>{this.isSpin = false;});
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

    editData(element: IptElementsWaterT): void{
        this.dataDetail = Object.assign(element);
    }
    deleteData(element: IptElementsWaterT): void{
        this.isSpin = true;
        this._popup.iptElementsWaterDelete(element).subscribe((data)=>{
            this._popup.iptElementsWaterPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data1: IptElementWaterModel)=>{
                this.dataEwater.iptElementsWaterTList = [...data1.iptElementsWaterTList];
                this.dataDetail = new IptElementsWaterT();
                this.dataDetail.athrzSn = this.dataMain.athrzSn;
                this.dataDetail.athrzDetailSn = this.dataDetail.athrzDetailSn;
                this.isSpin = false;
            },(err)=>{this.isSpin = false;});
        },(err)=>{this.isSpin = false;});
    }

    close(): void{
        this.drawerRef.close(this.tempSel);
    }
}
