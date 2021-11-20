import { AccrcyGradCode } from '../inspection-popup/ipt-platform-model';

export class FrmPlatformScale{
    fmsPlfrmSclT: FmsPlfrmSclT;
    fmsPlfrmSclDetailListT: FmsPlfrmSclDetail[];
    fmsPlfrmSclDetailT: FmsPlfrmSclDetail;
    accrcyGradCodeList: AccrcyGradCode[];
    constructor(){
        this.fmsPlfrmSclT = new FmsPlfrmSclT();
        this.fmsPlfrmSclDetailListT = [];
        this.fmsPlfrmSclDetailT = new FmsPlfrmSclDetail();
        this.accrcyGradCodeList = [];
    }
}

export class FmsPlfrmSclT{
    fomConfmSn: number;
    fomNm: string;
    constructor(){
        this.fomConfmSn = 0;
        this.fomNm = null;
    }
}

export class FmsPlfrmSclDetail{
    fomConfmSn: number;
    fomConfmDetailSn: number;
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
    realDivisionVal: number;
    realDvsnValUnitCd: string;
    realDvsnValUnitCdName: string;
    athrzDivisionCo: number;
    useTpScope: string;
    constructor(){
        this.fomConfmSn = 0;
        this.fomConfmDetailSn = 0;
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
        this.realDivisionVal = 0;
        this.realDvsnValUnitCd = null;
        this.realDvsnValUnitCdName = null;
        this.athrzDivisionCo = 0;
        this.useTpScope = null;
    }
}

export class FmsPlfrmSclDetailT{
    fomConfmSn: number;
    fomConfmDetailSn: number;
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
    realDivisionVal: number;
    realDvsnValUnitCd: string;
    realDvsnValUnitCdName: string;
    athrzDivisionCo: number;
    useTpScope: string;
    constructor(){
        this.fomConfmSn = 0;
        this.fomConfmDetailSn = 0;
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
        this.realDivisionVal = 0;
        this.realDvsnValUnitCd = null;
        this.realDvsnValUnitCdName = null;
        this.athrzDivisionCo = 0;
        this.useTpScope = null;
    }
}
