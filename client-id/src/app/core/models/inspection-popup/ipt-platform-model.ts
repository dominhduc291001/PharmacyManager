export class IptPlatformModel{
    iptPlfrmSclT: IptPlfrmSclT;
    iptPlfrmSclDetailListT: IptPlfrm[];
    iptPlfrmSclDetailT: IptPlfrm;
    accrcyGradCodeList: AccrcyGradCode[];
    constructor(){
        this.iptPlfrmSclT = new IptPlfrmSclT();
        this.iptPlfrmSclDetailListT = [];
        this.iptPlfrmSclDetailT = new IptPlfrm();
        this.accrcyGradCodeList = [];
    }
}

export class IptPlatformSave{
    iptPlfrmSclT: IptPlfrmSclT;
    iptPlfrmSclDetailT: IptPlfrm;
    constructor(){
        this.iptPlfrmSclT = new IptPlfrmSclT();
        this.iptPlfrmSclDetailT = new IptPlfrm();
    }
}

export class IptPlfrmSclT{
    athrzSn: number;
    athrzDetailSn: number;
    fomNm: string;
    constructor(){
        this.athrzSn = 0;
        this.athrzDetailSn = 0;
        this.fomNm = null;
    }
}
export class IptPlfrm{
    athrzSn: number;
    athrzDetailSn: number;
    plfrmSclDetailSn: number;
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
    constructor(){
        this.athrzSn = 0;
        this.athrzDetailSn = 0;
        this.plfrmSclDetailSn = 0;
        this.accrcyGradCode = '';
        this.accrcyGradCodeName = '';
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
    }
}
export class AccrcyGradCode{
    bsisCode: string;
    bsisCodeNm: string;
    constructor(){
        this.bsisCode = null;
        this.bsisCodeNm = null;
    }
}
