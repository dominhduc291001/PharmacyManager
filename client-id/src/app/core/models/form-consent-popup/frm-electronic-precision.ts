export class FrmElectronicPrecision{
    fmsEltrnPrcsBlTList: EltrnPrcsBlT[];
    fmsEltrnPrcsBlT: EltrnPrcsBlT;

    constructor(){
        this.fmsEltrnPrcsBlTList = [];
        this.fmsEltrnPrcsBlT = new EltrnPrcsBlT();
    }
}

export class EltrnPrcsBlT{
    fomConfmSn: number;
    fmsEltrnPrcsBlSn: any;
    mesurScopeCode: any;
    mesurScopeCodeName: any;
    scopeCode: any;
    scopeCodeName: any;
    fomNm: any;
    fmsEltrnPrcsBlDetailListT: EltrnPrcsBlDetail[];

    constructor(){
        this.fomConfmSn = 0;
        this.fmsEltrnPrcsBlSn = null;
        this.mesurScopeCode = null;
        this.mesurScopeCodeName = null;
        this.scopeCode = null;
        this.scopeCodeName = null;
        this.fomNm = null;
        this.fmsEltrnPrcsBlDetailListT = [];
    }
}

export class EltrnPrcsBlDetail{
    fomConfmSn: any;
    fmsEltrnPrcsBlSn: any;
    fomConfmElctyPrceDetailSn: any;
    accrcyGradCode: any;
    accrcyGradCodeName: any;
    mummCpctyVal: any;
    mummCpctyValUnitCd: any;
    mummCpctyValUnitCdName: any;
    tpScopeText: any;
    mxmmCpctyVal: any;
    mxCpctyValUnitCode: any;
    mxCpctyValUnitCodeName: any;
    athrzDivisionVal: number;
    athrzDvsnValUnitCd: any;
    athrzDvsnValUnitCdName: any;
    athrzDivisionCo: any;
    realDivisionVal: any;
    realDvsnValUnitCd: any;
    realDvsnValUnitCdName: any;
    cntnrNm: any;
    cntnrNmUnitCode: any;
    cntnrNmUnitCodeName: any;

    constructor(){
        this.fomConfmSn = null;
        this.fmsEltrnPrcsBlSn = null;
        this.fomConfmElctyPrceDetailSn = null;
        this.accrcyGradCode = null;
        this.accrcyGradCodeName = null;
        this.mummCpctyVal = null;
        this.mummCpctyValUnitCd = null;
        this.mummCpctyValUnitCdName = null;
        this.tpScopeText = null;
        this.mxmmCpctyVal = null;
        this.mxCpctyValUnitCode = null;
        this.mxCpctyValUnitCodeName = null;
        this.athrzDivisionVal = 0;
        this.athrzDvsnValUnitCd = null;
        this.athrzDvsnValUnitCdName = null;
        this.athrzDivisionCo = null;
        this.realDivisionVal = null;
        this.realDvsnValUnitCd = null;
        this.realDvsnValUnitCdName = null;
        this.cntnrNm = null;
        this.cntnrNmUnitCode = null;
        this.cntnrNmUnitCodeName = null;
    }
}

