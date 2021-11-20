export class IptVesslPage{
    iptVesslList: IptVesslList[];
    iptAthrzDetailEtcInfo: IptAthrzDetailEtcInfo;
    totalCount: number;
    constructor(){
        this.iptVesslList = [];
        this.iptAthrzDetailEtcInfo = new IptAthrzDetailEtcInfo();
        this.totalCount = 0;
    }
}
export class IptVesslList{
    rowNum: number;
    vesslNo: string;
    smFatherJdgmntAt: string;
    rowNumber: number;
    totalCount: number;
    constructor(){
        this.rowNum = 0;
        this.vesslNo = '';
        this.smFatherJdgmntAt = null;
        this.rowNumber = 0;
        this.totalCount = null;
    }
}
export class IptAthrzDetailEtcInfo{
    athrzSn: number;
    athrzDetailSn: number;
    reqstdocVesslNo: string;
    cnfrmnPsexamVesslNo: string;
    cnfrmnDsqlfcVesslNo: string;
    constructor(){
        this.athrzSn = 0;
        this.athrzDetailSn = 0;
        this.reqstdocVesslNo = null;
        this.cnfrmnDsqlfcVesslNo = null;
        this.cnfrmnPsexamVesslNo = null;
    }
}
