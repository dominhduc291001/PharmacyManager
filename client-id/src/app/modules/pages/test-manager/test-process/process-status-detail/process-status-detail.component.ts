import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestProcessSttDetail } from 'app/core/interfaces/test-process-status-detail';
import { TestProcessSttSelect } from 'app/core/interfaces/test-process-status-select';
import { ProcessDetailRegist } from 'app/core/models/process-detail-regist';
import { ProcessTempSave } from 'app/core/models/test-share-models/process-temp-save';
import { InspectionProcessService } from 'app/core/services/inspection-process.service';
import { InspectionProcessMap } from 'app/shared/mapper/inspection-process-map';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'process-status-detail',
    templateUrl: './process-status-detail.component.html',
    styleUrls: ['./process-status-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ProcessStatusDetailComponent implements OnInit {
    isSpinning = false;
    dataSave: ProcessDetailRegist = new ProcessDetailRegist();
    dataDetail: TestProcessSttDetail;
    dataTemp: ProcessTempSave;
    thisAthrzSn = null;
    step = -1;
    processSelect: TestProcessSttSelect;
    titlePage = null;

    constructor(private route: ActivatedRoute, private _testProcess: InspectionProcessService, private _map: InspectionProcessMap, private message: NzMessageService) { }

    ngOnInit(): void {
        this.isSpinning = true;
        this.thisAthrzSn = this.route.snapshot.paramMap.get('athrzSn');
        this.titlePage = this.route.snapshot.paramMap.get('subViewName') === 'subViewStatus' ? '전체현황' : '검정업무 조회';

        this._testProcess.getProcessStatusDetail(parseInt(this.thisAthrzSn, 10)).subscribe((data: TestProcessSttDetail) => {
            this.dataDetail = data;
            this.getSteps(data);
            this.dataSave = this._map.detailToRegist(data);
            this.dataTemp = this._map.detailToTemp(data);
            this.isSpinning = false;
        }, (err) => {
            this.isSpinning = false;
            this.createMessage('error', '데이터 다운로드 실패');
        });

        this._testProcess.getSelectListStt().subscribe((data) => {
            this.processSelect = data;
        }, (err) => {
            this.isSpinning = false;
            this.createMessage('error', '데이터 다운로드 실패');
        });
    }

    createMessage(type: string, mess: string): void {
        this.message.create(type, mess);
    }

    getSteps(data: TestProcessSttDetail): void {
        if (data.athrzProcessSttusCode === 'AD001002') { this.step = 0; };
        if (data.athrzProcessSttusCode === 'AD001003') { this.step = 1; };
        if (data.athrzProcessSttusCode === 'AD001004') { this.step = 2; };
        if (data.athrzProcessSttusCode === 'AD001005') { this.step = 3; };
        if (data.athrzProcessSttusCode === 'AD001006') { this.step = 4; };
        if (data.athrzProcessSttusCode === 'AD001007') { this.step = 5; };
    }
}
