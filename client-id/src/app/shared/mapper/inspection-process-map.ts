/* eslint-disable prefer-const */
import { Injectable } from '@angular/core';
import { InspectionCnfrmnIssu } from 'app/core/interfaces/athrz-confm-issu';
import { Inspection } from 'app/core/interfaces/process-complete-view';
import { ProcessInfoEditModel } from 'app/core/interfaces/process-info-edit-model';
import { TestProcessSttDetail } from 'app/core/interfaces/test-process-status-detail';
import { InspectionCnfrmnIssuT, InspectionProcessHistT, InspectionT, ProcessDetailRegist } from 'app/core/models/process-detail-regist';
import { CnfrmnIssuTSave, InspectionSave, TestInfoSave } from 'app/core/models/test-info-save';
import { AthrzDetailRegist } from 'app/core/models/test-share-models/athrz-detail-regist';
import { InspecTemp, ProcessTempSave } from 'app/core/models/test-share-models/process-temp-save';

@Injectable({
    providedIn: 'root'
})
export class InspectionProcessMap{
    public detailToRegist(dataDetail: TestProcessSttDetail): any{
        // eslint-disable-next-line prefer-const
        let dataSave: ProcessDetailRegist = new ProcessDetailRegist();
        dataSave.inspectionT = this.inspectionTMap(dataDetail);
        dataSave.inspectionProcessHistT = this.inspectionProcessHistTMap(dataDetail);
        dataSave.inspectionCnfrmnIssuT = this.inspectionCnfrmnIssuTMap(dataDetail);
        return dataSave;
    }

