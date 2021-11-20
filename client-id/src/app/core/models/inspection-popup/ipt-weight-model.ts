import { SelectItem } from './ipt-electron-precision-model';

export class IptWeightModel{
    iptWeightT: IptWeightT;
    gradCodeList: SelectItem[];
    tyCodeList: SelectItem[];
    setSeCodeList: SelectItem[];
    setStrctCodeList: SelectItem[];
    setMdatHoleCodeList: SelectItem[];
    setShapeCodeList: SelectItem[];
    constructor(){
        this.iptWeightT = new IptWeightT();
        this.gradCodeList = [];
        this.tyCodeList = [];
        this.setSeCodeList = [];
        this.setStrctCodeList = [];
        this.setMdatHoleCodeList = [];
        this.setShapeCodeList = [];
    }
}

export class IptWeightT{
    gradCode: string;
    gradCodeName: string;
    tyCode: string;
    tyCodeName: string;
    setSeCode: string;
    setSeCodeName: string;
    setGngchMummVal: number;
    setGngchMummValUnitCd: string;
    setGngchMummValUnitCdName: string;
    setGngchMxmmVal: number;
    setGngchMxmmValUnitCd: string;
    setGngchMxmmValUnitCdName: string;
    pceGngchVal: number;
    pceGngchValUnitCode: string;
    pceGngchValUnitCodeName: string;
    fomNm: string;
    mode: string;
    athrzSn: number;
    athrzDetailSn: number;
    constructor(){
        this.gradCode = null;
        this.gradCodeName = null;
        this.tyCode = null;
        this.tyCodeName = null;
        this.setSeCode = null;
        this.setSeCodeName = null;
        this.setGngchMummVal = 0;
        this.setGngchMummValUnitCd = null;
        this.setGngchMummValUnitCdName = null;
        this.setGngchMxmmVal = 0;
        this.setGngchMxmmValUnitCd = null;
        this.setGngchMxmmValUnitCdName = null;
        this.pceGngchVal = 0;
        this.pceGngchValUnitCode = null;
        this.pceGngchValUnitCodeName = null;
        this.fomNm = null;
        this.mode = null;
        this.athrzSn = 0;
        this.athrzDetailSn = 0;
    }
}
