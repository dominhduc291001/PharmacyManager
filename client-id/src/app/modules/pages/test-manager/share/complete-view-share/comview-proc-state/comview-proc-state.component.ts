import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { ProcessCompleteView } from 'app/core/interfaces/process-complete-view';

@Component({
    selector     : 'comview-proc-state',
    templateUrl  : './comview-proc-state.component.html',
    styleUrls    : ['../complete-view-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ComviewProcStateComponent implements OnInit
{
    @Input()dataPage: ProcessCompleteView;

    constructor(){}

    ngOnInit(): void {
    }
}
