import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProcessCompleteView, QrcodeInfoView } from 'app/core/interfaces/process-complete-view';
import { InspectionInfoService } from 'app/core/services/inspection-info.service';
import { QrcodeManagerService } from 'app/core/services/qrcode-manager.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'qrcode-info-view',
    templateUrl: './qrcode-info-view.component.html',
    styleUrls: ['./qrcode-info-view.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class QrcodeInfoViewComponent implements OnInit {
    isSpinning = false;
    thisAthrzSn = null;
    dataMain: ProcessCompleteView;
    dataDetailView: QrcodeInfoView;

    constructor(
        private route: ActivatedRoute,
        private _inspectionInfo: InspectionInfoService,
        private _qrcodeManager: QrcodeManagerService,
        private message: NzMessageService) { }

    ngOnInit(): void {
        this.isSpinning = true;
        this.thisAthrzSn = this.route.snapshot.paramMap.get('athrzSn');

        this._inspectionInfo.getInspectionInfoView(this.thisAthrzSn).subscribe((data) => {
            this.dataMain = data;
            this.isSpinning = false;
        }, (err) => {
            this.isSpinning = false;
            this.createMessage('error', '데이터 다운로드 실패');
        });

        this._qrcodeManager.qrcodeInfoView(this.thisAthrzSn).subscribe((data) => {
            this.dataDetailView = data;
        }, (err) => {
            this.isSpinning = false;
            this.createMessage('error', '데이터 다운로드 실패');
        });
    }

    createMessage(type: string, mess: string): void {
        this.message.create(type, mess);
    }
}
