export class FrmLpgDispenser {
    fomConfmSn: number;
    fmsLpgdispenserTList: LpgdispenserT[];
    fmsLpgdispenserT: LpgdispenserT;

    constructor() {
        this.fomConfmSn = 0;
        this.fmsLpgdispenserTList = [];
        this.fmsLpgdispenserT = new LpgdispenserT();
    }
}

export class LpgdispenserT {
    fomConfmSn: number;
    lpgdispenserSn: number;
    fomCode: string;
    fomCodeName: string;
    mxmmFluxVal: number;
    mxmmFluxValUnitCode: string;
    mxmmFluxValUnitCodeName: string;
    mummFluxVal: number;
    mummFluxValUnitCode: string;
    mummFluxValUnitCodeName: string;
    mummMesureQyVal: number;
    mummPressrVal: number;
    mxmmPressrValue: number;
    useTpScope: string;
    hoseLtValue: number;
    extDmValue: number;
    useFloilKndCode: string;
    useFloilKndCodeName: string;
    prcsdgGradCode: string;
    prcsdgGradCodeName: string;
    lpgModlCn: string;
    envrnCndCode: string;
    envrnCndCodeName: string;

    constructor() {
        this.fomConfmSn = 0;
        this.lpgdispenserSn = 0;
        this.fomCode = null;
        this.fomCodeName = null;
        this.mxmmFluxVal = 0;
        this.mxmmFluxValUnitCode = null;
        this.mxmmFluxValUnitCodeName = null;
        this.mummFluxVal = 0;
        this.mummFluxValUnitCode = null;
        this.mummFluxValUnitCodeName = null;
        this.mummMesureQyVal = 0;
        this.mummPressrVal = 0;
        this.mxmmPressrValue = 0;
        this.useTpScope = null;
        this.hoseLtValue = 0;
        this.extDmValue = 0;
        this.useFloilKndCode = null;
        this.useFloilKndCodeName = null;
        this.prcsdgGradCode = null;
        this.prcsdgGradCodeName = null;
        this.lpgModlCn = null;
        this.envrnCndCode = null;
        this.envrnCndCodeName = null;
    }
}
