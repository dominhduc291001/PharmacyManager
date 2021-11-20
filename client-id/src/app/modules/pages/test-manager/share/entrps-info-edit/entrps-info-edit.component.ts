/* eslint-disable prefer-const */
import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { formConfmNo } from 'app/core/interfaces/test-process-status-detail';
import { EntrprsSearchbase } from 'app/core/models/inspection-popup/entrprs-search-base';
import { TestInfoSave } from 'app/core/models/test-info-save';
import { EntrpsAddress } from 'app/core/models/test-share-models/entrps-address';
import { InspectionProcessService } from 'app/core/services/inspection-process.service';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { EntrprsSearchListComponent } from '../entrprs-search-list/entrprs-search-list.component';
import { AddressListService } from '../service-share/address-list.service';
import { FormConfmNoListService } from '../service-share/form-confmno-list.service';

@Component({
    selector     : 'entrps-info-edit',
    templateUrl  : './entrps-info-edit.component.html',
    styleUrls    : ['../test-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class EntrpsInfoEditComponent implements OnInit
{
    @Input()dataPage: TestInfoSave;
    dataAddress: EntrpsAddress[] = [];
    sizeDrawer = 720;
    entrprsAdres: number = 0;
    fctryAdres: number = 0;
    constructor(private drawerService: NzDrawerService,
         private _process: InspectionProcessService,
         private _addressList: AddressListService,
         private _formConfmNo: FormConfmNoListService){
    }
    ngOnInit(): void {
    }

    zipCodeOpen(): void{
        // eslint-disable-next-line max-len
        window.open('https://metrology.ktc.re.kr/ZipCode/ZipCode/ZipCodePop?closeHandler=fn_AddressSelect' , 'ZipCodePopup', 'width=665, height=700, scrollbars=yes, resizable=no, toolbar=no, status=yes');
    }

    changeEntrprsAdres(entrprsValue: any): void{
        for(let item of this.dataAddress){
            if(item.entrprsAdresSeCode === 'AC002001' && this.entrprsAdres === item.entrprsAdresSn){
                this.dataPage.inspectionT.bplcAdresSeCode = item.adresSeCode;
                this.dataPage.inspectionT.bplcZip = item.zip;
                this.dataPage.inspectionT.bplcTelno = item.adresTelno;
                this.dataPage.inspectionT.bplcFxnum = item.adresFxnum;
                this.dataPage.inspectionT.bplcBassAdres = item.bassAdres;
                this.dataPage.inspectionT.bplcDetailAdres = item.detailAdres;
            }
        }
    }

    changeFctryAdres(fctryValue: any): void{
        for(let item of this.dataAddress){
            if(item.entrprsAdresSeCode === 'AC002002' && this.fctryAdres === item.entrprsAdresSn){
                this.dataPage.inspectionT.fctryAdresSeZip = item.adresSeCode;
                this.dataPage.inspectionT.fctryZip = item.zip;
                this.dataPage.inspectionT.fctryTelno = item.adresTelno;
                this.dataPage.inspectionT.fctryFxnum = item.adresFxnum;
                this.dataPage.inspectionT.fctryBassAdres = item.bassAdres;
                this.dataPage.inspectionT.fctryDetailAdres = item.detailAdres;
            }
        }
    }

    imgBplcSame(): void{
        this.dataPage.inspectionT.fctryAdresSeZip = this.dataPage.inspectionT.bplcAdresSeCode;
        this.dataPage.inspectionT.fctryZip = this.dataPage.inspectionT.bplcZip;
        this.dataPage.inspectionT.fctryTelno = this.dataPage.inspectionT.bplcTelno;
        this.dataPage.inspectionT.fctryFxnum = this.dataPage.inspectionT.bplcFxnum;
        this.dataPage.inspectionT.fctryBassAdres = this.dataPage.inspectionT.bplcBassAdres;
        this.dataPage.inspectionT.fctryDetailAdres = this.dataPage.inspectionT.bplcDetailAdres;
    }

    entrpsSearch(): void{
        if(window.innerWidth >= 768){
            this.sizeDrawer = 730;
        };
        if(window.innerWidth < 768 && window.innerWidth >= 600){
            this.sizeDrawer = 580;
        }
        if(window.innerWidth < 600){
            this.sizeDrawer = 350;
        }
        const drawerEntrps = this.drawerService.create<EntrprsSearchListComponent>({
                nzTitle: '업체정보관리',
                nzContent: EntrprsSearchListComponent,
                nzWidth:this.sizeDrawer
            });
        drawerEntrps.open();
        drawerEntrps.afterClose.subscribe((data: EntrprsSearchbase)=>{
            if(data !== undefined){
                this.entrprsAdres = null;
                this.fctryAdres = null;
                this.dataPage.inspectionT.entrpsNm = data.entrprsNm;
                this.dataPage.inspectionT.rprsntvNm = data.rprsntvNm;
                this.dataPage.inspectionT.bizrno =data.bizrno;
                this.dataPage.inspectionT.entrpsSn =data.entrprsSn;
                this._process.entrpsAddressList(data.entrprsSn).subscribe((result: EntrpsAddress[])=>{
                    this.dataAddress = result;
                    this._addressList.athrzAreaAdres$.next(result);
                });
                this._process.entrpsFomConfmList(data.entrprsSn).subscribe((resultFm: formConfmNo[])=>{
                    this._formConfmNo.formConfmNoT$.next(resultFm);
                });
            }
        });
    }
}
