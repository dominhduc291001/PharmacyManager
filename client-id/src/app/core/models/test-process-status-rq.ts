/* eslint-disable @typescript-eslint/naming-convention */
export class TestProcessSttRq
{
    username: string;
    getAllUser: boolean;
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
    rceptNo_Start: string;
    rceptNo_End: string;
    rceptDe_Start: Date;
    rceptDe_End: Date;
    constructor(){
      this.username = null;
      this.getAllUser = true;
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
      this.rceptNo_Start = null;
      this.rceptNo_End = null;
      this.rceptDe_Start = null;
      this.rceptDe_End = null;
    }
}
