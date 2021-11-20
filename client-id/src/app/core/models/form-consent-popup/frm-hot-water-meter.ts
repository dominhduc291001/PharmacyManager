export class FrmHotWaterMeter {
    fmsHotWaterMeterT: HotWaterMeterT;

    constructor(){
        this.fmsHotWaterMeterT = new HotWaterMeterT();
    }
}

export class HotWaterMeterT {
    fomConfmSn: number;
    fluxFomCode: string;
    fluxFomCodeName: string;
    hotWaterMeterstrctCode: string;
    hotWaterMeterstrctCodeName: string;
    tpFomSeCode: string;
    tpFomSeCodeName: string;
    tpGradCode: string;
    tpGradCodeName: string;
    nmNmValue: number;
    envrnCndCode: string;
    envrnCndCodeName: string;
    mxmmFluxVal: number;
    tranFluxVal: number;
    mummFluxVal: number;
    statnHstdPrvnStrgAt: string;
    tlcommAt: string;
    allLtVal: string;
    conectFatherCode: string;
    conectFatherCodeName: string;
    screwNm: string;
    flangingNm: any;
    hhlwAbsnceSetbukNm: string;
    makrNdIncmeProfsNm: string;
    drctScopeCode: string;
    drctScopeCodeName: string;
    mainSuplySrcelctVal: string;
    asstnSuplySrcelctVal: any;

    constructor(){
        this.fomConfmSn = 0;
        this.fluxFomCode = null;
        this.fluxFomCodeName = null;
        this.hotWaterMeterstrctCode = null;
        this.hotWaterMeterstrctCodeName = null;
        this.tpFomSeCode = null;
        this.tpFomSeCodeName = null;
        this.tpGradCode = null;
        this.tpGradCodeName = null;
        this.nmNmValue = 0;
        this.envrnCndCode = null;
        this.envrnCndCodeName = null;
        this.mxmmFluxVal = 0;
        this.tranFluxVal = 0;
        this.mummFluxVal = 0;
        this.statnHstdPrvnStrgAt = null;
        this.tlcommAt = null;
        this.allLtVal = null;
        this.conectFatherCode = null;
        this.conectFatherCodeName = null;
        this.screwNm = null;
        this.flangingNm = null;
        this.hhlwAbsnceSetbukNm = null;
        this.makrNdIncmeProfsNm = null;
        this.drctScopeCode = null;
        this.drctScopeCodeName = null;
        this.mainSuplySrcelctVal = null;
        this.asstnSuplySrcelctVal = null;
    }
}
