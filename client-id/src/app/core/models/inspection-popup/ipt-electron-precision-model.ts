export class IptElectronProcesionModel{
    iptEltrnPrcsBlTList: IptEltrnPrcsBlDetailT[];
    iptEltrnPrcsBlT: IptEltrnPrcsBlDetailT;
    scopeCodeList: SelectItem[];
    accrcyGradCodeList: SelectItem[];
    cntnrCodeList: SelectItem[];
    mesurScopeCodeList: SelectItem[];
    constructor(){
        this.iptEltrnPrcsBlT = new IptEltrnPrcsBlDetailT();
        this.iptEltrnPrcsBlTList = [];
        this.scopeCodeList = [];
        this.accrcyGradCodeList = [];
        this.cntnrCodeList = [];
        this.mesurScopeCodeList = [];
    }
}

export class IptEltrnPrcsBlDetailT{
    athrzSn: number;
    athrzDetailSn: number;
    ausEltrnPrcsBlSn: number;
    mesurScopeCode: string;
    mesurScopeCodeName: string;
    scopeCode: string;
    scopeCodeName: string;
    fomNm: string;
    iptEltrnPrcsBlDetailListT: IptEltrnPrcsBlT[];
    constructor(){
        this.athrzSn = null;
        this.athrzDetailSn = null;
        this.ausEltrnPrcsBlSn = null;
        this.mesurScopeCode = null;
        this.mesurScopeCodeName = null;
        this.scopeCode = null;
        this.scopeCodeName = null;
        this.fomNm = null;
        this.iptEltrnPrcsBlDetailListT = [
            new IptEltrnPrcsBlT(),
            new IptEltrnPrcsBlT(),
            new IptEltrnPrcsBlT()
        ];
    }
}

export class IptEltrnPrcsBlT{
    athrzSn: number;
    athrzDetailSn: number;
    ausEltrnPrcsBlSn: number;
    ausEltrnPrcsBlDetailSn: number;
    accrcyGradCode: string;
    accrcyGradCodeName: string;
    mummCpctyVal: number;
    mummCpctyValUnitCd: string;
    mummCpctyValUnitCdName: string;
    tpScopeText: string;
    mxmmCpctyVal: number;
    mxCpctyValUnitCode: string;
    mxCpctyValUnitCodeName: string;
    athrzDivisionVal: number;
    athrzDvsnValUnitCd: string;
    athrzDvsnValUnitCdName: string;
    athrzDivisionCo: number;
    realDivisionVal: number;
    realDvsnValUnitCd: string;
    realDvsnValUnitCdName: string;
    cntnrNm: string;
    cntnrNmUnitCode: string;
    cntnrNmUnitCodeName: string;
    constructor(){
        this.athrzSn = null;
        this.athrzDetailSn = null;
        this.ausEltrnPrcsBlSn = null;
        this.ausEltrnPrcsBlDetailSn = null;
        this.accrcyGradCode = null;
        this.accrcyGradCodeName = null;
        this.mummCpctyVal = null;
        this.mummCpctyValUnitCd = null;
        this.mummCpctyValUnitCdName = null;
        this.tpScopeText = null;
        this.mxmmCpctyVal = null;
        this.mxCpctyValUnitCode = null;
        this.mxCpctyValUnitCodeName = null;
        this.athrzDivisionVal = null;
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

export class SelectItem{
    bsisCode: string;
    bsisCodeNm: string;
    constructor(){
        this.bsisCode = null;
        this.bsisCodeNm = null;
    }
}
