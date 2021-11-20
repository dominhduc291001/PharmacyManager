import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { InspectionDetailList } from 'app/core/interfaces/athrz-confm-issu';
import { AthrzConfmIssuInfo } from 'app/core/interfaces/athrz-confm-issu-info';
import { ProcessInfoEditModel } from 'app/core/interfaces/process-info-edit-model';
import { TestProcessSttDetail } from 'app/core/interfaces/test-process-status-detail';
import { TestProcessSttSelect } from 'app/core/interfaces/test-process-status-select';
import { TestInfoSave } from 'app/core/models/test-info-save';
import { EntrpsAddress } from 'app/core/models/test-share-models/entrps-address';
import { ProcessTempSave } from 'app/core/models/test-share-models/process-temp-save';
import { InspectionInfoService } from 'app/core/services/inspection-info.service';
import { InspectionProcessService } from 'app/core/services/inspection-process.service';
import { InspectionProcessMap } from 'app/shared/mapper/inspection-process-map';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AddressListService } from '../../share/service-share/address-list.service';
import { FormConfmNoListService } from '../../share/service-share/form-confmno-list.service';

@Component({
    selector: 'info-edit',
    templateUrl: './info-edit.component.html',
    styleUrls: ['./info-edit.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class InfoEditComponent implements OnInit {
    isSpinning = false;
    thisAthrzSn = null;
    dataMain: ProcessInfoEditModel;
    dataRegist: TestProcessSttDetail;
    dataTemp: ProcessTempSave = new ProcessTempSave();
    dataSave: TestInfoSave = new TestInfoSave();
    dataTable: InspectionDetailList[];
    processSelect: TestProcessSttSelect;

    constructor(private route: ActivatedRoute,
        private _inspecInfo: InspectionInfoService,
        private _map: InspectionProcessMap,
        private _auth: AuthService,
        private _testProcess: InspectionProcessService,
        private _addressList: AddressListService,
        private _formConfmNo: FormConfmNoListService,
        private message: NzMessageService) { }

    ngOnInit(): void {
        this.isSpinning = true;
        this.thisAthrzSn = this.route.snapshot.paramMap.get('athrzSn');
        const defaultList: EntrpsAddress[] = [];

        this._testProcess.getProcessStatusDetail(parseInt(this.thisAthrzSn, 10)).subscribe((data: TestProcessSttDetail) => {
            this.dataRegist = data;
            defaultList.push(...data.entrprsFctryAdresList, ...data.entrprsMeterAdresList, ...data.entrprsBplcAdresList);
            this._addressList.athrzAreaAdres$.next(defaultList);
            this._formConfmNo.formConfmNoT$.next(data.fomConfmNoList);
        }, (err) => {
            this.createMessage('error', '데이터 다운로드 실패');
        });

        this._testProcess.getSelectListStt().subscribe((data) => {
            this.processSelect = data;
        }, (err) => {
            this.createMessage('error', '데이터 다운로드 실패');
        });

        this._inspecInfo.getInspectionInfoEdit(this.thisAthrzSn).subscribe((data: ProcessInfoEditModel) => {
            this.dataMain = data;
            this.dataTemp = this._map.infoTempSaveMap(data.inspectionT);
            this.dataSave.inspectionT = this._map.inspectionInfoSaveMap(data.inspectionT);
            this._inspecInfo.getAthrzConfmIssuInfo(this.thisAthrzSn).subscribe((data1: AthrzConfmIssuInfo) => {
                if (data1.inspectionCnfrmnIssu !== null) {
                    this.dataSave.inspectionCnfrmnIssuT = this._map.cnfrmnIssuInfoSaveMap(data1.inspectionCnfrmnIssu);
                }
                this.dataSave.inspectionCnfrmnIssuT.athrzSn = data.inspectionT.athrzSn;
                this.dataTable = data1.inspectionDetailList;
            });
            this.dataTemp.userId = this._auth.userOnl;
            this.dataSave.userId = this._auth.userOnl;
            this.isSpinning = false;
        }, (err) => {
            this.isSpinning = false;
            this.createMessage('error', '데이터 다운로드 실패');
        });
    }

    createMessage(type: string, mess: string): void {
        this.message.create(type, mess);
    }

    saveRequest(): any {
        if (this.dataSave.inspectionT.athrzSn === null) {
            this.createMessage('error', '임시저장 후 저장해주십시요.');
            return false;
        }
        if (this.dataSave.inspectionT.entrpsSn <= 0) {
            this.createMessage('error', '업체정보를 입력해주십시요.');
            return false;
        }
        if (this.dataSave.inspectionT.athrzSn <= 0) {
            this.createMessage('error', '검정정보가 입력되지 않았습니다.');
            return false;
        }
        if (this.dataSave.inspectionT.athrzProcessSttusCode === '' || this.dataSave.inspectionT.athrzProcessSttusCode === null) {
            this.dataSave.inspectionT.athrzProcessSttusCode = 'AD001002';
        }

        this.isSpinning = true;

        this._inspecInfo.inspectionInfoSave(this.dataSave).subscribe((data) => {
            this.isSpinning = false;
            this.createMessage('success', '업데이트 완료.');
        }, (err) => {
            this.isSpinning = false;
            this.createMessage('error', '업데이트가 실패.');
        });
    }
}
