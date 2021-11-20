import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { ProcessInfoSelect } from 'app/core/interfaces/process-info-select';
import { ProcessDetailRegist } from 'app/core/models/process-detail-regist';
import { InspectionProcessService } from 'app/core/services/inspection-process.service';

@Component({
    selector     : 'process-info-regist',
    templateUrl  : './process-info-regist.component.html',
    styleUrls    : ['../test-share.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ProcessInfoRegistComponent implements OnInit
{
    @Input() processDetailRegist: ProcessDetailRegist;
    selectData: ProcessInfoSelect;

    constructor(private _testProcess: InspectionProcessService){}

    ngOnInit(): void {
        this._testProcess.getProcessInfoSelect().subscribe((data) => {
            this.selectData = data;
        });
    }

    changeAthrzCharger(event: any): void{
        const item = this.selectData.athrzChargerList.filter((value: any) => value.userId === event.value);
        this.processDetailRegist.inspectionT.athrzChargerTelno = item[0]?.telno;
    }
}
