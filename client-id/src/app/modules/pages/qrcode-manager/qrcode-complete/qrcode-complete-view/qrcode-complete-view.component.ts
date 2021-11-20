import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProcessCompleteView } from 'app/core/interfaces/process-complete-view';
import { InspectionCompleteService } from 'app/core/services/inspection-complete.service';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
    selector: 'qrcode-complete-view',
    templateUrl: './qrcode-complete-view.component.html',
    styleUrls: ['./qrcode-complete-view.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class QrcodeCompleteViewComponent implements OnInit {
    isSpinning = false;
    thisAthrzSn = null;
    dataMain: ProcessCompleteView;

    constructor(private route: ActivatedRoute, private _inspectionCom: InspectionCompleteService, private message: NzMessageService) { }

    ngOnInit(): void {
        this.isSpinning = true;
        this.thisAthrzSn = this.route.snapshot.paramMap.get('athrzSn');

        this._inspectionCom.getInspectionCompleteView(this.thisAthrzSn).subscribe((data) => {
            this.dataMain = data;
            this.isSpinning = false;
        }, (err) => {
            this.isSpinning = false;
            this.createMessage('error', '데이터 다운로드 실패');
        });
    }

    createMessage(type: string, mess: string): void {
        this.message.create(type, mess);
    }
}
