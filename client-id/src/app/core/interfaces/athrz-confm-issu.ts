export interface AthrzConfmIssu{
    inspectionCnfrmnIssu: InspectionCnfrmnIssu;
    inspectionDetailList: InspectionDetailList[];
}

export interface InspectionCnfrmnIssu{
    athrzSn: number;
    athrzCnfrmnIssuSn: number;
    issuReqstNbfps: number;
    issuOutptNbfps: number;
    issuFeeAmount: number;
    issuPrposCn: string;
    outptIndictSeCode: string;
    outptIndictSeCodeName: string;
}

export interface InspectionDetailList{
    athrzSn: number;
    athrzDetailSn: number;
    mrnrSeCode: string;
    mrnrSeNm: string;
    fomConfmConfmNo: string;
    stndrdNm: string;
    athrzSeCode: string;
    athrzSeCodeName: string;
    reqstQy: number;
    reqstQy2: number;
    athrzAreaAdresSeCode: string;
    athrzAreaZip: string;
    athrzAreaBassAdres: string;
    athrzAreaTaxAdres: string;
    athrzAreaTelno: string;
    athrzHopeDe: string;
    athrzExpDe: string;
    athrzExpDe1: string;
    athrzExpDe2: string;
    athrzAllAt: string;
    vesslNoStr: string;
    qrCodeNum: string;
    issuReqstNbfps: number;
    issuOutptNbfps: number;
    issuFeeAmount: number;
    issuPrposCn: string;
    outptIndictSeCode: string;
    issuYn: string;
    mesurProofBsshAt: string;
    untpc: number;
    amount: number;
    fomConfmSn: number;
    psexamQy: number;
    dsqlfcQy: number;
    athrzBgnDe: string;
    athrzEndDe: string;
    isValidToGenerateQRCode: boolean;
}
