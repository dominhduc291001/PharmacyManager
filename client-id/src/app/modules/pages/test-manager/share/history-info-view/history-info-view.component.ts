import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { ProcessHistList } from 'app/core/interfaces/process-hist-list';
import { InspectionProcessService } from 'app/core/services/inspection-process.service';

@Component({
    selector     : 'history-info-view',
    templateUrl  : './history-info-view.component.html',
    styleUrls    : ['../test-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class HistoryInfoViewComponent implements OnInit
{
    @Input() athrzSn = null;
    dataTable: ProcessHistList[];
    constructor(private _testProcess: InspectionProcessService){}

    ngOnInit(): void {
        this._testProcess.getProcessHistList(this.athrzSn).subscribe((data) => {
            this.dataTable = data;
        });
    }

    reponsiveTable(): any {
        if (window.innerWidth < 1080) {
            return { x: '1000px' };
        }
        return null;
    }
}
