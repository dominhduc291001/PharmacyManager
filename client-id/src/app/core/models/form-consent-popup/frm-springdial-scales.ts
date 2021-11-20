export class FrmSpringDialScales{
    fmsSprdscPlfrmdscT: FmsSprdscPlfrmdscT;
    fmsSprdscPlfrmdscDetailListT: FmsSprdscPlfrmdscDetailT[];
    fmsSprdscPlfrmdscDetailT: FmsSprdscPlfrmdscDetailT;
    constructor(){
        this.fmsSprdscPlfrmdscT = new FmsSprdscPlfrmdscT();
        this.fmsSprdscPlfrmdscDetailListT = [];
        this.fmsSprdscPlfrmdscDetailT = new FmsSprdscPlfrmdscDetailT();
    }
}

export class FmsSprdscPlfrmdscT{
    fomConfmSn: number;
    scSeCode: string;
    scSeCodeName: string;
    fomNm: string;
    constructor(){
        this.fomConfmSn = 0;
        this.scSeCode = null;
        this.scSeCodeName = null;
        this.fomNm = null;
    }
}

export class FmsSprdscPlfrmdscDetailT{
    fomNm: string;
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
    athrzDivisionCo: number;
    useTpScope: string;
    constructor(){
        this.fomNm = null;
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
        this.athrzDivisionCo = 0;
        this.useTpScope = null;
    }
}
