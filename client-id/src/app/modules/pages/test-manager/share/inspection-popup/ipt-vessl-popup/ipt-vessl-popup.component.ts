import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { IptVesslPage } from 'app/core/models/inspection-popup/ipt-vessl-page';
import { IptVesslT } from 'app/core/models/inspection-popup/ipt-vesslT';
import { AthrzDetailRegist } from 'app/core/models/test-share-models/athrz-detail-regist';
import { ProcessTempSave } from 'app/core/models/test-share-models/process-temp-save';
import { InspectionPopupService } from 'app/core/services/inspection-popup.service';
import { UrlDefault } from 'app/shared/urlDefault';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
    selector     : 'ipt-vessl-popup',
    templateUrl  : './ipt-vessl-popup.component.html',
    styleUrls    : ['../inspection-popup.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class IptVesslPopupComponent implements OnInit, AfterContentInit
{
    @Input()dataMain: AthrzDetailRegist;
    dataPage: IptVesslPage = new IptVesslPage();
    dataSave: IptVesslT = new IptVesslT();
    dataHist = [];
    reqstdocVesslNo: string = '';
    enterindividual: string = '';
    searchText: string = '';
    sTmpVesslStr =  '';
    isSpin = false;
    constructor(private _popupSV: InspectionPopupService,private drawerRef: NzDrawerRef<string>){}

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        this._popupSV.getIptVessPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn, this.dataMain.reqstQy, this.searchText).subscribe((data)=>{
            this.dataPage = data;
            this.dataHist = data.iptVesslList;
            this.dataSave.athrzSn = this.dataMain.athrzSn;
            this.dataSave.athrzDetailSn = this.dataMain.athrzDetailSn;
            this.dataSave.reqstQy = this.dataMain.reqstQy;
            if(data.iptVesslList.length > 0){
                this.dataSave.vesslNoStr = data.iptVesslList[0].vesslNo;
            }
            this.dataSave.hVesslCnt = data.totalCount;
            if(data.iptAthrzDetailEtcInfo !== null){
                this.reqstdocVesslNo = data.iptAthrzDetailEtcInfo.reqstdocVesslNo ;
            }
        });
    }

    btnInfoSave(): void{
        this.isSpin = true;
        this._popupSV.etcDetailEdit(this.dataSave.athrzSn, this.dataSave.athrzDetailSn, this.reqstdocVesslNo).subscribe((data)=>{
            //this.reloadData();
            this.isSpin = false;
            alert('저장이 완료되었습니다.');
        },(err)=>{
            this.isSpin = false;
            alert(err);
        });
    }

    btnEnterindividual(): any{
        if(this.dataSave.hVesslCnt >= this.dataSave.reqstQy){
            alert(`최대 입력 개수는 ${this.dataSave.reqstQy}개 입니다.`);
            return false;
        }else{
            if(this.enterindividual.trim().length < 1){
                alert('기물번호(개별입력)를 입력해주십시요.');
                return false;
            }
            this.dataSave.mode = 'I';
            this.dataSave.vesslNo = this.enterindividual;
            this.isSpin = true;
            this._popupSV.iptVessProcess(this.dataSave).subscribe((data)=>{
                this.dataSave.mode = '';
                this.dataSave.vesslNo = '';
                this.enterindividual = '';
                this.isSpin = false;
                this.reloadData();
            },(err)=>{
                alert(err);
            });
        }
    }
    reloadData(): void{
        this.isSpin = true;
        this._popupSV.getIptVessPopup(this.dataMain.athrzSn, this.dataMain.athrzDetailSn, this.dataMain.reqstQy, this.searchText).subscribe((data)=>{
            this.dataPage = data;
            this.dataHist = data.iptVesslList;
            this.dataSave.athrzSn = this.dataMain.athrzSn;
            this.dataSave.athrzDetailSn = this.dataMain.athrzDetailSn;
            this.dataSave.reqstQy = this.dataMain.reqstQy;
            if(data.iptVesslList.length > 0){
                this.dataSave.vesslNoStr = data.iptVesslList[0].vesslNo;
            }
            this.dataSave.hVesslCnt = data.totalCount;
            if(data.iptAthrzDetailEtcInfo !== null){
                this.reqstdocVesslNo = data.iptAthrzDetailEtcInfo.reqstdocVesslNo ;
            }
            this.isSpin = false;
        },(err)=>{
            this.isSpin = false;
        });
    }

    acReset(): any{
        this.searchText = '';
        this.reloadData();
        return false;
    }

    acSearch(): any{
        this.reloadData();
        return false;
    }

    delIptVessl(vesslNo): void{
        const tempDt: IptVesslT = this.dataSave;
        tempDt.mode = 'D';
        tempDt.vesslNo = vesslNo;
        this._popupSV.iptVessProcess(tempDt).subscribe((data)=>{
            alert('삭제 성공');
            this.reloadData();
        },(err)=>{
            alert('삭제 실패');
        });
    }

    close(): void{
        this.drawerRef.close(this.sTmpVesslStr);
    }

    async saveDt(): Promise<any>{
        if(this.dataSave.reqstQy > this.dataSave.hVesslCnt){
            const value = await this._popupSV.iptDummyVesslNo(this.dataSave).toPromise();
            if(value.success === true){
                if(this.dataSave.vesslNoStr === '' ||this.dataSave.vesslNoStr === null ){
                    //this.dataSave.vesslNoStr = '미입력1';
                }
            }else{
                alert('오류가 발생하였습니다.\n다시 시도해주십시요.');
                return false;
            }
        }else if (this.dataSave.reqstQy < this.dataSave.hVesslCnt) {
            alert('신청수량보다 입력된 수량이 많습니다.\n\r삭제 후 저장해주십시요.');
            return false;
        }
        this.sTmpVesslStr = this.dataSave.vesslNoStr;
        if (this.dataSave.reqstQy > 1)
        {
            this.sTmpVesslStr = this.sTmpVesslStr + ' 외' + (this.dataSave.reqstQy-1).toString() + '건';
        }
        this.drawerRef.close(this.sTmpVesslStr);
    }


    excelDown(): void{
        const url = `/Inspection/InspectionPopup/VesslExcelDown?athrzSn=${this.dataSave.athrzSn}&athrzDetailSn=${this.dataSave.athrzDetailSn}`;
        window.open(UrlDefault._url + url, '_blank');
    }
}
