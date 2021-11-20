/* eslint-disable prefer-const */
import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { SelectItem } from 'app/core/models/inspection-popup/ipt-electron-precision-model';
import { IptFueDispenserModel, IptFueldispenserT } from 'app/core/models/inspection-popup/ipt-fue-dispenser';
import { AthrzDetailRegist } from 'app/core/models/test-share-models/athrz-detail-regist';
import { CopyFormSent2014 } from 'app/core/models/test-share-models/copy-form-sent-2014';
import { InspectionPopupService } from 'app/core/services/inspection-popup.service';
import { InspectionService } from 'app/core/services/inspection.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
    selector     : 'ipt-fue-dispenser',
    templateUrl  : './ipt-fue-dispenser.component.html',
    styleUrls    : ['../inspection-popup.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class IptFueDispenserComponent implements OnInit, AfterContentInit
{
    @Input()dataMain: AthrzDetailRegist;
    dataPage: IptFueldispenserT = new IptFueldispenserT();
    dataFuel: IptFueldispenserT[] = [];
    isSpin = false;
    selectFomCode: SelectItem[];
    selectSeCode: SelectItem[];
    selectSelfSeCode: SelectItem[];
    selectEnvrnCndCode: SelectItem[];
    tempSel = [];
    constructor(private _popup: InspectionPopupService, private _auth: AuthService, private _inspection: InspectionService,private drawerRef: NzDrawerRef<string[]>){}

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        this.isSpin = true;
        this._popup.iptFueDispenserPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data: IptFueDispenserModel)=>{
            this.dataPage = data.iptFueldispenserT;
            this.dataFuel = data.iptFueldispenserTList;
            this.selectSeCode = data.seCodeList;
            this.selectEnvrnCndCode = data.envrnCndCodeList;
            this.selectFomCode = data.fomCodeList;
            this.selectSelfSeCode = data.selfSeCodeList;
            this.dataPage.athrzSn = this.dataMain.athrzSn;
            this.dataPage.athrzDetailSn = this.dataMain.athrzDetailSn;
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

    reData(): void{
        this.dataPage.athrzSn = this.dataMain.athrzSn;
        this.dataPage.athrzDetailSn = this.dataMain.athrzDetailSn;
        for(let item of this.selectFomCode){
            if(this.dataPage.fomCode === item.bsisCode){
                this.dataPage.fomCodeName = item.bsisCodeNm;
            }
        }
        for(let item of this.selectSeCode){
            if(this.dataPage.seCode === item.bsisCode){
                this.dataPage.seCodeName = item.bsisCodeNm;
            }
        }
        for(let item of this.selectSelfSeCode){
            if(this.dataPage.selfSeCode === item.bsisCode){
                this.dataPage.selfSeCodeName = item.bsisCodeNm;
            }
        }
        for(let item of this.selectEnvrnCndCode){
            if(this.dataPage.envrnGradCodeName === item.bsisCode){
                this.dataPage.fomCodeName = item.bsisCodeNm;
            }
        }
    }

    validateData(): any{
        if(this.dataPage.fomCode === null || this.dataPage.fomCode === ''){
            alert('형식을 입력하세요.');
            return false;
        }
        if(this.dataPage.seCode === null || this.dataPage.seCode === ''){
            alert('구분을 입력하세요.');
            return false;
        }
        if(this.dataPage.selfSeCode === null || this.dataPage.selfSeCode === ''){
            alert('셀프구분을 입력하세요.');
            return false;
        }
        if(this.dataPage.envrnGradCode === null || this.dataPage.envrnGradCode === ''){
            alert('환경등급을 입력하세요.');
            return false;
        }
        return true;
    }

    saveData(): any{
        if(this.validateData){
            this.isSpin = true;
            this._popup.iptFueDispenserProcess(this.dataPage).subscribe((s)=>{
                this._popup.iptFueDispenserPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data: IptFueDispenserModel)=>{
                    this.dataFuel = data.iptFueldispenserTList;
                    this.clear();
                    this.isSpin = false;
                },(err)=>{
                    this.isSpin = false;
                });
            },(err)=>{
                this.isSpin = false;
            });
        }
    }

    editData(data: IptFueldispenserT): void{
        this.dataPage = data;
    }

    deleteData(data: IptFueldispenserT): void{
        this.isSpin = true;
        this._popup.iptFueDispenserDelete(data).subscribe((s)=>{
            this._popup.iptFueDispenserPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data1: IptFueDispenserModel)=>{
                this.dataFuel = data1.iptFueldispenserTList;
                this.isSpin = false;
            },(err)=>{
                this.isSpin = false;
            });
        },(err)=>{this.isSpin = false;});
    }
    clear(): void{
        this.dataPage = new IptFueldispenserT();
        this.dataPage.athrzSn = this.dataMain.athrzSn;
        this.dataPage.athrzDetailSn = this.dataMain.athrzDetailSn;
    }
}
