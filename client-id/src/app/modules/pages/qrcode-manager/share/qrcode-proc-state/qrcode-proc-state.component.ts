import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { ProcessCompleteView } from 'app/core/interfaces/process-complete-view';

@Component({
    selector     : 'qrcode-proc-state',
    templateUrl  : './qrcode-proc-state.component.html',
    styleUrls    : ['../qrcode-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class QrcodeProcStateComponent implements OnInit
{
    @Input()dataPage: ProcessCompleteView;

    constructor(){}

    ngOnInit(): void {
    }
}
