import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { ProcessCompleteView } from 'app/core/interfaces/process-complete-view';

@Component({
    selector     : 'comview-athrz-info-view',
    templateUrl  : './comview-athrz-info-view.component.html',
    styleUrls    : ['../complete-view-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ComviewAthrzInfoViewComponent implements OnInit
{
    @Input()dataPage: ProcessCompleteView;

    constructor(){}

    ngOnInit(): void {
    }
}
