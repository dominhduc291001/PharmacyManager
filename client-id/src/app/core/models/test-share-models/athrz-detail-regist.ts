/* eslint-disable @typescript-eslint/naming-convention */
export class AthrzDetailRegist{
    athrzSn: number;
    athrzDetailSn: number;
    KtcBrffcCode: string;
    athrzProcessSttusCode: string;
    athrzProgressCode: string;
    fomConfmSn: number;
    inp_fomConfmSn: string;
    bsisCode: string;
    athrzSeCode: string;
    mrnrSeCode: string;
    txtMrnrStd: string;
    selMrnrStd: number;
    stndrdNm: string;
    reqstQy: number;
    reqstQy2: number;
    txtVesslStr: string;
    athrzAreaAdres: number;
    athrzAreaZip: string;
    athrzAreaBassAdres: string;
    athrzAreaTaxAdres: string;
    athrzHopeDe: Date;
    mesurProofBsshAt: string;
    athrzExpDe1: number;
    athrzExpDe2: number;
    athrzAllAt: string;
    selMrnrStdPopup: string[];
    constructor(){
        this.athrzSn = 0;
        this.athrzDetailSn = 0;
        this.KtcBrffcCode = '';
        this.athrzProcessSttusCode = null;
        this.athrzProgressCode = null;
        this.fomConfmSn = null;
        this.inp_fomConfmSn = '';
        this.bsisCode = null;
        this.athrzSeCode = null;
        this.mrnrSeCode = '';
        this.txtMrnrStd = null;
        this.selMrnrStd = null;
        this.stndrdNm = '';
        this.reqstQy = null;
        this.reqstQy2 = null;
        this.txtVesslStr = null;
        this.athrzAreaAdres = null;
        this.athrzAreaZip = null;
        this.athrzAreaBassAdres = null;
        this.athrzAreaTaxAdres = null;
        this.athrzHopeDe = null;
        this.mesurProofBsshAt = null;
        this.athrzExpDe1 = null;
        this.athrzExpDe2 = null;
        this.athrzAllAt = null;
        this.selMrnrStdPopup = [];
    }
}
