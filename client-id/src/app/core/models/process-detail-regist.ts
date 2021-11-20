/* eslint-disable @typescript-eslint/naming-convention */
export class ProcessDetailRegist{
    inspectionT: InspectionT;
    inspectionProcessHistT: InspectionProcessHistT;
    inspectionCnfrmnIssuT: InspectionCnfrmnIssuT;
    atchmnflArgsT: AtchmnflArgsT;
    constructor(){
        this.inspectionT = new InspectionT();
        this.inspectionProcessHistT = new InspectionProcessHistT();
        this.inspectionCnfrmnIssuT = new InspectionCnfrmnIssuT();
    }
}

export class InspectionT{
    athrzSn: number;
    athrzReqstNo: number;
    athrzRceptNo: string;
    ktcBrffcCode: string;
    ktcBrffcCodeName: string;
    athrzProcessSttusCode: string;
    //athrzProcessSttusName: string;
    proprod: number;
    //insttSn: string;
    //insttNm: string;
    processPrarnDe: Date;
   // entrpsSn: number;
    //entrpsNm: string;
   // rprsntvNm: string;
    //entrpsSeNm: string;
    //bizrno: string;
    //bplcAdresSeCode: string;
    //bplcZip: string;
    //bplcBassAdres: string;
    //bplcDetailAdres: string;
    //bplcTelno: string;
   // bplcFxnum: string;
    //fctryAdresSeZip: string;
    //fctryZip: string;
    //fctryBassAdres: string;
    //fctryDetailAdres: string;
    //fctryTelno: string;
    //fctryFxnum: string;
    //vesslNoMarkSeCode: string;
    //rqstDt_Date: string;
    //rm: string;
    rceptDe: string;
    //rceptChargerId: string;
    rceptChargerNm: string;
    //rceptChargerDeptNm: string;
    rceptConfmDe: Date;
    rceptConfmerId: string;
    //rceptConfmerNm: string;
    //rceptConfmerDeptNm: string;
    athrzChargerId: string;
    //athrzChargerNm: string;
    //athrzChargerDeptNm: string;
    athrzChargerTelno: string;
    lastConfmDe: string;
    athrzRspnberId: string;
    //athrzRspnberNm: string;
    //athrzRspnberDeptNm: string;
    athrzProcessCn: string;
    constructor(){
        this.athrzSn = 0;
        this.athrzReqstNo = null;
        this.athrzRceptNo = null;
        this.ktcBrffcCode = null;
        this.ktcBrffcCodeName = null;
        this.athrzProcessSttusCode = null;
        this.proprod = 0;
        this.processPrarnDe = null;
        this.rceptDe = null;
        this.rceptChargerNm = null;
        this.rceptConfmDe = null;
        this.rceptConfmerId = null;
        this.athrzChargerId = null;
        this.athrzChargerTelno = null;
        this.lastConfmDe = null;
        this.athrzRspnberId = null;
        this.athrzProcessCn = null;
    }
}
export class InspectionProcessHistT{
    athrzSn: number;
    //athrzProgressCode: string;
    //athrzProgressCodeName: string;
    //processCn: string;
    ktcChargerId: string;
    ktcChargerNm: string;
    //ktcChargerDeptNm: string;
    applcntId: string;
    applcntNm: string;
    //rgsDe: string;
    //registDt: Date;
    constructor(){
        this.athrzSn = 0;
        //this.athrzProgressCode = null;
        //this.athrzProgressCodeName = null;
        //this.processCn = null;
        this.ktcChargerId = null;
        this.ktcChargerNm = null;
        //this.ktcChargerDeptNm = null;
        this.applcntId = null;
        this.applcntNm = null;
        //this.rgsDe = null;
        //this.registDt = null;
    }
}

export class InspectionCnfrmnIssuT{
    userId: string;
    athrzSn: number;
    //athrzCnfrmnIssuSn: number;
    issuReqstNbfps: number;
    //issuOutptNbfps: number;
    issuFeeAmount: number;
    issuPrposCn: string;
    outptIndictSeCode: string;
    outptIndictSeCodeName: string;
    //athrzCnfrmnIssuDetailSn: number;
    //athrzIssuNo: string;
    //athrzAtchmnflSn: number;
    // ktcChargerId: string;
    // ktcChargerNm: string;
    // ktcChargerDeptNm: string;
    athrzDetailSn: number;
    // outptAt: string;
    // outptDt: Date;
    //athrzProgressCode: string;
    //rgsDe: string;
    constructor(){
        this.userId = null;
        this.athrzSn = 0;
        //this.athrzCnfrmnIssuSn = 0;
        this.issuReqstNbfps = 0;
        //this.issuOutptNbfps = 0;
        this.issuFeeAmount = null;
        this.issuPrposCn = null;
        this.outptIndictSeCode = null;
        this.outptIndictSeCodeName = null;
        //this.athrzCnfrmnIssuDetailSn = 0;
        //this.athrzIssuNo = null;
        //this.athrzAtchmnflSn = 0;
        // this.ktcChargerId = null;
        // this.ktcChargerNm = null;
        // this.ktcChargerDeptNm = null;
        this.athrzDetailSn = 0;
        // this.outptAt = null;
        // this.outptDt = null;
        //this.athrzProgressCode = null;
        //this.rgsDe = null;
    }
}

export class AtchmnflArgsT {
}