    public detailToTemp(data: TestProcessSttDetail): any{
        // eslint-disable-next-line prefer-const
        let result: ProcessTempSave = new ProcessTempSave();
        //map data
        result.inspecTemp.athrzProcessSttusCode = data.athrzProcessSttusCode;
        result.inspecTemp.athrzSn = data.athrzSn;
        result.inspecCnfrmnIssu.athrzSn = data.athrzSn;
        result.inspecTemp.processPrarnDe = data.processPrarnDe;
        if(data.insttSn !== null){
            result.inspecTemp.insttSn = data.insttSn;
        }
        result.inspecTemp.athrzReqstNo = data.athrzReqstNo;
        result.inspecTemp.athrzRceptNo = data.athrzRceptNo;
        result.inspecTemp.ktcBrffcCode = data.ktcBrffcCode;
        result.inspecTemp.proprod = data.proprod;
        result.inspecTemp.entrpsSn = data.entrpsSn;
        result.inspecTemp.entrpsNm = data.entrpsNm;
        result.inspecTemp.rprsntvNm = data.rprsntvNm;
        result.inspecTemp.bizrno = data.bizrno;
        result.inspecTemp.bplcAdresSeCode = data.bplcAdresSeCode;
        result.inspecTemp.bplcZip = data.bplcZip;
        result.inspecTemp.bplcBassAdres = data.bplcBassAdres;
        result.inspecTemp.bplcDetailAdres = data.bplcDetailAdres;
        result.inspecTemp.bplcTelno = data.bplcTelno;
        result.inspecTemp.bplcFxnum = data.bplcFxnum;
        result.inspecTemp.fctryAdresSeZip = data.fctryAdresSeZip;
        result.inspecTemp.fctryZip = data.fctryZip;
        result.inspecTemp.fctryBassAdres = data.fctryBassAdres;
        result.inspecTemp.fctryDetailAdres = data.fctryDetailAdres;
        result.inspecTemp.fctryTelno = data.fctryTelno;
        result.inspecTemp.fctryFxnum = data.fctryFxnum;
        result.inspecTemp.vesslNoMarkSeCode = data.vesslNoMarkSeCode;
        result.inspecTemp.bsrpDeCtDaycnt = data.bsrpDeCtDaycnt;
        result.inspecTemp.bsrpNmprCo = data.bsrpNmprCo;
        result.inspecTemp.bsrpDeCtAmount = data.bsrpDeCtAmount;
        result.inspecTemp.bsrpStayngCtDaycnt = data.bsrpStayngCtDaycnt;
        result.inspecTemp.bsrpStayngCtAmount = data.bsrpStayngCtAmount;
        result.inspecTemp.btrpsSm = data.btrpsSm;
        result.inspecTemp.tnAthrzfeeAmount = data.tnAthrzfeeAmount;
        result.inspecTemp.postFee = data.postFee;
        result.inspecTemp.eqpRntfee = data.eqpRntfee;
        result.inspecTemp.athrzCnfrmnOutptAmount = data.athrzCnfrmnOutptAmount;
        result.inspecTemp.etcamount = data.etcamount;
        result.inspecTemp.subsum = data.subsum;
        result.inspecTemp.vat = data.vat;
        result.inspecTemp.totalSmAm = data.totalSmAm;
        result.inspecTemp.payAt = data.payAt;
        result.inspecTemp.feePayDe = data.feePayDe;
        result.inspecTemp.feePayCnfrmrId = data.feePayCnfrmrId;
        result.inspecTemp.feePayCnfrmrNm = data.feePayCnfrmrNm;
        result.inspecTemp.feePayCnfrmrDeptNm = data.feePayCnfrmrDeptNm;
        result.inspecTemp.athrzReqstCn = data.athrzReqstCn;
        result.inspecTemp.athrzProcessCn = data.athrzProcessCn;
        result.inspecTemp.applcntId = data.applcntId;
        result.inspecTemp.applcntNm = data.applcntNm;
        result.inspecTemp.applcntTelno = data.applcntTelno;
        result.inspecTemp.applcntMbtlnum = data.applcntMbtlnum;
        result.inspecTemp.applcntEmailAdres = data.applcntEmailAdres;
        result.inspecTemp.rm = data.rm;
        result.inspecTemp.rceptDe = data.rceptDe;
        result.inspecTemp.rceptChargerId = data.rceptChargerId;
        result.inspecTemp.rceptChargerNm = data.rceptChargerNm;
        result.inspecTemp.rceptChargerDeptNm = data.rceptChargerDeptNm;
        result.inspecTemp.rceptConfmerId = data.rceptConfmerId;
        result.inspecTemp.rceptConfmerNm = data.rceptConfmerNm;
        result.inspecTemp.rceptConfmerDeptNm = data.rceptConfmerDeptNm;
        result.inspecTemp.athrzChargerId = data.athrzChargerId;
        result.inspecTemp.athrzChargerNm = data.athrzChargerNm;
        result.inspecTemp.athrzChargerDeptNm = data.athrzChargerDeptNm;
        result.inspecTemp.athrzChargerTelno = data.athrzChargerTelno;
        result.inspecTemp.lastConfmDe = data.lastConfmDe;
        result.inspecTemp.athrzRspnberId = data.athrzRspnberId;
        result.inspecTemp.athrzRspnberNm = data.athrzRspnberNm;
        result.inspecTemp.athrzRspnberDeptNm = data.athrzRspnberDeptNm;

        return result;
    }

