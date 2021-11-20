/* eslint-disable @typescript-eslint/naming-convention */
export class FrmProtableWhealLoad {
    fmsPtbWhLoadScListT: PtbWhLoadScT[];
    fmsPtbWhLoadScT: PtbWhLoadScT;

    constructor() {
        this.fmsPtbWhLoadScListT = [];
        this.fmsPtbWhLoadScT = new PtbWhLoadScT();
    }
}

export class PtbWhLoadScT {
    fomConfmSn: number;
    ptbWhLoadScSn: number;
    scopeCode: string;
    scopeCodeName: string;
    fomNm: string;
    fmsPtbWhLoadScDetailListT: PtbWhLoadScDetail[];

    constructor() {
        this.fomConfmSn = 0;
        this.ptbWhLoadScSn = 0;
        this.scopeCode = null;
        this.scopeCodeName = null;
        this.fomNm = null;
        this.fmsPtbWhLoadScDetailListT = [];
    }
}

export class PtbWhLoadScDetail {
    fomConfmSn: number;
    ptbWhLoadScSn: number;
    fmsPtbWhLoadScDetailSn: number;
    accrcyGradCode: string;
    accrcyGradCodeName: string;
    mxmmCpctyVal: number;
    mxCpctyValUnitCode: string;
    mxCpctyValUnitCodeName: string;
    mummCpctyVal: number;
    mummCpctyValUnitCd: string;
    mummCpctyValUnitCdName: string;
    athrzDivisionVal: number;
    athrzDvsnValUnitCd: string;
    athrzDvsnValUnitCdName: string;
    athrzDivisionCo: number;
    realDivisionVal: number;
    realDvsnValUnitCd: string;
    realDvsnValUnitCdName: string;
    cntnrCode: any;
    cntnrCodeName: any;
    tpScopeText: string;

    constructor() {
        this.fomConfmSn = 0;
        this.ptbWhLoadScSn = 0;
        this.fmsPtbWhLoadScDetailSn = 0;
        this.accrcyGradCode = null;
        this.accrcyGradCodeName = null;
        this.mxmmCpctyVal = 0;
        this.mxCpctyValUnitCode = null;
        this.mxCpctyValUnitCodeName = null;
        this.mummCpctyVal = 0;
        this.mummCpctyValUnitCd = null;
        this.mummCpctyValUnitCdName = null;
        this.athrzDivisionVal = 0;
        this.athrzDvsnValUnitCd = null;
        this.athrzDvsnValUnitCdName = null;
        this.athrzDivisionCo = 0;
        this.realDivisionVal = 0;
        this.realDvsnValUnitCd = null;
        this.realDvsnValUnitCdName = null;
        this.cntnrCode = null;
        this.cntnrCodeName = null;
        this.tpScopeText = null;
    }
}
