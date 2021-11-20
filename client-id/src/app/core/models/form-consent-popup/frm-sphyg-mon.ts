export class FrmSphygMon {
    fomConfmSn: number;
    fomCode: string;
    fomCodeName: string;
    pressrIndictCode: string;
    pressrIndictCodeName: string;
    brssrSeCode: string;
    brssrSeCodeName: string;
    srcelctCode: string;
    srcelctCodeName: string;
    modelNm: string;
    mesureRegnCode: string;
    mesureRegnCodeName: string;
    usePressrScopeBeginVal: number;
    usePressrScopeEndVal: number;

    constructor(){
        this.fomConfmSn = 0;
        this.fomCode = null;
        this.fomCodeName = null;
        this.pressrIndictCode = null;
        this.pressrIndictCodeName = null;
        this.brssrSeCode = null;
        this.brssrSeCodeName = null;
        this.srcelctCode = null;
        this.srcelctCodeName = null;
        this.modelNm = null;
        this.mesureRegnCode = null;
        this.mesureRegnCodeName = null;
        this.usePressrScopeBeginVal = 0;
        this.usePressrScopeEndVal = 0;
    }
}
