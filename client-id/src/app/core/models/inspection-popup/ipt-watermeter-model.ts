import { SelectItem } from './ipt-electron-precision-model';

export class IptWaterMeterModel {
    iptWaterMeterT: IptWaterMeterT;
    fomCodeList: SelectItem[];
    innerFomCodeList: SelectItem[];
    strctCodeList: SelectItem[];
    prcsdgLevelCodeList: SelectItem[];
    tpGradCodeList: SelectItem[];
    nmNmCodeList: SelectItem[];
    envrnCndCodeList: SelectItem[];
    tranFluxRateCodeList: SelectItem[];
    conectFatherCodeList: SelectItem[];
    constructor(){
        this.iptWaterMeterT = new IptWaterMeterT();
        this.fomCodeList = [];
        this.innerFomCodeList = [];
        this.strctCodeList = [];
        this.prcsdgLevelCodeList = [];
        this.tpGradCodeList = [];
        this.nmNmCodeList = [];
        this.envrnCndCodeList = [];
        this.tranFluxRateCodeList = [];
        this.conectFatherCodeList = [];
    }
}

export class IptWaterMeterT{
    athrzSn: number;
    athrzDetailSn: number;
    fluxFomCode: string;
    fluxFomCodeName: string;
    innerFomCode: string;
    innerFomCodeName: string;
    waterMeterstrctCode: string;
    waterMeterstrctCodeName: string;
    prcsdgLevelCode: string;
    nmNmValue: number;
    envrnCndCode: string;
    mxmmFluxVal: number;
    tranFluxRateVal: number;
    mxmmFluxRateVal: number;
    statnHstdPrvnStrgAt: string;
    tlcommAt: string;
    mainSuplySrcelctVal: number;
    mode: string;
    constructor(){
        this.athrzSn = 0;
        this.athrzDetailSn = 0;
        this.fluxFomCode = null;
        this.fluxFomCodeName = null;
        this.innerFomCode = null;
        this.innerFomCodeName = null;
        this.waterMeterstrctCode = null;
        this.waterMeterstrctCodeName = null;
        this.prcsdgLevelCode = null;
        this.nmNmValue = 0;
        this.envrnCndCode = null;
        this.mxmmFluxVal = 0;
        this.tranFluxRateVal = 0;
        this.mxmmFluxRateVal = 0;
        this.statnHstdPrvnStrgAt = null;
        this.tlcommAt = null;
        this.mainSuplySrcelctVal = 0;
        this.mode = null;
    }
}
