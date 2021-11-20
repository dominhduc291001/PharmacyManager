/* eslint-disable @typescript-eslint/naming-convention */
export class InfoListRp{
    inspectionInfoList: inspectionInfoList[];
    constructor(){
        this.inspectionInfoList = [];
    }
}
export interface inspectionInfoList{
    athrzSn: number;
    ktc_brffc_code: string;
    athrzRceptNo: string;
    athrzReqstNo: number;
    fomConfmConfmNo: string;
    mrnrSeNm: string;
    mrnrSeCnt: number;
    reqstQy: number;
    rqstDt: Date;
    athrzSeCode: string;
    athrzSeCodeName: string;
    vesslNoStr: string;
    entrpsNm: string;
    athrzProcessSttusCode: string;
    statusClassName2: string;
    athrzProcessSttusName: string;
    athrzIngSttusCode: string;
    statusClassName: string;
    athrzIngSttusName: string;
    rceptConfmDe: Date;
    rceptChargerId: string;
    rceptChargerNm: string;
    rceptConfmerId: string;
    rceptConfmerNm: string;
    athrzChargerNm: string;
    athrzEndDe: string;
    athrzHopeDe: string;
    applcntNm: string;
    insttNm: string;
    lastConfmDe: string;
    rowNumber: number;
    totalCount: number;
}
