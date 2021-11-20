/* eslint-disable prefer-const */
import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { IptElecMeterModel } from 'app/core/models/inspection-popup/ipt-elecmeter-model';
import { AthrzDetailRegist } from 'app/core/models/test-share-models/athrz-detail-regist';
import { CopyFormSent2014 } from 'app/core/models/test-share-models/copy-form-sent-2014';
import { InspectionPopupService } from 'app/core/services/inspection-popup.service';
import { InspectionService } from 'app/core/services/inspection.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
    selector     : 'ipt-elecmeter-popup',
    templateUrl  : './ipt-elecmeter-popup.component.html',
    styleUrls    : ['../inspection-popup.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class IptElecmeterPopupComponent implements OnInit, AfterContentInit
{
    @Input()dataMain: AthrzDetailRegist;
    dataPage: IptElecMeterModel = new IptElecMeterModel();
    isSpin = false;
    tempSel = [];
    stdrVltgeCodeVal: string = '';
    stdrErcrtCodeVal: string = '';
    isChgEstbSeCode: boolean = false;
    isMxmmPermErcrtVal: boolean = false;
    selMxmmPermErcrtTimes: number = 0;
    fomCodeList = [
        {value: 'AA210003', name:'교류 유도형계기'},
        {value: 'AA210004', name:'교류 전자식계기'},
        {value: 'AA210005', name:'직류 전자식계기'}
    ];
    estbSeCodeList = [
        {value: 'AA211001', name:'단독계기'},
        {value: 'AA211002', name:'변성기부계기'}
    ];
    upptNdLnFrmlaCodeList = [
        {value: 'AA212005', name:'단상2선식'},
        {value: 'AA212006', name:'단상3선식'},
        {value: 'AA212007', name:'3상3선식'},
        {value: 'AA212008', name:'3상4선식'}
    ];
    upptNdLnFrmlaCodeList2 = [
        {value: 'AA212005', name:'단상2선식'},
        {value: 'AA212006', name:'단상3선식'}
    ];
    chgEstbSeCodeList = [
        {value: 'AA330001', name:'보통계기'},
        {value: 'AA330002', name:'정밀계기'},
        {value: 'AA330003', name:'특별정밀계기'}
    ];
    stdrVltgeCodeList = [
        {value: 'AA213004', name:'63.5/110'},
        {value: 'AA213005', name:'110/190'},
        {value: 'AA213006', name:'220/380'}
    ];

    stdrVltgeCodeList2 = [
        {value: 'AA213001', name:'63.5'},
        {value: 'AA213002', name:'110'},
        {value: 'AA213003', name:'220'},
        {value: 'AA213004', name:'63.5/110'},
        {value: 'AA213005', name:'110/190'},
        {value: 'AA213006', name:'220/380'}
    ];

    stdrErcrtCodeList1 = [
        {value: 'AA214001', name:'5'}
    ];

    stdrErcrtCodeList2 = [
        {value: 'AA214001', name:'5'},
        {value: 'AA214002', name:'10'},
        {value: 'AA214004', name:'20'},
        {value: 'AA214006', name:'40'},
        {value: 'AA214008', name:'80'}
    ];

    stdrErcrtCodeList3 = [
        {value: 'AA214001', name:'5'},
        {value: 'AA214002', name:'10'},
        {value: 'AA214003', name:'15'},
        {value: 'AA214004', name:'20'},
        {value: 'AA214005', name:'30'},
        {value: 'AA214006', name:'40'},
        {value: 'AA214007', name:'50'},
        {value: 'AA214008', name:'80'}
    ];

    selMxmmPermErcrtTimesList = [
        {value: '1.2', name:'1.2배'},
        {value: '1.5', name:'1.5배'},
        {value: '2', name:'2배'}
    ];

    validGradCodeList = [
        {value: 'AA216001', name:'0.2'},
        {value: 'AA216002', name:'0.5'},
        {value: 'AA216003', name:'1.0'},
        {value: 'AA216004', name:'2.0'},
        {value: 'AA216005', name:'해당없음'}
    ];

    unavblGradCodeList = [
        {value: 'AA217004', name:'0.5'},
        {value: 'AA217005', name:'1.0'},
        {value: 'AA217001', name:'2.0'},
        {value: 'AA217002', name:'3.0'},
        {value: 'AA217003', name:'해당없음'}
    ];

    mesurDrcCodeList = [
        {value: 'AA219001', name:'단방향계량'},
        {value: 'AA219001', name:'양방향계량'}
    ];

    conectStrctCodeList = [
        {value: 'AA220001', name:'밑면접속형'},
        {value: 'AA220002', name:'측면접속형'},
        {value: 'AA220003', name:'상하양면접속형'},
        {value: 'AA220004', name:'좌우양면접속형'},
        {value: 'AA220005', name:'배면접속형'},
        {value: 'AA220006', name:'플러그접속형'}
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
        this._popup.iptElecMeterPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn).subscribe((data: IptElecMeterModel)=>{
            this.dataPage = data;
            if(data.fomCode !== 'AA210005'&& data.estbSeCode === 'AA211002'){
                this.isChgEstbSeCode = true;
            };
            this.isSpin =false;
        },(err)=>{this.isSpin =false;});
    }

    fomCodeChange(eventT: any): void{
        this.isChgEstbSeCode = true;
        if(eventT.value === 'AA210005'){
            this.isChgEstbSeCode = false;
            this.dataPage.stdrVltgeCode = null;
            this.dataPage.validGradCode = 'AA216002';
            this.dataPage.estbSeCode = 'AA211001';
            this.dataPage.unavblGradCode = null;
            this.dataPage.chgEstbSeCode = null;
            this.dataPage.stdrErcrtCode = null;
            this.dataPage.mxmmPermErcrtVal = null;
            this.isMxmmPermErcrtVal = false;
        }else{
            this.stdrVltgeCodeVal = '';
            this.dataPage.validGradCode = 'AA216001';
            this.dataPage.stdrErcrtCode = null;
            this.dataPage.validGradCode = 'AA216001';
            this.isMxmmPermErcrtVal = false;
            this.dataPage.estbSeCode = 'AA211001';
            this.dataPage.chgEstbSeCode = '';
        }
    }

    estbSeCodeChange(eventT: any): void{
        if(eventT.value === 'AA211002' && this.dataPage.fomCode !== 'AA210005'){
            this.dataPage.stdrErcrtCode = 'AA214001';
            this.dataPage.mxmmPermErcrtVal = 6;
            this.dataPage.chgEstbSeCode = 'AA330001';
            this.isMxmmPermErcrtVal = true;
        }else if(eventT.value === 'AA211002' && this.dataPage.fomCode === 'AA210005'){
            this.selMxmmPermErcrtTimes = 1.2;
            this.dataPage.mxmmPermErcrtVal = null;
            this.isMxmmPermErcrtVal = false;
        }else{
            this.selMxmmPermErcrtTimes = 0;
            this.dataPage.stdrErcrtCode = null;
            this.isMxmmPermErcrtVal = false;
            this.dataPage.chgEstbSeCode = '';
        }
    }

    selMxmmChange(eventT: any): void{
        if(this.stdrErcrtCodeVal !== ''){
            this.isMxmmPermErcrtVal = true;
            this.dataPage.mxmmPermErcrtVal = parseFloat(this.stdrErcrtCodeVal) * parseFloat(eventT.value);
        }else{
            alert('기준전류를 입력하세요.');
        }
    }

    printErcrtValChange(eventT: any): void{
        if(this.dataPage.fomCode === 'AA210005'){
            this.dataPage.printErcrtVal = `${this.stdrErcrtCodeVal}(${this.dataPage.mxmmPermErcrtVal})A`;
        }else{
            let val = '';
            for(let res of this.stdrErcrtCodeList3){
                if(res.value === this.dataPage.stdrErcrtCode){
                    val = res.name;
                }
            }
            this.dataPage.printErcrtVal = `${val}(${this.dataPage.mxmmPermErcrtVal})A`;
        }
    }

    validateDetail(): any{
        if(this.dataPage.fomCode === 'AA210005'){
            this.dataPage.stdrVltgeCode = this.stdrVltgeCodeVal;
            this.dataPage.stdrVltgeCodeName = this.stdrVltgeCodeVal;
        }
        if(this.dataPage.fomCode === 'AA210005' && this.dataPage.estbSeCode === 'AA211002'){
            this.dataPage.stdrErcrtCode = this.stdrErcrtCodeVal;
            this.dataPage.stdrErcrtCodeName = this.stdrErcrtCodeVal;
        }
        if(this.dataPage.fomCode === null || this.dataPage.fomCode === ''){
            alert('형식구분을 선택하여 주세요.');
            return false;
        }
        if(this.dataPage.estbSeCode === null || this.dataPage.estbSeCode === ''){
            alert('계기구분을 선택하여 주세요.');
            return false;
        }
        if(this.dataPage.upptNdLnFrmlaCode === null || this.dataPage.upptNdLnFrmlaCode === ''){
            alert('상및선식을 선택하여 주세요.');
            return false;
        }
        if(this.dataPage.stdrVltgeCode === null || this.dataPage.stdrVltgeCode === ''){
            alert('기준전압을 선택하여 주세요.');
            return false;
        }
        if(this.dataPage.stdrErcrtCode === null || this.dataPage.stdrErcrtCode === ''){
            alert('기준전류를 선택하여 주세요.');
            return false;
        }
        if(this.dataPage.mxmmPermErcrtVal === null){
            alert('최대허용전류를 입력하여 주세요.');
            return false;
        }
        if(this.dataPage.mxmmPermErcrtVal < 0.1){
            alert('최대허용전류는 0.1이상만 입력가능합니다.');
            return false;
        }
        if(this.dataPage.printErcrtVal === null || this.dataPage.printErcrtVal === ''){
            alert('승인서에 표시될 전류값을 입력해주세요.');
            return false;
        }
        if(this.dataPage.mesurDrcCode === null || this.dataPage.mesurDrcCode === ''){
            alert('계량구분을 선택하여 주세요.');
            return false;
        }
        if(this.dataPage.validGradCode === null || this.dataPage.validGradCode === ''){
            alert('유효등급을 선택하여 주세요.');
            return false;
        }
        if(this.dataPage.unavblGradCode === null || this.dataPage.unavblGradCode === ''){
            alert('무효등급을 선택하여 주세요.');
            return false;
        }
        if(this.dataPage.conectStrctCode === null || this.dataPage.conectStrctCode === ''){
            alert('접속구조를 입력하여 주세요.');
            return false;
        }
        if(this.dataPage.mesurDrcCode === null || this.dataPage.mesurDrcCode === ''){
            alert('계량방향을 선택하여 주세요.');
            return false;
        }
        return true;
    }

    reData(): void{
        for(let item of this.fomCodeList){
            if(this.dataPage.fomCode === item.value){
                this.dataPage.fomCodeName = item.name;
            }
        }
        for(let item of this.estbSeCodeList){
            if(this.dataPage.estbSeCode === item.value){
                this.dataPage.estbSeCodeName = item.name;
            }
        }
        for(let item of this.upptNdLnFrmlaCodeList){
            if(this.dataPage.upptNdLnFrmlaCode === item.value){
                this.dataPage.upptNdLnFrmlaCodeName = item.name;
            }
        }
        for(let item of this.upptNdLnFrmlaCodeList2){
            if(this.dataPage.upptNdLnFrmlaCode === item.value){
                this.dataPage.upptNdLnFrmlaCodeName = item.name;
            }
        }
        for(let item of this.chgEstbSeCodeList){
            if(this.dataPage.chgEstbSeCode === item.value){
                this.dataPage.chgEstbSeCodeName = item.name;
            }
        }
        for(let item of this.stdrVltgeCodeList2){
            if(this.dataPage.stdrVltgeCode === item.value){
                this.dataPage.stdrVltgeCodeName = item.name;
            }
        }
        for(let item of this.stdrErcrtCodeList3){
            if(this.dataPage.stdrErcrtCode === item.value){
                this.dataPage.stdrErcrtCodeName = item.name;
            }
        }
        for(let item of this.validGradCodeList){
            if(this.dataPage.validGradCode === item.value){
                this.dataPage.validGradCodeName = item.name;
            }
        }
        for(let item of this.unavblGradCodeList){
            if(this.dataPage.unavblGradCode === item.value){
                this.dataPage.unavblGradCodeName = item.name;
            }
        }
        for(let item of this.mesurDrcCodeList){
            if(this.dataPage.mesurDrcCode === item.value){
                this.dataPage.mesurDrcCodeName = item.name;
            }
        }
        for(let item of this.conectStrctCodeList){
            if(this.dataPage.conectStrctCode === item.value){
                this.dataPage.conectStrctCodeName = item.name;
            }
        }
    }

    saveDetail(): void{
        if(this.validateDetail()){
            this.isSpin = true;
            this.reData();
            this._popup.iptElecMeterProcess(this.dataPage).subscribe((data)=>{
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
