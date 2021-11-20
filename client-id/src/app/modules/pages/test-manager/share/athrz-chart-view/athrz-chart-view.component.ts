import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { TestProcessSttDetail } from 'app/core/interfaces/test-process-status-detail';
import { UrlDefault } from 'app/shared/urlDefault';

@Component({
    selector: 'athrz-chart-view',
    templateUrl: './athrz-chart-view.component.html',
    styleUrls: ['../test-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AthrzChartViewComponent implements OnInit {
    @Input() dataDetail: TestProcessSttDetail;
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
