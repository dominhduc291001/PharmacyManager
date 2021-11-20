import { SelectItem } from './ipt-electron-precision-model';

export class IptHotWaterMeterModel{
    iptHotWaterMeterT: IptHotWaterMeterT;
    fomCodeList: SelectItem[];
    strctCodeList: SelectItem[];
    tpFomSeCodeList: SelectItem[];
    tpGradCodeList: SelectItem[];
    nmNmCodeList: SelectItem[];
    envrnCndCodeList: SelectItem[];
    conectFatherCodeList: SelectItem[];
    constructor(){
        this.iptHotWaterMeterT = new IptHotWaterMeterT();
        this.fomCodeList = [];
        this.strctCodeList = [];
        this.tpFomSeCodeList = [];
        this.tpGradCodeList = [];
        this.nmNmCodeList = [];
        this.envrnCndCodeList = [];
        this.conectFatherCodeList = [];
    }
}

export class IptHotWaterMeterT{
    athrzSn: number;
    athrzDetailSn: number;
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
    tlcommAt: string;
    mainSuplySrcelctVal: string;
    asstnSuplySrcelctVal: string;
    mode: string;
    constructor(){
        this.athrzSn = 0;
        this.athrzDetailSn = 0;
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
        this.tlcommAt = null;
        this.mainSuplySrcelctVal = null;
        this.asstnSuplySrcelctVal = null;
        this.mode = null;
    }
}
