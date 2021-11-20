import { AccrcyGradCode } from './ipt-platform-model';

export class IptSpringDialScaleModel{
    iptSprdscPlfrmdscT: IptSprdscPlfrmdscT;
    iptSprdscPlfrmdscDetailListT: IptSprdscPlfrmdscDetailT[];
    iptSprdscPlfrmdscDetailT: IptSprdscPlfrmdscDetailT;
    accrcyGradCodeList: AccrcyGradCode[];
    scSeCodeList: ScSeCodeList[];
    constructor(){
        this.iptSprdscPlfrmdscT = new IptSprdscPlfrmdscT();
        this.iptSprdscPlfrmdscDetailListT = [];
        this.iptSprdscPlfrmdscDetailT = new IptSprdscPlfrmdscDetailT();
        this.accrcyGradCodeList = [];
        this.scSeCodeList = [];
    }
}

export class IptSpringDialScaleSave{
    iptSprdscPlfrmdscT: IptSprdscPlfrmdscT;
    iptSprdscPlfrmdscDetailT: IptSprdscPlfrmdscDetailT;
    constructor(){
        this.iptSprdscPlfrmdscT = new IptSprdscPlfrmdscT();
        this.iptSprdscPlfrmdscDetailT = new IptSprdscPlfrmdscDetailT();
    }
}

export class IptSprdscPlfrmdscT{
    athrzSn: number;
    athrzDetailSn: number;
    scSeCode: string;
    scSeCodeName: string;
    fomNm: string;
    constructor(){
        this.athrzSn = 0;
        this.athrzDetailSn = 0;
        this.scSeCode = null;
        this.scSeCodeName = null;
        this.fomNm = null;
    }
}

export class IptSprdscPlfrmdscDetailT{
    athrzSn: number;
    athrzDetailSn: number;
    sprdscPlfrmdscDetaillSn: number;
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
    fomNm: string;
    constructor(){
        this.athrzSn = 0;
        this.athrzDetailSn = 0;
        this.sprdscPlfrmdscDetaillSn = 0;
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
        this.fomNm = null;
    }
}

export class ScSeCodeList{
    bsisCode: string;
    bsisCodeNm: string;
    constructor(){
        this.bsisCode = null;
        this.bsisCodeNm = null;
    }
}
