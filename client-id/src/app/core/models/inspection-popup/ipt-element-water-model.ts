import { SelectItem } from './ipt-electron-precision-model';

export class IptElementWaterModel{
    athrzSn: number;
    athrzDetailSn: number;
    iptElementsWaterTList: IptElementsWaterT[];
    fomCodeList: SelectItem[];
    envrnCndCodeList: SelectItem[];
    constructor(){
        this.athrzSn = 0;
        this.athrzDetailSn = 0;
        this.iptElementsWaterTList = [];
        this.fomCodeList = [];
        this.envrnCndCodeList =[];
    }
}

export class IptElementsWaterT{
    athrzSn: number;
    athrzDetailSn: number;
    ausElementsSn: number;
    elementsModlCn: string;
    envrnCndCode: string;
    fomCode: string;
    fomCodeName: string;
    envrnCndCodeName: string;
    mode: string;
    constructor(){
        this.athrzSn = 0;
        this.athrzDetailSn = 0;
        this.ausElementsSn = 0;
        this.elementsModlCn = null;
        this.envrnCndCode = null;
        this.fomCode = null;
        this.fomCodeName = null;
        this.envrnCndCodeName = null;
        this.mode = null;
    }
}
