import { Component, ViewEncapsulation, OnInit, Input, AfterViewInit, AfterContentInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { InspectionDetailList } from 'app/core/interfaces/athrz-confm-issu';
import { TestAppInfoView } from 'app/core/interfaces/test-app-info-view';
import { formConfmNo, TestProcessSttDetail } from 'app/core/interfaces/test-process-status-detail';
import { TestProcessSttSelect } from 'app/core/interfaces/test-process-status-select';
import { IptVesslPage } from 'app/core/models/inspection-popup/ipt-vessl-page';
import { AthrzDetailRegist } from 'app/core/models/test-share-models/athrz-detail-regist';
import { CopyFormSent2014 } from 'app/core/models/test-share-models/copy-form-sent-2014';
import { CopyFormSentIpt } from 'app/core/models/test-share-models/copy-form-sent-ipt';
import { EntrpsAddress } from 'app/core/models/test-share-models/entrps-address';
import { ProcessTempSave } from 'app/core/models/test-share-models/process-temp-save';
import { InspectionInfoService } from 'app/core/services/inspection-info.service';
import { InspectionProcessService } from 'app/core/services/inspection-process.service';
import { InspectionService } from 'app/core/services/inspection.service';
import { InspectionProcessMap } from 'app/shared/mapper/inspection-process-map';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IptElectronicPrecisionComponent } from '../inspection-popup/ipt-electronic-precision/ipt-electronic-precision.component';
import { IptFueDispenserComponent } from '../inspection-popup/ipt-fue-dispenser/ipt-fue-dispenser.component';
import { IptPlatformPopupComponent } from '../inspection-popup/ipt-platform-popup/ipt-platform-popup.component';
import { IptSpringDialScaleComponent } from '../inspection-popup/ipt-spring-dial-scale/ipt-spring-dial-scale.component';
import { IptVesslPopupComponent } from '../inspection-popup/ipt-vessl-popup/ipt-vessl-popup.component';
import { AddressListService } from '../service-share/address-list.service';
import { FormConfmNoListService } from '../service-share/form-confmno-list.service';

