import { InspectionCnfrmnIssu, InspectionDetailList } from './athrz-confm-issu';

/* eslint-disable @typescript-eslint/naming-convention */
export interface QrcodeInfoView{
    qrCodeInfoViewNow: ProcessCompleteView;
    qrCodeInfoViewPre: ProcessCompleteView;
}
export interface ProcessCompleteView{
    inspection: Inspection;
    inspectionCnfrmnIssu: InspectionCnfrmnIssu;
    inspectionDetailTList: InspectionDetailList[];
    inspectionAtchmnflList: AtchmnflT[];
}

export interface Inspection{
    athrzSn: number;
    athrzReqstNo: number;
    athrzRceptNo: string;
    ktcBrffcCode: string;
    ktcBrffcCodeName: string;
    athrzProcessSttusCode: string;
    statusClassName2: string;
    athrzProcessSttusName: string;
    proprod: number;
    insttSn: number;
    insttNm: string;
    processPrarnDe: string;
    entrpsSn: number;
    entrpsNm: string;
    rprsntvNm: string;
    entrpsSeNm: string;
    bizrno: string;
    bplcAdresSeCode: string;
    bplcZip: string;
    bplcBassAdres: string;
    bplcDetailAdres: string;
    bplcTelno: string;
    bplcFxnum: string;
    fctryAdresSeZip: string;
    fctryZip: string;
    fctryBassAdres: string;
    fctryDetailAdres: string;
    fctryTelno: string;
    fctryFxnum: string;
    vesslNoMarkSeCode: string;
    bsrpTrnsportCt: number;
    bsrpDeCtDaycnt: number;
    bsrpNmprCo: number;
    bsrpDeCtAmount: number;
    bsrpStayngCtDaycnt: number;
    bsrpStayngCtAmount: number;
    btrpsSm: number;
    tnAthrzfeeAmount: number;
    postFee: number;
    eqpRntfee: number;
    athrzCnfrmnOutptAmount: number;
    etcamount: number;
    subsum: number;
    vat: number;
    totalSmAm: number;
    payAt: string;
    feePayDe: string;
    feePayCnfrmrId: string;
    feePayCnfrmrNm: string;
    feePayCnfrmrDeptNm: string;
    athrzReqstCn: string;
    athrzProcessCn: string;
    rqstDt: Date;
    rqstDt_Date: string;
    applcntId: string;
    applcntNm: string;
    applcntTelno: string;
    applcntMbtlnum: string;
    applcntMbtlnum2: string;
    applcntEmailAdres: string;
    rm: string;
    rceptDe: Date;
    rceptChargerId: string;
    rceptChargerNm: string;
    rceptChargerDeptNm: string;
    rceptConfmDe: Date;
    rceptConfmerId: string;
    rceptConfmerNm: string;
    rceptConfmerDeptNm: string;
    athrzChargerId: string;
    athrzChargerNm: string;
    athrzChargerDeptNm: string;
    athrzChargerTelno: string;
    lastConfmDe: Date;
    athrzRspnberId: string;
    athrzRspnberNm: string;
    athrzRspnberDeptNm: string;
    athrzDetaultAmount: number;
    athrzConfmIssuCheck: string;
    ktcBrffcCodeAditInfoOne: string;
    issuReqstNbfps: number;
    issuFeeAmount: number;
    issuPrposCn: string;
    outptIndictSeCode: string;
    outptIndictSeCodeName: string;
    atchmnflT_AC003024: AtchmnflT[];
    atchmnflT_AC003025: AtchmnflT;
    fomConfmNoList: string;
    entrprsBplcAdresList: string;
    entrprsFctryAdresList: string;
    entrprsMeterAdresList: string;
    inspectionProcessHist: string;
    mode: string;
    bsrpTrnsportCt_Origin: string;
}

export interface AtchmnflT{
    atchmnflSn: number;
    atchmnflClCode: string;
    atchmnflCours: string;
    atchmnflNm: string;
    eventn: string;
    atchmnflSize: number;
    registDt: Date;
    registerSeCode: string;
    registerId: string;
    componentName: string;
    innorixSavepath: string;
    fileAllPath: string;
}
