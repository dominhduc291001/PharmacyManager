import { SelectItem } from './ipt-electron-precision-model';

export class IptOilMeterModel{
    iptOilmeterT: IptOilmeterT;
    fomCodeList: SelectItem[];
    strctCodeList: SelectItem[];
    envrnCndCodeList: SelectItem[];
    constructor(){
        this.iptOilmeterT = new IptOilmeterT();
        this.fomCodeList = [];
        this.strctCodeList = [];
        this.envrnCndCodeList = [];
    }
}

export class IptOilmeterT{
    athrzSn: number;
    athrzDetailSn: number;
    fomCode: string;
    fomCodeName: string;
    strctCode: string;
    modelNm: number;
    cirDmVal: number;
    envrnCndCode: string;
    mode: string;
    constructor(){
        this.athrzSn = 0;
        this.athrzDetailSn = 0;
        this.fomCode = null;
        this.fomCodeName = null;
        this.strctCode = null;
        this.modelNm = 0;
        this.cirDmVal = 0;
        this.envrnCndCode = null;
        this.mode = null;
    }
}
