export class FrmWaterMeter {
    fmsWaterMeterT: WaterMeterT;

    constructor(){
        this.fmsWaterMeterT = new WaterMeterT();
    }
}

export class WaterMeterT {
    fomConfmSn: number;
    fluxFomCode: string;
    fluxFomCodeName: string;
    innerFomCode: string;
    innerFomCodeName: string;
    waterMeterstrctCode: string;
    waterMeterstrctCodeName: string;
    prcsdgLevelCode: string;
    prcsdgLevelCodeName: string;
    tpGradCode: string;
    tpGradCodeName: string;
    nmNmValue: number;
    envrnCndCode: string;
    envrnCndCodeName: string;
    mxmmFluxVal: number;
    tranFluxRateVal: number;
    mxmmFluxRateVal: number;
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
    mainSuplySrcelctVal: any;
    asstnSuplySrcelctVal: any;

    constructor(){
    this.fomConfmSn = 0;
    this.fluxFomCode = null;
    this.fluxFomCodeName = null;
    this.innerFomCode = null;
    this.innerFomCodeName = null;
    this.waterMeterstrctCode = null;
    this.waterMeterstrctCodeName = null;
    this.prcsdgLevelCode = null;
    this.prcsdgLevelCodeName = null;
    this.tpGradCode = null;
    this.tpGradCodeName = null;
    this.nmNmValue = 0;
    this.envrnCndCode = null;
    this.envrnCndCodeName = null;
    this.mxmmFluxVal = 0;
    this.tranFluxRateVal = 0;
    this.mxmmFluxRateVal = 0;
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
