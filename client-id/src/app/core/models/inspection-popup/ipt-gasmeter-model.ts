import { SelectItem } from './ipt-electron-precision-model';

export class IptGasmeterModel{
    iptGasmeterT: IptGasmeterT;
    kndCodeList: SelectItem[];
    gradCodeList: SelectItem[];
    prcsgdCodeList: SelectItem[];
    envrnCndCodeList: SelectItem[];
    nmNmCodeList: SelectItem[];
    mxmmFluxCodeList: SelectItem[];
    constructor(){
        this.iptGasmeterT = new IptGasmeterT();
        this.kndCodeList = [];
        this.gradCodeList = [];
        this.prcsgdCodeList = [];
        this.envrnCndCodeList = [];
        this.nmNmCodeList = [];
        this.mxmmFluxCodeList = [];
    }
}

export class IptGasmeterT{
    athrzSn: number;
    athrzDetailSn: number;
    kndCode: string;
    kndCodeName: string;
    gradCode: string;
    gradCodeName: string;
    prcsdgLevelCode: string;
    envrnCndCode: string;
    mxmmFluxVal: number;
    tranFluxVal: number;
    mummFluxVal: number;
    remoteDrctStorageAt: string;
    mode: string;
    constructor(){
        this.athrzSn = 0;
        this.athrzDetailSn = 0;
        this.kndCode = null;
        this.kndCodeName = null;
        this.gradCode = null;
        this.gradCodeName = null;
        this.prcsdgLevelCode = null;
        this.envrnCndCode = null;
        this.mxmmFluxVal = 0;
        this.tranFluxVal = 0;
        this.mummFluxVal = 0;
        this.remoteDrctStorageAt = null;
        this.mode = null;
    }
}
