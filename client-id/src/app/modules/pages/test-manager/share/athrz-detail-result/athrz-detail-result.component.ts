import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { AthrzConfmIssu, InspectionDetailList } from 'app/core/interfaces/athrz-confm-issu';
import { InspectionProcessService } from 'app/core/services/inspection-process.service';

@Component({
    selector     : 'athrz-detail-result',
    templateUrl  : './athrz-detail-result.component.html',
    styleUrls    : ['../test-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AthrzDetailResultComponent implements OnInit
{
    @Input() athrzSn = null;
    dataTable: InspectionDetailList[];

    constructor(private _testProcess: InspectionProcessService){}

    ngOnInit(): void {
        this._testProcess.getAthrzConfmIssuRequest(parseInt(this.athrzSn, 10)).subscribe((data) =>{
            this.dataTable = data.inspectionDetailList;
        });
    }
}
