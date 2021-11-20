/* eslint-disable @typescript-eslint/naming-convention */
export class FormConsentCompleteRq
{
    startIndex: number;
    endIndex: number;
    mrnrSeCode: string;
    fomConfmInsttSeCode: string;
    registSeCode: string;
    fomConfmProcessSttusCode: string;
    lastConfmDe_Start: Date;
    lastConfmDe_End: Date;
    rqstDt_Start: Date;
    rqstDt_End: Date;
    fomConfmRceptNo: string;
    fomConfmConfmNo: string;
    entrprsSn: number;
    entrprsNm: string;
    modelNm: string;
    dbInputAt: string;
    fomConfmChargerId: string;
    chargeOr: string;

    constructor(){
        this.startIndex = 1;
        this.endIndex = 10;
        this.mrnrSeCode = null;
        this.fomConfmInsttSeCode = null;
        this.registSeCode = null;
        this.fomConfmProcessSttusCode = null;
        this.lastConfmDe_Start = null;
        this.lastConfmDe_End = null;
        this.rqstDt_Start = null;
        this.rqstDt_End = null;
        this.fomConfmRceptNo = null;
        this.fomConfmConfmNo = null;
        this.entrprsSn = 0;
        this.entrprsNm = null;
        this.modelNm = null;
        this.dbInputAt = null;
        this.fomConfmChargerId = null;
        this.chargeOr = null;
    }
}
