/* eslint-disable @typescript-eslint/naming-convention */
export class InfoListRq
{
    startIndex: number;
    endIndex: number;
    mrnrSeCode: string;
    athrzSeCode: string;
    athrzEndDe_Start: Date;
    athrzEndDe_End: Date;
    fomConfmConfmNo: string;
    insttSn: number;
    entrpsNm: string;
    vesslNo: string;
    exclusiveAthrzProcessSttusCode: string[];
    rqstDt: Date;
    rqstDt_Start: Date;
    rqstDt_End: Date;
    athrzProcessSttusCode: string;
    athrzRceptNo: string;
    dbInputAt: string;
    chargeOr: string;
    entrprSn: number;
    ktcBrffcCode: string;
    expDe_Start_String: Date;
    expDe_End_String: Date;
    oltBassAdres: string;
    athrzHopeDe_Start: Date;
    athrzHopeDe_End: Date;
    oltNm: string;
    constructor(){
      this.startIndex = 1;
      this.endIndex = 10;
      this.mrnrSeCode = '';
      this.athrzSeCode = '';
      this.athrzEndDe_Start = null;
      this.athrzEndDe_End = null;
      this.fomConfmConfmNo = null;
      this.insttSn = null;
      this.entrpsNm = '';
      this.vesslNo = '';
      this.exclusiveAthrzProcessSttusCode = [];
      this.rqstDt = null;
      this.rqstDt_Start = null;
      this.rqstDt_End = null;
      this.athrzProcessSttusCode = '';
      this.athrzRceptNo = '';
      this.dbInputAt = null;
      this.chargeOr = null;
      this.entrprSn = null;
      this.ktcBrffcCode = '';
      this.expDe_Start_String = null;
      this.expDe_End_String = null;
      this.oltBassAdres = null;
      this.athrzHopeDe_Start = null;
      this.athrzHopeDe_End = null;
      this.oltNm = null;
    }
}
