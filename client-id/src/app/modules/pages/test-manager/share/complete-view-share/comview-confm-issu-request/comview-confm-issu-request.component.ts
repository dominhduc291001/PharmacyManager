import { Component, ViewEncapsulation, OnInit, Input, AfterContentInit } from '@angular/core';
import { ProcessCompleteView } from 'app/core/interfaces/process-complete-view';

@Component({
    selector: 'comview-confm-issu-request',
    templateUrl: './comview-confm-issu-request.component.html',
    styleUrls: ['../complete-view-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ComviewConfmIssuRequestComponent implements OnInit {
    @Input() dataPage: ProcessCompleteView;
    constructor() { }
    ngOnInit(): void {
    }

    checkIss(item: string): any {
        if (item !== null) {
            if (item === 'Y') {
                return true;
            }
        }
        return false;
    }

    reponsiveTable(): any {
        if (window.innerWidth < 1080) {
            return { x: '800px' };
        }
        return null;
    }
}
