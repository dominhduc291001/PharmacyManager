export class FrmClinicalTemp {
    fomConfmSn: number;
    serviceCode: string;
    serviceCodeName: string;
    strctCode: string;
    strctCodeName: string;
    roomCoFmnmCode: string;
    roomCoFmnmCodeName: string;
    modelNm: string;
    useTpScopeBeginVal: number;
    useTpScopeEndVal: number;
    fomCode: string;
    fomCodeName: string;

    constructor() {
        this.fomConfmSn = 0;
        this.serviceCode = null;
        this.serviceCodeName = null;
        this.strctCode = null;
        this.strctCodeName = null;
        this.roomCoFmnmCode = null;
        this.roomCoFmnmCodeName = null;
        this.modelNm = null;
        this.useTpScopeBeginVal = 0;
        this.useTpScopeEndVal = 0;
        this.fomCode = null;
        this.fomCodeName = null;
    }
}
