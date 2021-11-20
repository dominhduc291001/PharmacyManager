import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { InspectionSave, TestInfoSave } from 'app/core/models/test-info-save';

@Component({
    selector     : 'application-info',
    templateUrl  : './application-info.component.html',
    styleUrls    : ['../test-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ApplicationInfoComponent implements OnInit
{
    @Input()dataPage: TestInfoSave;
    ngOnInit(): void {
    }
}
