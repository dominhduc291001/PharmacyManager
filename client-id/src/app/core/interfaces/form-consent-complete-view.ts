import { ProcessAtchmnflList } from './process-atchmnfl-list';

/* eslint-disable @typescript-eslint/naming-convention */
export interface FormConsentCompleteView{
    formConsentT: FormConsentT;
    mrnrSeCodeList: ConsentMrnrSeCode[];
    rceptChargerList: ConsentRceptCharger[];
    rceptConfmerList: ConsentRceptCharger[];
    fomConfmChargerList: ConsentRceptCharger[];
    fomConfmRspnberList: ConsentRceptCharger[];
    feePayCnfrmrList: ConsentRceptCharger[];
    formConsentHistoryList: FormConsentHistory[];
    enterpriseSectionName: string;
}

export interface FormConsentT{
    formConsent: FormConsent;
    fomConfmIssuList: ConsentFomConfmIssu[];
    fomConfmLastIssu: ConsentFomConfmIssu;
    fomConfmProcessHistList: ConsentConfmProcessHist[];
    testFeeDtlsList: FormConsentHistory[];
}

export interface FormConsentHistory{
    fomConfmSn: number;
    registSeName: string;
    fomConfmConfmNo: string;
    changeReqstDtls: string;
    changeProcessDtls: string;
    lastConfmDe: string;
    fomConfmSeCode: string;
    beforeFomConfmSn: string;
    rowNumber: string;
    totalCount: string;
}

export interface FormConsent{
    fomConfmSn: number;
    beforeFomConfmSn: number;
    frstFomConfmSn: number;
    fomConfmProcessSttusCode: string;
    fomConfmProcessSttusName: string;
    fomConfmProcessSttusName_User: string;
    proprod: number;
    trnsfrEntrpsSn: number;
    entrpsSn: number;
    entrprsNm: string;
    rprsntvNm: string;
    bizrno: string;
    bplcAdresSeCode: string;
    bplcZip: string;
    bplcBassAdres: string ;
    bplcDetailAdres:   string;
    bplcTelno: string;
    bplcFxnum: string;
    fctryAdresSeZip: string;
    fctryZip: string;
    fctryBassAdres: string;
    fctryDetailAdres: string;
    fctryTelno: string;
    fctryFxnum: string;
    mrnrSeCode: string;
    modelNm: string;
    registSeCode: string;
    confmReqstdocCn: string;
    confmReqstdocFeeCn: string;
    testFeesm: number;
    bsrpTrnsportCt: number;
    bsrpDeCtDaycnt: number;
    bsrpDeCtAmount: number;
    bsrpCgffdAmount: number;
    bsrpStayngCtDaycnt: number;
    bsrpStayngCtAmount: number;
    btrpsSm: number;
    fomConfmIsgnCt: number;
    subsum: number;
    vat: number;
    totalSmAm: number;
    payAt: string;
    feePayDe: Date;
    feePayCnfrmrId: string;
    feePayCnfrmrNm: string;
    feePayCnfrmrDeptNm: string;
    sploreQy: number;
    testSploreProcessCode: string;
    testSploreProcessCodeName: string;
    sploreRceptDe: Date;
    sploreChargerId: string;
    sploreChargerNm: string;
    sploreChargerDeptNm: string;
    testResultPsexamAt: string;
    testComptDe: Date;
    fomConfmInsttSeCode: string;
    changeReqstDtls: string;
    changeProcessDtls: string;
    fomComTcyStNdNtNo: string;
    fomConfmProcessCn: string;
    fomConfmReqstNo: number;
    fomConfmRceptNo: string;
    fomConfmConfmNo: string;
    fomConfmSeCode: string;
    etcMatterCn: string;
    isgnNbfps: number;
    rqstDt: Date;
    applcntId: string;
    applcntNm: string;
    applcntTelno: string;
    applcntMbtlnum: string;
    applcntEmailAdres: string;
    rceptDe: Date;
    rceptChargerId: string;
    rceptChargerNm: string;
    rceptChargerDeptNm: string;
    rceptConfmDt: Date;
    rceptConfmerId: string;
    rceptConfmerNm: string;
    rceptConfmerDeptNm: string;
    fomConfmChargerId: string;
    fomConfmChargerNm: string;
    fomConfmChargerDeptNm: string;
    fomConfmChargerTelno: string;
    lastConfmDe: Date;
    fomConfmRspnberId: string;
    fomConfmRspnberNm: string;
    fomConfmRspnberDeptNm: string;
    ceratsPblictePrarnDe: Date;
    taxbilPblicteAt: string;
    mnfctRegistKndCn: string;
    mnfcturRegistDe: string;
    mrnrSeName: string;
    fomConfmInsttSeName: string;
    registSeName: string;
    fomConfmProcessSttusCodeName: string;
    payAt_String: string;
    testResultPsexamAt_String: string;
    statusClassName: string;
    isReIssueExist: boolean;
    dbInputAt: string;
    atchmnflT_AC003002: ProcessAtchmnflList;
    atchmnflT_AC003005: ProcessAtchmnflList;
    atchmnflT_AC003006: ProcessAtchmnflList;
    atchmnflT_AC003007: ProcessAtchmnflList;
    atchmnflT_AC003008: ProcessAtchmnflList;
    atchmnflT_AC003013: ProcessAtchmnflList;
    atchmnflT_AC003009: ProcessAtchmnflList;
    atchmnflT_AC003014: ProcessAtchmnflList;
    atchmnflT_AC003015: ProcessAtchmnflList;
    atchmnflT_AC003016: ProcessAtchmnflList;
    atchmnflT_AC003017: ProcessAtchmnflList;
    atchmnflT_AC003018: ProcessAtchmnflList;
    atchmnflT_AC003019: ProcessAtchmnflList;
    atchmnflT_AC003020: ProcessAtchmnflList;
    atchmnflT_AC003021: ProcessAtchmnflList;
    atchmnflT_AC003026: ProcessAtchmnflList;
    atchmnflT_AC003027: ProcessAtchmnflList;
    atchmnflT_AC003028: ProcessAtchmnflList;
    atchmnflT_AC003030: ProcessAtchmnflList;
    atchmnflT_AC003031: ProcessAtchmnflList;
    atchmnflT_AC003032: ProcessAtchmnflList[];
}

