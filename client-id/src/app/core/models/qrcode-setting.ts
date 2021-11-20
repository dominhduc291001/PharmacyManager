export class QrcodeSetting{
    qRprintApproveSn: number;
    no: number;
    ktcBrffcCode: string;
    ktcBrffcCodeName: string;
    athrzChargerID: string;
    athrzChargerName: string;
    qrPrintpcMac: string;
    approveDate: Date;
    approveValue: string;
    lastChangevalue: string;
    lastChangedate: Date;
    startDate: Date;
    endDate: Date;
    constructor(){
        this.qRprintApproveSn = 0;
        this.no = 0;
        this.ktcBrffcCode = null;
        this.ktcBrffcCodeName = null;
        this.athrzChargerID = null;
        this.athrzChargerName = null;
        this.qrPrintpcMac = null;
        this.approveDate = null;
        this.approveValue = null;
        this.lastChangevalue = null;
        this.lastChangedate = null;
        this.startDate = null;
        this.endDate = null;
    }
}
