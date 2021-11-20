import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { ProcessAtchmnflList } from 'app/core/interfaces/process-atchmnfl-list';
import { InspectionProcessService } from 'app/core/services/inspection-process.service';
import { UrlDefault } from 'app/shared/urlDefault';

@Component({
    selector: 'athrz-doc-view',
    templateUrl: './athrz-doc-view.component.html',
    styleUrls: ['../test-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AthrzDocViewComponent implements OnInit {
    @Input() athrzSn = null;

    dataFile: ProcessAtchmnflList[] = [];

    constructor(private _testProcess: InspectionProcessService) { }

    ngOnInit(): void {
        this._testProcess.getProcessAtchmnflList(this.athrzSn).subscribe((data) => {
            this.dataFile = data;
        });
    }

    downLink(item: ProcessAtchmnflList): void {
        if (item !== null) {
            const url = `/Home/FileDownLoad?atchmnflClCode=AC003035&strRealFileName=${item.atchmnflCours}&strOrginalFileName=${item.atchmnflNm}`;
            // url old ktc
            window.open(UrlDefault._url + url, '_blank');
        }
    }
}
