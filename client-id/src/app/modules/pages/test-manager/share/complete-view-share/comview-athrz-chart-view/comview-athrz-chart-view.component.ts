import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { ProcessCompleteView } from 'app/core/interfaces/process-complete-view';
import { UrlDefault } from 'app/shared/urlDefault';

@Component({
    selector: 'comview-athrz-chart-view',
    templateUrl: './comview-athrz-chart-view.component.html',
    styleUrls: ['../complete-view-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ComviewAthrzChartViewComponent implements OnInit {
    @Input() dataPage: ProcessCompleteView;
    dataFile = [];

    constructor() { }

    ngOnInit(): void {
    }

    fileDown(atchmnflClCode: string, filePath: string, downFileName: string): void {
        if (atchmnflClCode !== null && filePath !== null && downFileName !== null) {
            const url = `/Home/FileDownLoad?atchmnflClCode=${atchmnflClCode}&strRealFileName=${filePath}&strOrginalFileName=${downFileName}`;
            // url old ktc
            window.open(UrlDefault._url + url, '_blank');
        }
    }
}
