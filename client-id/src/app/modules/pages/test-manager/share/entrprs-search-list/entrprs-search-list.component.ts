import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { EntrprsSearchRp } from 'app/core/interfaces/entrprs-search-rp';
import { EntrprsSearchbase } from 'app/core/models/inspection-popup/entrprs-search-base';
import { EntrprsSearchModel } from 'app/core/models/inspection-popup/entrprs-search-model';
import { InspectionPopupService } from 'app/core/services/inspection-popup.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
    selector     : 'entrprs-search-list',
    templateUrl  : './entrprs-search-list.component.html',
    styleUrls    : ['../test-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class EntrprsSearchListComponent implements OnInit
{
    searchRq: EntrprsSearchModel = new EntrprsSearchModel();
    dataTable: EntrprsSearchRp[];
    isSpin = false;
    indexPage = 1;
    totalPage: number;
    loadingTable = false;
    searchBase: EntrprsSearchbase = new EntrprsSearchbase();
    constructor(private _popup: InspectionPopupService, private drawerRef: NzDrawerRef<EntrprsSearchbase>){}
    ngOnInit(): void {
        this.isSpin = true;
        this._popup.entrprsSearchListPopup(this.searchRq).subscribe((data)=>{
            this.dataTable = data;
            this.totalPage = data[0].totalCount;
            this.isSpin = false;
        },(err)=>{this.isSpin = false;});
    }

    search(): void{
        this.loadingTable = true;
        this._popup.entrprsSearchListPopup(this.searchRq).subscribe((data)=>{
            if(data.length === 0){
                this.dataTable = [];
                this.totalPage = 1;
            }else{
                this.dataTable = data;
                this.totalPage = data[0].totalCount;
            };
            this.loadingTable = false;
        },(err)=>{this.loadingTable = false;});
    }

    pageChange(): void{
        this.loadingTable = true;
        const start = this.indexPage * 10;
        this.searchRq.startIndex = start -9;
        this.searchRq.endIndex = start;
        this._popup.entrprsSearchListPopup(this.searchRq).subscribe((data)=>{
            this.dataTable = data;
            this.totalPage = data[0].totalCount;
            this.loadingTable = false;
        },(err)=>{this.loadingTable = false;});
    }

    close(item: EntrprsSearchRp): void{
        this.searchBase.entrprsNm = item.entrprsNm;
        this.searchBase.entrprsSn = item.entrprsSn;
        this.searchBase.rprsntvNm = item.rprsntvNm;
        this.searchBase.bizrno = item.bizrno;
        this.searchBase.enterpriseSectionName = item.enterpriseSectionName;
        this.drawerRef.close(this.searchBase);
    }
}
