import { SelectItem } from './ipt-electron-precision-model';

export class IptLpgDispenserModel{
    athrzSn: number;
    athrzDetailSn: number;
    iptLpgdispenserTList: IptLpgdispenserT[];
    fomCodeList: SelectItem[];
    envrnCndCodeList: SelectItem[];
    constructor(){
        this.athrzSn = 0;
        this.athrzDetailSn = 0;
        this.iptLpgdispenserTList = [];
        this.fomCodeList = [];
        this.envrnCndCodeList = [];
    }
}

export class IptLpgdispenserT{
    athrzSn: number;
    athrzDetailSn: number;
    ausLpgdispenserSn: number;
    lpgModlCn: string;
    envrnCndCode: string;
    fomCode: string;
    fomCodeName: string;
    envrnCndCodeName: string;
    mode: string;
    constructor(){
        this.athrzSn = 0;
        this.athrzDetailSn = 0;
        this.ausLpgdispenserSn = 0;
        this.lpgModlCn = null;
        this.envrnCndCode = null;
        this.fomCode = null;
        this.fomCodeName = null;
        this.envrnCndCodeName = null;
        this.mode = null;
    }
}
