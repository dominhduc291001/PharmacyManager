import { SelectItem } from './ipt-electron-precision-model';

export class IptFueDispenserModel{
    athrzSn: number;
    athrzDetailSn: number;
    ausFueldispenserSn: number;
    iptFueldispenserT: IptFueldispenserT;
    iptFueldispenserTList: IptFueldispenserT[];
    fomCodeList: SelectItem[];
    seCodeList: SelectItem[];
    selfSeCodeList: SelectItem[];
    envrnCndCodeList: SelectItem[];
    constructor(){
        this.athrzSn = null;
        this.athrzDetailSn = null;
        this.ausFueldispenserSn = null;
        this.iptFueldispenserT = new IptFueldispenserT();
        this.iptFueldispenserTList = [];
        this.fomCodeList = [];
        this.seCodeList = [];
        this.selfSeCodeList = [];
        this.envrnCndCodeList = [];
    }
}

export class IptFueldispenserT{
    athrzSn: number;
    athrzDetailSn: number;
    ausFueldispenserSn: number;
    fomCode: string;
    fomCodeName: string;
    seCode: string;
    seCodeName: string;
    selfSeCode: string;
    selfSeCodeName: string;
    envrnGradCode: string;
    envrnGradCodeName: string;
    constructor(){
        this.athrzSn = null;
        this.athrzDetailSn = null;
        this.ausFueldispenserSn = null;
        this.fomCode = null;
        this.fomCodeName = null;
        this.seCode = null;
        this.seCodeName = null;
        this.selfSeCode = null;
        this.selfSeCodeName = null;
        this.envrnGradCode = null;
        this.envrnGradCodeName = null;
    }
}
