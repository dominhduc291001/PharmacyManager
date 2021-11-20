import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { ProcessCompleteView } from 'app/core/interfaces/process-complete-view';

@Component({
    selector: 'comview-entrps-info-view',
    templateUrl: './comview-entrps-info-view.component.html',
    styleUrls: ['../complete-view-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ComviewEntrpsInfoViewComponent implements OnInit {
    @Input() dataPage: ProcessCompleteView;

    constructor() { }

    ngOnInit(): void {
    }

    lblBizNo(item: string): any {
        if (item !== null) {
            return item?.substr(0, 3) + '-' + item?.substr(3, 2) + '-' + item?.substr(5, 5);
        } else {
            return '';
        }
    }

    bplcDetail(): any {
        let result = '';
        if (this.dataPage?.inspection.bplcZip !== null) {
            result += this.emptyPost(this.dataPage?.inspection.bplcZip);
        }
        if (this.dataPage?.inspection.bplcBassAdres !== null) {
            result += this.dataPage?.inspection.bplcBassAdres;
            if (this.dataPage?.inspection.bplcDetailAdres !== null) {
                result += this.dataPage?.inspection.bplcDetailAdres;
            }
        }
        return result;
    }

    fctryDetail(): any {
        let result = '';
        if (this.dataPage?.inspection.fctryZip !== null) {
            result += this.emptyPost(this.dataPage?.inspection.fctryZip);
        }
        if (this.dataPage?.inspection.fctryBassAdres !== null) {
            result += this.dataPage?.inspection.fctryBassAdres;
            if (this.dataPage?.inspection.fctryDetailAdres !== null) {
                result += this.dataPage?.inspection.fctryDetailAdres;
            }
        }
        return result;
    }

    emptyPost(item: string): any {
        let result = '';
        if (item?.length === 5) {
            result = '(' + item + ')';
        } else if (item?.length === 6) {
            result = '(' + item?.substr(0, 3) + '-' + item?.substr(3, 3) + ')';
        }
        return result;
    }
}