@Component({
    selector     : 'info-athrz-detail-regist',
    templateUrl  : './info-athrz-detail-regist.component.html',
    styleUrls    : ['../test-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class InfoAthrzDetailRegistComponent implements OnInit
{
    @Input()dataView: TestProcessSttDetail;
    @Input()processSelect: TestProcessSttSelect;
    @Input()dataTemp: ProcessTempSave;
    @Input()athrzSn: any;
    @Input()tempSave: ProcessTempSave;
    dataDetail: AthrzDetailRegist = new AthrzDetailRegist();
    dataTable: InspectionDetailList[] = [];
    dataFormConfmNo: formConfmNo[];
    appInfo: TestAppInfoView;
    isCreate: boolean = true;
    isLive: boolean = false;
    iptVesslPopup = false;
    sizeDrawer = 720;
    athrzExpDe: Date;
    _spinner = false;
    // meter View
    meterPopup = false;
    meterPopupTitle = '';
    meterPopupKey = 16;
    athrzAddressList: EntrpsAddress[];
    constructor(private _auth: AuthService,
         private message: NzMessageService,
         private _inspection: InspectionService,
         private _testProcess: InspectionProcessService,
         private drawerService: NzDrawerService,
         private _map: InspectionProcessMap,
         private _inspectionInfo: InspectionInfoService,
         private _addressList: AddressListService,
         private _formConfmNo: FormConfmNoListService){}
    ngOnInit(): void {
        this._testProcess.getAthrzConfmIssuRequest(this.athrzSn).subscribe((data)=>{
            this.dataTable = data.inspectionDetailList;
        });
        this._addressList.athrzAreaAdres$.subscribe((data)=>{
            this.athrzAddressList = data;
        });
        this._formConfmNo.formConfmNoT$.subscribe((data)=>{
            this.dataFormConfmNo = data;
        });
        this.dataDetail.athrzSn = parseInt(this.athrzSn,10);
    }

    changeCreateMode(): void{
        this.dataDetail.selMrnrStdPopup = [];
        this.dataDetail.fomConfmSn = null;
        this.isCreate = !this.isCreate;
        if(this.isCreate === false){
            this.dataDetail.inp_fomConfmSn = null;
        }
    }

    changeMeterName(event: any): void{
        this.isCreate = false;
        this.meterPopupKey = 16;
        this.dataDetail.fomConfmSn = null;
        this.dataDetail.selMrnrStdPopup = [];
        if(this.isCreate !== false){
            this.dataDetail.inp_fomConfmSn = null;
        }
        for(let i =0; i<=this.processSelect.mrnrSeCodeList.length; ++i){
            if(this.processSelect.mrnrSeCodeList[i]?.bsisCode === event.value){
                this.meterPopupKey = i+1;
            }
        }
    }
    changeConfmSn(event: any): void{
        this._spinner = true;
        this.dataDetail.selMrnrStdPopup = [];
        for(const item of this.dataView.fomConfmNoList){
            if(item.fomConfmSn === event.value){
                this.dataDetail.inp_fomConfmSn = item.fomConfmConfmNo;
            }
        }
        // eslint-disable-next-line prefer-const
        let result: CopyFormSent2014 = new CopyFormSent2014();
        if(event.value !== null){
            result.userId = this._auth?.userOnl;
            result.athrzSn = this.dataTemp.inspecTemp.athrzSn;
            result.athrzDetailSn = this.dataTemp.inspecTemp.athrzDetailSn;
            result.fomConfmSn = this.dataDetail.fomConfmSn;
            this._inspection.infoCopyFormSent2014(result).subscribe((data)=>{
                this.dataDetail.athrzSn = data.athrzSn;
                this.dataDetail.mrnrSeCode = data.mrnrSeCode;
                this.tempSave.inspecTemp.mrnrSeCode = data.mrnrSeCode;
                this.tempSave.inspecTemp.athrzDetailSn = data.athrzDetailSn;
                this.dataDetail.athrzDetailSn = data.athrzDetailSn;
                for(let i =0; i<=this.processSelect.mrnrSeCodeList.length; ++i){
                    if(this.processSelect.mrnrSeCodeList[i]?.bsisCode === data.mrnrSeCode){
                        this.meterPopupKey = i+1;
                    }
                }
                // eslint-disable-next-line prefer-const
                if (data.stndrdNm != null) {
                    // eslint-disable-next-line prefer-const
                    let stndrdNms = data.stndrdNm.split(',');
                    // eslint-disable-next-line @typescript-eslint/prefer-for-of
                    for (let i = 0; i < stndrdNms.length; i++) {
                        if (stndrdNms[i] !== '') {
                            this.dataDetail.selMrnrStdPopup.push(stndrdNms[i]);
                        }
                    }
                }
                this._spinner = false;
            },(err)=>{
                this.createMessage('error',err);
                this._spinner = false;
            });
        }else{
            result.userId = this._auth?.userOnl;
            result.athrzSn = this.dataTemp.inspecTemp.athrzSn;
            result.athrzDetailSn = this.dataTemp.inspecTemp.athrzDetailSn;
            this._inspection.infoCopyFormSent2014Ath(result).subscribe((data)=>{
                this.dataDetail.athrzSn = data.athrzSn;
                this.dataDetail.mrnrSeCode = data.mrnrSeCode;
                this.dataDetail.athrzDetailSn = data.athrzDetailSn;
                // eslint-disable-next-line prefer-const
                if (data.stndrdNm != null) {
                    // eslint-disable-next-line prefer-const
                    let stndrdNms = data.stndrdNm.split(',');
                    // eslint-disable-next-line @typescript-eslint/prefer-for-of
                    for (let i = 0; i < stndrdNms.length; i++) {
                        if (stndrdNms[i] !== '') {
                            this.dataDetail.selMrnrStdPopup.push(stndrdNms[i]);
                        }
                    }
                }
                this._spinner = false;
            },(err)=>{
                this.createMessage('error',err);
                this._spinner = false;
            });
        }
    }

    changeLive(): void{
        this.isLive = !this.isLive;
    }

    clearPlace(): void{
        this.isLive = true;
        this.dataDetail.athrzAreaAdres= null;
        this.dataDetail.athrzAreaBassAdres = null;
        this.dataDetail.athrzAreaTaxAdres = null;
    }
    openIptVesslPopup(): any {
        if(window.innerWidth >= 768){
            this.sizeDrawer = 730;
        };
        if(window.innerWidth < 768 && window.innerWidth >= 600){
            this.sizeDrawer = 580;
        }
        if(window.innerWidth < 600){
            this.sizeDrawer = 350;
        }
        if(this.dataDetail.athrzSn > 0 && this.dataDetail.athrzDetailSn === 0){
            this.imsiSave2014();
        }else{
            if(this.dataDetail.reqstQy <= 0){
                this.createMessage('error','신청수량을 입력해주십시요.');
                return false;
            }
            //this.iptVesslPopup = true;
            this.newVesslPopup();
        }
    }

    newVesslPopup(): void{
        const drawerRef = this.drawerService.create<IptVesslPopupComponent, { dataMain: AthrzDetailRegist}, {dataPage: IptVesslPage }>({
            nzTitle: '접수/처리',
            nzContent: IptVesslPopupComponent,
            nzWidth:this.sizeDrawer,
            nzContentParams: {
              dataMain: this.dataDetail
            }
          });
        drawerRef.open();
        drawerRef.afterClose.subscribe((data)=>{
            if(typeof data === 'string'){
                this.dataDetail.txtVesslStr = data;
            }
        });
    }

    closeIptVesslPopup(): void{
        this.iptVesslPopup = false;
    }

    imsiSave2014(): any{
        if(this.dataDetail.athrzSn > 0 && this.dataDetail.athrzDetailSn === 0){
            this.tempSave.userId = this._auth.userOnl;
            this._spinner = true;
            this._inspection.tempSave(this.tempSave).subscribe((data)=>{
                this.dataDetail.athrzSn = data.athrzSn;
                this.dataDetail.athrzDetailSn = data.athrzDetailSn;
                this._spinner = false;
            },(err)=>{
                this._spinner = false;
            });
        }else{
            return false;
        }
    }
    // meterSave1(): void{
    //     // eslint-disable-next-line prefer-const
    //     let result: CopyFormSentIpt = new CopyFormSentIpt();
    //     result.userId = this._auth.userOnl;
    //     result.athrzSn = this.dataDetail.athrzSn;
    //     result.athrzDetailSn = this.dataDetail.athrzDetailSn;
    //     result.mrnrSeCode = this.dataDetail.mrnrSeCode;
    //     result.stndrdNm = this.dataDetail.selMrnrStd?.toString();
    //     if(this.dataDetail.selMrnrStd === null){
    //         result.stndrdNm = '';
    //     }else{
    //         result.stndrdNm = this.dataDetail.selMrnrStd.toString();
    //     }
    //     this._spinner = true;
    //     this._inspection.copyFormSent2014Ipt(result).subscribe((data)=>{
    //         this._spinner = false;
    //         if(this.dataDetail.reqstQy <= 0){
    //             this.createMessage('error','신청수량을 입력해주십시요.');
    //             return false;
    //         }else if(this.dataDetail.mrnrSeCode === ''){
    //             this.createMessage('error','계량기 종류를 선택 하십시오.');
    //             return false;
    //         }else{
    //             this.newVesslPopup();
    //         }
    //     },(err)=>{
    //         this._spinner = false;
    //     });
    // }
    meterSave(): Promise<any>{
        // eslint-disable-next-line prefer-const
        let result: CopyFormSentIpt = new CopyFormSentIpt();
        result.userId = this._auth.userOnl;
        result.athrzSn = this.dataDetail.athrzSn;
        result.athrzDetailSn = this.dataDetail.athrzDetailSn;
        result.mrnrSeCode = this.dataDetail.mrnrSeCode;
        result.stndrdNm = this.dataDetail.selMrnrStd?.toString();
        this._spinner = true;
        if(this.dataDetail.selMrnrStd === null){
            result.stndrdNm = '';
        }else{
            result.stndrdNm = this.dataDetail.selMrnrStd.toString();
        }
        return this._inspection.copyFormSent2014Ipt(result).toPromise();
    }
    openMeterPopup(): void {
        if(this.checkMrnrCode(this.dataDetail.mrnrSeCode) === false){
            alert('구성 중인 기능');
        }
        if(this.dataDetail.mrnrSeCode === ''){
            this.createMessage('error','계량기 종류를 선택 하십시오.');
        }else if(this.dataDetail.inp_fomConfmSn === ''){
            this.createMessage('error','형식승인번호를 입력 하십시오.');
        }else{
            if(this.meterPopupKey !== 16 && this.checkMrnrCode(this.dataDetail.mrnrSeCode)){
                if(this.dataDetail.athrzSn > 0 && this.dataDetail.athrzDetailSn > 0){
                    this.mrnrStdPopup();
                }else{
                    this._spinner = true;
                    this.tempSave.inspecTemp.mrnrSeCode = this.dataDetail.mrnrSeCode;
                    this.tempSave.inspecTemp.athrzDetailSn = this.dataDetail.athrzDetailSn;
                    this.tempSave.userId = this._auth.userOnl;
                    this._inspection.infoTempSave(this.tempSave).subscribe(async (data)=>{
                        this.dataDetail.athrzSn = data.athrzSn;
                        this.dataDetail.athrzDetailSn = data.athrzDetailSn;
                        this.tempSave.inspecTemp.athrzDetailSn = data.athrzDetailSn;
                        await this.meterSave();
                        this._spinner = false;
                        this.mrnrStdPopup();
                    },(err)=>{this.createMessage('error',err);});
                }
            }
        };
    }

    mrnrStdPopup(): void{
        if(window.innerWidth >= 768){
            this.sizeDrawer = 730;
        };
        if(window.innerWidth < 768 && window.innerWidth >= 600){
            this.sizeDrawer = 580;
        }
        if(window.innerWidth < 600){
            this.sizeDrawer = 350;
        }
        switch(this.meterPopupKey){
            case 1:
                const drawerMeter = this.drawerService.create<IptPlatformPopupComponent,
                 { dataMain: AthrzDetailRegist}>({
                    nzTitle: '규격및형식(판수동저울)',
                    nzContent: IptPlatformPopupComponent,
                    nzWidth:this.sizeDrawer,
                    nzContentParams: {
                      dataMain: this.dataDetail
                    }
                  });
                drawerMeter.open();
                drawerMeter.afterClose.subscribe((data)=>{
                    if(data.length !== 0){
                        this.dataDetail.selMrnrStdPopup = [];
                    }
                    for(const item of data){
                        if(typeof item === 'string'){
                            this.dataDetail.selMrnrStdPopup.push(item);
                            this.dataDetail.selMrnrStd = 0;
                        }
                    }
                });
                break;
            case 2:
                const drawerMeter2 = this.drawerService.create<IptSpringDialScaleComponent,
                 { dataMain: AthrzDetailRegist}>({
                    nzTitle: '규격및형식(접시지시및판지시저울)',
                    nzContent: IptSpringDialScaleComponent,
                    nzWidth:this.sizeDrawer,
                    nzContentParams: {
                      dataMain: this.dataDetail
                    }
                  });
                drawerMeter2.open();
                drawerMeter2.afterClose.subscribe((data)=>{
                    if(data.length !== 0){
                        this.dataDetail.selMrnrStdPopup = [];
                    }
                    for(const item of data){
                        if(typeof item === 'string'){
                            this.dataDetail.selMrnrStdPopup.push(item);
                            this.dataDetail.selMrnrStd = 0;
                        }
                    }
                });
                break;
            case 3:
                    const drawerMeter3 = this.drawerService.create<IptElectronicPrecisionComponent,
                     { dataMain: AthrzDetailRegist}>({
                        nzTitle: '규격및형식(전기식지시저울)',
                        nzContent: IptElectronicPrecisionComponent,
                        nzWidth:this.sizeDrawer,
                        nzContentParams: {
                          dataMain: this.dataDetail
                        }
                      });
                    drawerMeter3.open();
                    drawerMeter3.afterClose.subscribe((data)=>{
                        if(data.length !== 0){
                            this.dataDetail.selMrnrStdPopup = [];
                        }
                        for(const item of data){
                            if(typeof item === 'string'){
                                this.dataDetail.selMrnrStdPopup.push(item);
                                this.dataDetail.selMrnrStd = 0;
                            }
                        }
                    });
                    break;
                case 9:
                    const drawerMeter9 = this.drawerService.create<IptFueDispenserComponent,
                     { dataMain: AthrzDetailRegist}>({
                        nzTitle: '규격및형식(주유기)',
                        nzContent: IptFueDispenserComponent,
                        nzWidth:this.sizeDrawer,
                        nzContentParams: {
                          dataMain: this.dataDetail
                        }
                      });
                    drawerMeter9.open();
                    drawerMeter9.afterClose.subscribe((data)=>{
                        if(data.length !== 0){
                            this.dataDetail.selMrnrStdPopup = [];
                        }
                        for(const item of data){
                            if(typeof item === 'string'){
                                this.dataDetail.selMrnrStdPopup.push(item);
                                this.dataDetail.selMrnrStd = 0;
                            }
                        }
                    });
                    break;
            default:
                alert('구성 중인 기능');
        };
    }

    checkMrnrCode(item: string): any{
        if(item === 'AB001001'||
        item === 'AB001002' ||
        item === 'AB001003' ||
        item === 'AB001010' ||
        item === 'AB001011' ||
        item === 'AB001020'){
            return true;
        }else{
            return false;
        }
    }

    closeMeterPopup(): void{
        this.meterPopup = false;
    }


    zipCodeOpen(): void{
        // eslint-disable-next-line max-len
        window.open('https://metrology.ktc.re.kr/ZipCode/ZipCode/ZipCodePop?closeHandler=setAthrzAreaAdres' , 'ZipCodePopup', 'width=665, height=700, scrollbars=yes, resizable=no, toolbar=no, status=yes');
    }

    createMessage(type: string, mess: string): void {
        this.message.create(type, mess);
    }

    emptyPostNumber(value: string): any{
        let result = '';
        value = value.trim();
        if(value.length === 5){
            result = `(${value})`;
        }
        else if(value.length === 6){
            result=`(${value.substring(0,3)}-${value.substring(3)})`;
        }
        return result;
    }

    yearSelect(): any{
        // eslint-disable-next-line prefer-const
        let result = [];
        // eslint-disable-next-line prefer-const
        let myDate = new Date();
        myDate.setFullYear(myDate.getFullYear()-5);
        for(let i=1; i<=25; ++i){
            result.push(myDate.getFullYear());
            myDate.setFullYear(myDate.getFullYear()+1);
        }
        return result;
    }

    async detailReg(): Promise<any>{
        if(this.dataDetail.athrzSn > 0 && this.dataDetail.athrzDetailSn === 0){
            await this.imsiSave2014();
        }
        if(this.dataDetail.mrnrSeCode.length < 1){
            this.createMessage('error','계량기명(종류)를 선택해주십시요.');
            return false;
        }
        if(this.dataDetail.athrzSeCode === null){
            this.createMessage('error','검정구분을 선택해주십시요.');
            return false;
        }
        if(this.dataDetail.athrzSn === 0 && this.dataDetail.athrzDetailSn === 0){
            this.createMessage('error','계량기정보가 등록되지 않았습니다.');
            return false;
        }
        if(this.dataDetail.reqstQy < 1 || this.dataDetail.reqstQy === null){
            this.createMessage('error','신청수량을 입력하여 주십시요.');
            return false;
        }
        if(this.dataDetail.txtVesslStr.trim().length < 1 || this.dataDetail.txtVesslStr === null){
            this.createMessage('error','기물번호를 입력하여 주십시요.');
            return false;
        }

        if(this.dataDetail.athrzAreaAdres === null && this.isLive === false ){
            this.createMessage('error','검정장소를 선택해주십시요.');
            return false;
        }else if(this.isLive === true){
            if(this.dataDetail.athrzAreaBassAdres === null){
                this.createMessage('error','검정장소를 입력해주십시요.');
                return false;
            }else if(this.dataDetail.athrzAreaTaxAdres === null){
                this.createMessage('error','검정장소를 입력해주십시요.');
                return false;
            }
        }

        if(this.dataDetail.athrzHopeDe.toString().length < 1){
            this.createMessage('error','검정희망일을 입력해주십시요.');
            return false;
        }

        if(this.dataDetail.mesurProofBsshAt === null){
            this.createMessage('error','계량증명업소 여부를 선택해주십시요.');
            return false;
        }

        if(this.dataDetail.selMrnrStd === null){
            this.createMessage('error','규격을 선택해주십시요.');
            return false;
        }else{
            this.dataDetail.stndrdNm = this.dataDetail.selMrnrStdPopup[this.dataDetail.selMrnrStd];
        }
        this.tempSave.inspecTemp = this._map.inspectionDetailProcessMap(this.tempSave.inspecTemp, this.dataDetail);
        if(this.tempSave.inspecTemp.athrzAreaBassAdres === '원내'){
            this.tempSave.inspecTemp.athrzAreaBassAdres = '';
        }
        if(this.isLive === false){
            for(const item of this.athrzAddressList){
                if(this.dataDetail.athrzAreaAdres === item.entrprsAdresSn){
                    this.tempSave.inspecTemp.athrzAreaAdresSeCode = item.entrprsAdresSeCode;
                    this.tempSave.inspecTemp.athrzAreaZip = item.zip;
                    this.tempSave.inspecTemp.athrzAreaBassAdres = item.bassAdres;
                    this.tempSave.inspecTemp.athrzAreaTaxAdres =item.detailAdres;
                    this.tempSave.inspecTemp.athrzAreaTelno = item.adresTelno;
                }
            }
        }
        this._spinner = true;
        await this.meterSave();
        if(this.dataDetail.athrzSn > 0 && this.dataDetail.athrzDetailSn > 0){
            await this.prcAthzDetail('U');
            this.tempSave = this.dataTemp;
            this.dataDetail = new AthrzDetailRegist();
            this.dataDetail.athrzSn = parseInt(this.athrzSn,10);
        }
    }

    prcAthzDetail(_mode: string): any{
        this.tempSave.inspecTemp.mode = _mode;
        this._inspectionInfo.getInspectionDetailProcess(this.tempSave.inspecTemp).subscribe((data)=>{
            this.tempSave.inspecTemp.mode = '';
            if(_mode === 'D'){
                this.tempSave.inspecTemp.athrzDetailSn = 0;
                this.dataDetail.athrzDetailSn = 0;
            }
            this._testProcess.getAthrzConfmIssuRequest(this.athrzSn).subscribe((s)=>{
                this.dataTable = s.inspectionDetailList;
                this.createMessage('success','업데이트 성공.');
                this._spinner = false;
            });
        },(err)=>{
            this._spinner = false;
        });
    }


    async editAuthrzDetail(item: InspectionDetailList): Promise<void> {
        this._spinner = true;
        this.dataDetail.athrzSn = item.athrzSn;
        this.dataDetail.athrzDetailSn = item.athrzDetailSn;
        this.dataDetail.mrnrSeCode = item.mrnrSeCode;
        this.dataDetail.fomConfmSn = item.fomConfmSn;
        this.isCreate = false;
        // eslint-disable-next-line prefer-const
        let check = false;
        for(const tmp of this.dataView.fomConfmNoList){
            if(item.fomConfmConfmNo === tmp.fomConfmConfmNo){
                this.dataDetail.inp_fomConfmSn = tmp.fomConfmConfmNo;
                this.dataDetail.fomConfmSn = tmp.fomConfmSn;
                check = true;
            }
        }
        if(check === true){
            this.isCreate = true;
            const dataEdit = await this.getSelStd();
            this.dataDetail.athrzSn = dataEdit.athrzSn;
                this.dataDetail.mrnrSeCode = dataEdit.mrnrSeCode;
                this.tempSave.inspecTemp.mrnrSeCode = dataEdit.mrnrSeCode;
                this.tempSave.inspecTemp.athrzDetailSn = dataEdit.athrzDetailSn;
                this.dataDetail.athrzDetailSn = dataEdit.athrzDetailSn;
                for(let i =0; i<=this.processSelect.mrnrSeCodeList.length; ++i){
                    if(this.processSelect.mrnrSeCodeList[i]?.bsisCode === dataEdit.mrnrSeCode){
                        this.meterPopupKey = i+1;
                    }
                }
                // eslint-disable-next-line prefer-const
                if (dataEdit.stndrdNm != null) {
                    // eslint-disable-next-line prefer-const
                    let stndrdNms = dataEdit.stndrdNm.split(',');
                    // eslint-disable-next-line @typescript-eslint/prefer-for-of
                    for (let i = 0; i < stndrdNms.length; i++) {
                        if (stndrdNms[i] !== '') {
                            this.dataDetail.selMrnrStdPopup.push(stndrdNms[i]);
                        }
                    }
                }
                this.dataDetail.selMrnrStd = 0;
        }else{
            for(let i =0; i<=this.processSelect.mrnrSeCodeList.length; ++i){
                if(this.processSelect.mrnrSeCodeList[i]?.bsisCode === this.dataDetail.mrnrSeCode){
                    this.meterPopupKey = i+1;
                }
            }
            this.dataDetail.inp_fomConfmSn = item.fomConfmConfmNo;
            this.dataDetail.stndrdNm = item.stndrdNm;
            this.dataDetail.selMrnrStdPopup = [];
            const dataEdit = await this.getSelStdAth();
            this.dataDetail.athrzSn = dataEdit.athrzSn;
            this.dataDetail.athrzDetailSn = dataEdit.athrzDetailSn;
            for(let i =0; i<=this.processSelect.mrnrSeCodeList.length; ++i){
                if(this.processSelect.mrnrSeCodeList[i]?.bsisCode === dataEdit.mrnrSeCode){
                    this.meterPopupKey = i+1;
                }
            }
                // eslint-disable-next-line prefer-const
            if (dataEdit.stndrdNm != null) {
                // eslint-disable-next-line prefer-const
                let stndrdNms = dataEdit.stndrdNm.split(',');
                    // eslint-disable-next-line @typescript-eslint/prefer-for-of
                for (let i = 0; i < stndrdNms.length; i++) {
                    if (stndrdNms[i] !== '') {
                        this.dataDetail.selMrnrStdPopup.push(stndrdNms[i]);
                    }
                }
            }
                this.dataDetail.selMrnrStd = 0;
        }
        this.isLive = true;
        this.dataDetail.athrzAreaZip = item.athrzAreaZip;
        this.dataDetail.athrzAreaBassAdres = item.athrzAreaBassAdres;
        this.dataDetail.athrzAreaTaxAdres = item.athrzAreaTaxAdres;
        this.dataDetail.reqstQy = item.reqstQy;
        this.dataDetail.athrzHopeDe = new Date(item.athrzHopeDe);
        if(item.athrzExpDe1 !== null){
            this.dataDetail.athrzExpDe1 = parseInt(item.athrzExpDe1, 10);
        }
        if(item.athrzExpDe2 !== null){
            this.dataDetail.athrzExpDe2 = parseInt(item.athrzExpDe2, 10);
        }
        this.dataDetail.mesurProofBsshAt = item.mesurProofBsshAt;
        this.dataDetail.athrzAllAt = item.athrzAllAt;
        this.dataDetail.athrzSeCode = item.athrzSeCode;
        this.dataDetail.txtVesslStr = item.vesslNoStr;
        this._spinner = false;
    }

    getSelStd(): Promise<any> {
            // eslint-disable-next-line prefer-const
            let result: CopyFormSent2014 = new CopyFormSent2014();
            result.userId = this._auth?.userOnl;
            result.athrzSn = this.dataDetail.athrzSn;
            result.athrzDetailSn = this.dataDetail.athrzDetailSn;
            result.fomConfmSn = this.dataDetail.fomConfmSn;
            result.gubun = 1;
            return this._inspection.infoCopyFormSent2014(result).toPromise();
    }

    getSelStdAth(): Promise<any> {
        // eslint-disable-next-line prefer-const
        let result: CopyFormSent2014 = new CopyFormSent2014();
        result.userId = this._auth?.userOnl;
        result.athrzSn = this.dataDetail.athrzSn;
        result.athrzDetailSn = this.dataDetail.athrzDetailSn;
        result.mrnrSeCode = this.dataDetail.mrnrSeCode;
        result.gubun = 1;
        return this._inspection.infoCopyFormSent2014Ath(result).toPromise();
    }

    deleteAthrzDetail(athrzSn: number, athrzDetailSn: number): void{
        if(confirm('선택한 검정신청정보를 삭제합니다.\n\n정말 삭제하시겠습니까?')){
            this._spinner = true;
            this._inspectionInfo.delDetailProcess(athrzSn, athrzDetailSn).subscribe((data)=>{
                this._testProcess.getAthrzConfmIssuRequest(this.athrzSn).subscribe((s)=>{
                    this.dataTable = s.inspectionDetailList;
                    this._spinner = false;
                },(err)=>{
                    this._spinner = false;
                });
            },(err)=>{
                this._spinner = false;
            });
        }
    }

    monthSelect(): any{
        // eslint-disable-next-line prefer-const
        let result = [];
        for(let i=1; i<=12; ++i){
            result.push(i);
        }
        return result;
    }
}