    private inspectionTMap(data: TestProcessSttDetail): any{
        // eslint-disable-next-line prefer-const
        let result: InspectionT = new InspectionT();
        //map data;
        result.athrzSn = data.athrzSn;
        result.athrzReqstNo = data.athrzReqstNo;
        result.athrzRceptNo = data.athrzRceptNo;
        result.ktcBrffcCode = data.ktcBrffcCode;
        result.ktcBrffcCodeName = data.ktcBrffcCodeName;
        result.athrzProcessSttusCode = data.athrzProcessSttusCode;
        result.proprod = data.proprod;
        result.processPrarnDe = data.processPrarnDe;
        result.rceptDe = data.rceptDe;
        result.rceptChargerNm = data.rceptChargerNm;
        result.rceptConfmDe = data.rceptConfmDe;
        result.rceptConfmerId = data.rceptChargerId;
        result.athrzChargerId = data.athrzChargerId;
        result.athrzChargerTelno = data.athrzChargerTelno;
        result.lastConfmDe = data.lastConfmDe;
        result.athrzRspnberId = data.athrzRspnberId;
        result.athrzProcessCn = data.athrzProcessCn;

        return result;
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    public inspectionDetailProcessMap(tempSave: InspecTemp, result: AthrzDetailRegist): any{
        tempSave.mrnrSeCode = result.mrnrSeCode;
        tempSave.athrzDetailSn = result.athrzDetailSn;
        tempSave.athrzSeCode = result.athrzSeCode;
        tempSave.reqstQy = result.reqstQy;
        if(result.athrzAreaAdres !== null){
            tempSave.athrzAreaAdresSeCode = result.athrzAreaAdres.toString();
        }
        tempSave.athrzAreaBassAdres = result.athrzAreaBassAdres;
        tempSave.athrzAreaZip = result.athrzAreaZip;
        tempSave.athrzAreaTaxAdres = result.athrzAreaTaxAdres;
        tempSave.athrzHopeDe = result.athrzHopeDe;
        tempSave.mesurProofBsshAt = result.mesurProofBsshAt;
        tempSave.stndrdNm = result.stndrdNm;
        tempSave.fomConfmConfmNo = result.inp_fomConfmSn;
        if(result.athrzExpDe2 < 10){
            tempSave.athrzExpDe = `${result.athrzExpDe1}0${result.athrzExpDe2}`;
        }else{
            tempSave.athrzExpDe = `${result.athrzExpDe1}${result.athrzExpDe2}`;
        }
        tempSave.athrzExpDe1 = result.athrzExpDe1;
        tempSave.athrzExpDe2 = result.athrzExpDe2;
        tempSave.athrzAllAt = result.athrzAllAt;
        return tempSave;
    }

    private inspectionProcessHistTMap(data: TestProcessSttDetail): any{
        // eslint-disable-next-line prefer-const
        let result: InspectionProcessHistT = new InspectionProcessHistT();
        // map data
        result.athrzSn = data.athrzSn;
        result.applcntId = data.applcntId;
        result.applcntNm = data.applcntNm;

        return result;
    }

    private inspectionCnfrmnIssuTMap(data: TestProcessSttDetail): any{
        // eslint-disable-next-line prefer-const
        let result: InspectionCnfrmnIssuT = new InspectionCnfrmnIssuT();
        //map data
        result.athrzSn = data.athrzSn;
        result.issuReqstNbfps = data.issuReqstNbfps;
        result.issuFeeAmount = data.issuFeeAmount;
        result.issuPrposCn = data.issuPrposCn;
        result.outptIndictSeCode = data.outptIndictSeCode;
        result.outptIndictSeCodeName = data.outptIndictSeCodeName;

        return result;
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    public inspectionInfoSaveMap(data: Inspection): any{
        let result: InspectionSave = new InspectionSave();
        result.athrzProcessSttusCode = data.athrzProcessSttusCode;
        result.athrzSn = data.athrzSn;
        result.processPrarnDe = data.processPrarnDe;
        result.athrzReqstNo = data.athrzReqstNo;
        result.athrzRceptNo =data.athrzRceptNo;
        result.ktcBrffcCode = data.ktcBrffcCode;
        result.proprod = data.proprod;
        result.entrpsSn = data.entrpsSn;
        result.entrpsNm = data.entrpsNm;
        result.rprsntvNm = data.rprsntvNm;
        result.entrpsSeNm = data.entrpsSeNm;
        result.bizrno = data.bizrno;
        result.bplcAdresSeCode = data.bplcAdresSeCode;
        result.bplcZip = data.bplcZip;
        result.bplcBassAdres = data.bplcBassAdres;
        result.bplcDetailAdres = data.bplcDetailAdres;
        result.bplcTelno = data.bplcTelno;
        result.bplcFxnum = data.bplcFxnum;
        result.fctryAdresSeZip = data.fctryAdresSeZip;
        result.fctryZip = data.fctryZip;
        result.fctryBassAdres = data.fctryBassAdres;
        result.fctryDetailAdres = data.fctryDetailAdres;
        result.fctryTelno = data.fctryTelno;
        result.fctryFxnum = data.fctryFxnum;
        result.vesslNoMarkSeCode = data.vesslNoMarkSeCode;
        result.bsrpTrnsportCt = data.bsrpTrnsportCt;
        result.bsrpDeCtDaycnt = data.bsrpDeCtDaycnt;
        result.bsrpNmprCo = data.bsrpNmprCo;
        result.bsrpDeCtAmount = data.bsrpDeCtAmount;
        result.bsrpStayngCtDaycnt = data.bsrpStayngCtDaycnt;
        result.bsrpStayngCtAmount = data.bsrpStayngCtAmount;
        result.btrpsSm = data.btrpsSm;
        result.tnAthrzfeeAmount = data.tnAthrzfeeAmount;
        result.postFee = data.postFee;
        result.eqpRntfee = data.eqpRntfee;
        result.athrzCnfrmnOutptAmount = data.athrzCnfrmnOutptAmount;
        result.etcamount = data.etcamount;
        result.subsum = data.subsum;
        result.vat = data.vat;
        result.totalSmAm = data.totalSmAm;
        result.payAt = data.payAt;
        result.feePayDe = data.feePayDe;
        result.feePayCnfrmrId = data.feePayCnfrmrId;
        result.feePayCnfrmrNm = data.feePayCnfrmrNm;
        result.feePayCnfrmrDeptNm = data.feePayCnfrmrDeptNm;
        result.athrzReqstCn = data.athrzReqstCn;
        result.athrzProcessCn = data.athrzProcessCn;
        result.rqstDt = data.rqstDt;
        result.applcntId = data.applcntId;
        result.applcntNm = data.applcntNm;
        result.applcntTelno = data.applcntTelno;
        result.applcntMbtlnum = data.applcntMbtlnum;
        result.applcntEmailAdres = data.applcntEmailAdres;
        result.rm = data.rm;
        result.rceptDe = data.rceptDe;
        result.rceptChargerId = data.rceptChargerId;
        result.rceptChargerNm = data.rceptChargerNm;
        result.rceptChargerDeptNm = data.rceptChargerDeptNm;
        result.rceptConfmDe = data.rceptConfmDe;
        result.rceptConfmerId = data.rceptConfmerId;
        result.rceptConfmerNm = data.rceptConfmerNm;
        result.rceptConfmerDeptNm = data.rceptConfmerDeptNm;
        result.athrzChargerId = data.athrzChargerId;
        result.athrzChargerNm = data.athrzChargerNm;
        result.athrzChargerDeptNm = data.athrzChargerDeptNm;
        result.athrzChargerTelno = data.athrzChargerTelno;
        result.lastConfmDe = data.lastConfmDe;
        result.athrzRspnberId = data.athrzRspnberId;
        result.athrzRspnberNm = data.athrzRspnberNm;
        result.athrzRspnberDeptNm = data.athrzRspnberDeptNm;
        result.mode = data.mode;

        return result;
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    public cnfrmnIssuInfoSaveMap(data: InspectionCnfrmnIssu): any{
        let result: CnfrmnIssuTSave = new CnfrmnIssuTSave();
        result.athrzSn = data.athrzSn;
        result.athrzCnfrmnIssuSn = data.athrzCnfrmnIssuSn;
        result.issuReqstNbfps = data.issuReqstNbfps;
        result.issuOutptNbfps = data.issuOutptNbfps;
        result.issuFeeAmount = data.issuFeeAmount;
        result.issuPrposCn = data.issuPrposCn;
        result.outptIndictSeCode = data.outptIndictSeCode;
        result.outptIndictSeCodeName = data.outptIndictSeCodeName;
        return result;
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    public infoTempSaveMap(data: Inspection): any{
        let result:  ProcessTempSave = new  ProcessTempSave();
        //map data
        result.inspecTemp.athrzProcessSttusCode = data.athrzProcessSttusCode;
        result.inspecTemp.athrzSn = data.athrzSn;
        result.inspecCnfrmnIssu.athrzSn = data.athrzSn;
        if(data.processPrarnDe !== null){
            result.inspecTemp.processPrarnDe = new Date(data.processPrarnDe);
        }
        if(data.insttSn !== null){
            result.inspecTemp.insttSn = data.insttSn;
        }
        result.inspecTemp.athrzReqstNo = data.athrzReqstNo;
        result.inspecTemp.athrzRceptNo = data.athrzRceptNo;
        result.inspecTemp.ktcBrffcCode = data.ktcBrffcCode;
        result.inspecTemp.proprod = data.proprod;
        result.inspecTemp.entrpsSn = data.entrpsSn;
        result.inspecTemp.entrpsNm = data.entrpsNm;
        result.inspecTemp.rprsntvNm = data.rprsntvNm;
        result.inspecTemp.bizrno = data.bizrno;
        result.inspecTemp.bplcAdresSeCode = data.bplcAdresSeCode;
        result.inspecTemp.bplcZip = data.bplcZip;
        result.inspecTemp.bplcBassAdres = data.bplcBassAdres;
        result.inspecTemp.bplcDetailAdres = data.bplcDetailAdres;
        result.inspecTemp.bplcTelno = data.bplcTelno;
        result.inspecTemp.bplcFxnum = data.bplcFxnum;
        result.inspecTemp.fctryAdresSeZip = data.fctryAdresSeZip;
        result.inspecTemp.fctryZip = data.fctryZip;
        result.inspecTemp.fctryBassAdres = data.fctryBassAdres;
        result.inspecTemp.fctryDetailAdres = data.fctryDetailAdres;
        result.inspecTemp.fctryTelno = data.fctryTelno;
        result.inspecTemp.fctryFxnum = data.fctryFxnum;
        result.inspecTemp.vesslNoMarkSeCode = data.vesslNoMarkSeCode;
        result.inspecTemp.bsrpDeCtDaycnt = data.bsrpDeCtDaycnt;
        result.inspecTemp.bsrpNmprCo = data.bsrpNmprCo;
        result.inspecTemp.bsrpDeCtAmount = data.bsrpDeCtAmount;
        result.inspecTemp.bsrpStayngCtDaycnt = data.bsrpStayngCtDaycnt;
        result.inspecTemp.bsrpStayngCtAmount = data.bsrpStayngCtAmount;
        result.inspecTemp.btrpsSm = data.btrpsSm;
        result.inspecTemp.tnAthrzfeeAmount = data.tnAthrzfeeAmount;
        result.inspecTemp.postFee = data.postFee;
        result.inspecTemp.eqpRntfee = data.eqpRntfee;
        result.inspecTemp.athrzCnfrmnOutptAmount = data.athrzCnfrmnOutptAmount;
        result.inspecTemp.etcamount = data.etcamount;
        result.inspecTemp.subsum = data.subsum;
        result.inspecTemp.vat = data.vat;
        result.inspecTemp.totalSmAm = data.totalSmAm;
        result.inspecTemp.payAt = data.payAt;
        result.inspecTemp.feePayDe = data.feePayDe;
        result.inspecTemp.feePayCnfrmrId = data.feePayCnfrmrId;
        result.inspecTemp.feePayCnfrmrNm = data.feePayCnfrmrNm;
        result.inspecTemp.feePayCnfrmrDeptNm = data.feePayCnfrmrDeptNm;
        result.inspecTemp.athrzReqstCn = data.athrzReqstCn;
        result.inspecTemp.athrzProcessCn = data.athrzProcessCn;
        result.inspecTemp.applcntId = data.applcntId;
        result.inspecTemp.applcntNm = data.applcntNm;
        result.inspecTemp.applcntTelno = data.applcntTelno;
        result.inspecTemp.applcntMbtlnum = data.applcntMbtlnum;
        result.inspecTemp.applcntEmailAdres = data.applcntEmailAdres;
        result.inspecTemp.rm = data.rm;
        if(data.rceptDe !== null){
            result.inspecTemp.rceptDe = data.rceptDe.toString();
        }
        result.inspecTemp.rceptChargerId = data.rceptChargerId;
        result.inspecTemp.rceptChargerNm = data.rceptChargerNm;
        result.inspecTemp.rceptChargerDeptNm = data.rceptChargerDeptNm;
        result.inspecTemp.rceptConfmerId = data.rceptConfmerId;
        result.inspecTemp.rceptConfmerNm = data.rceptConfmerNm;
        result.inspecTemp.rceptConfmerDeptNm = data.rceptConfmerDeptNm;
        result.inspecTemp.athrzChargerId = data.athrzChargerId;
        result.inspecTemp.athrzChargerNm = data.athrzChargerNm;
        result.inspecTemp.athrzChargerDeptNm = data.athrzChargerDeptNm;
        result.inspecTemp.athrzChargerTelno = data.athrzChargerTelno;
        if(data.lastConfmDe !== null){
            result.inspecTemp.lastConfmDe = data.lastConfmDe.toString();
        }
        result.inspecTemp.athrzRspnberId = data.athrzRspnberId;
        result.inspecTemp.athrzRspnberNm = data.athrzRspnberNm;
        result.inspecTemp.athrzRspnberDeptNm = data.athrzRspnberDeptNm;

        return result;
    }
}
