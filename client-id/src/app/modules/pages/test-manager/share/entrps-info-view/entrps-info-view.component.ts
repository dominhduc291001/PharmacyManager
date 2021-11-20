import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { TestProcessSttDetail } from 'app/core/interfaces/test-process-status-detail';

@Component({
    selector: 'entrps-info-view',
    templateUrl: './entrps-info-view.component.html',
    styleUrls: ['../test-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class EntrpsInfoViewComponent implements OnInit {
    @Input() dataDetail: TestProcessSttDetail;

    constructor() { }

    ngOnInit(): void {
    }

    bizrnoView(item: string): any {
        if (item !== null) {
            return item.substr(0, 3) + '-' + item.substr(3, 2) + '-' + item.substr(5, 5);
        } else {
            return '';
        }
    }

    busiAddView(): any {
        let result = '';
        if (this.dataDetail?.bplcZip !== null) {
            result += `(${this.dataDetail?.bplcZip})`;
        };
        if (this.dataDetail?.bplcBassAdres !== null) {
            if (this.dataDetail?.bplcDetailAdres !== null) {
                result += this.dataDetail?.bplcBassAdres + this.dataDetail?.bplcDetailAdres;
            } else {
                result += this.dataDetail?.bplcBassAdres;
            }
        }
        return result;
    }

    fcTryAddView(): any {
        let result = '';
        if (this.dataDetail?.fctryZip !== null) {
            result += `(${this.dataDetail?.fctryZip})`;
        };
        if (this.dataDetail?.fctryBassAdres !== null) {
            if (this.dataDetail?.fctryDetailAdres !== null) {
                if (this.dataDetail?.fctryDetailAdres !== null) {
                    result += this.dataDetail?.fctryBassAdres + this.dataDetail?.fctryDetailAdres;
                } else {
                    result += this.dataDetail?.fctryBassAdres;
                };
            }
        }
        return result;
    }
}
