export class FrmGasmeter {
    fmsGasmeterT: GasmeterT;

    constructor() {
        this.fmsGasmeterT = new GasmeterT();
    }
}

export class GasmeterT {
    fomConfmSn: number;
    kndCode: string;
    kndCodeName: string;
    gradCode: string;
    gradCodeName: string;
    prcsdgLevelCode: string;
    prcsdgLevelCodeName: string;
    useTpScope: string;
    cnncRegnNmNm: string;
    envrnCndCode: string;
    envrnCndCodeName: string;
    mxmmFluxVal: number;
    tranFluxVal: number;
    mummFluxVal: number;
    mxmmFnctngPressrValue: number;
    cycleVlValue: number;
    remoteDrctStorageAt: any;
    etccontents: any;

    constructor(){
        this.fomConfmSn = 0;
        this.kndCode = null;
        this.kndCodeName = null;
        this.gradCode = null;
        this.gradCodeName = null;
        this.prcsdgLevelCode = null;
        this.prcsdgLevelCodeName = null;
        this.useTpScope = null;
        this.cnncRegnNmNm = null;
        this.envrnCndCode = null;
        this.envrnCndCodeName = null;
        this.mxmmFluxVal = 0;
        this.tranFluxVal = 0;
        this.mummFluxVal = 0;
        this.mxmmFnctngPressrValue = 0;
        this.cycleVlValue = 0;
        this.remoteDrctStorageAt = null;
        this.etccontents = null;
    }
}
