import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { TestProcessSttDetail } from 'app/core/interfaces/test-process-status-detail';

@Component({
    selector     : 'test-info-view',
    templateUrl  : './test-info-view.component.html',
    styleUrls    : ['../test-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class TestInfoViewComponent implements OnInit
{
    @Input() dataDetail: TestProcessSttDetail = null;
    constructor(){}

    ngOnInit(): void {
    }
}