export interface ConsentFomConfmIssu{
    fomConfmSn: number;
    fomConfmIssuSn: number;
    fomConfmIssuNo: string;
    reqstFeeamount: number;
    isgnPrvonshCn: string;
    ktcChargerId: string;
    ktcChargerNm: string;
    ktcChargerDeptNm: string;
    outptAt: string;
    outptDe: string;
    fomCeratsFileSn: number;
}

export interface ConsentMrnrSeCode{
    bsisCode: string;
    bsisCodeNm: string;
    upperBsisCode: string;
    useAt: string;
    bsisCodeDc: string;
    upperCodeOne: string;
    upperCodeTwo: string;
    upperCodeThree: string;
    aditInfoOne: string;
    aditInfoTwo: string;
    registDt: Date;
    registerSeCode: string;
    registerId: string;
    updtDt: Date;
    updusrSeCode: string;
    updusrId: string;
}

export interface ConsentRceptCharger{
    authorGroupCode: string;
    emplCode: string;
    userId: string;
    userNm: string;
    telno: string;
    mbtlnum: string;
    deptCode: string;
    deptNm: string;
}

export interface ConsentConfmProcessHist{
    fomConfmSn: number;
    fomConfmProcessHistSn: number;
    fomConfmProcessSttusCode: string;
    fomConfmProcessSttusCodeName: string;
    processCn: string;
    ktcChargerId: string;
    ktcChargerNm: string;
    ktcChargerDeptNm: string;
    applcntId: string;
    applcntNm: string;
    rgsDe: string;
    registDt: Date;
}
