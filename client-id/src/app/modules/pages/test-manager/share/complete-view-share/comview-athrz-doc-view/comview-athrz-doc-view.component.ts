import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { AtchmnflT, ProcessCompleteView } from 'app/core/interfaces/process-complete-view';
import { UrlDefault } from 'app/shared/urlDefault';

@Component({
    selector: 'comview-athrz-doc-view',
    templateUrl: './comview-athrz-doc-view.component.html',
    styleUrls: ['../complete-view-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ComviewAthrzDocViewComponent implements OnInit {
    @Input() dataPage: ProcessCompleteView;

    constructor() { }

    ngOnInit(): void {
    }

    downLink(item: AtchmnflT): void {
        if (item !== null) {
            const url = `/Home/FileDownLoad?atchmnflClCode=AC003035&strRealFileName=${item.atchmnflCours}&strOrginalFileName=${item.atchmnflNm}`;
            // url old ktc
            window.open(UrlDefault._url + url, '_blank');
        }
    }
}
