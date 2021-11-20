export class FrmElementsWater {
    fomConfmSn: number;
    fmsElementsWaterTList: ElementsWaterT[];
    fmsElementsWaterT: ElementsWaterT;

    constructor() {
        this.fomConfmSn = 0;
        this.fmsElementsWaterTList = [];
        this.fmsElementsWaterT = new ElementsWaterT();
    }
}

export class ElementsWaterT {
    fomConfmSn: number;
    elementsSn: number;
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
    fluxFomCode: string;
    fluxFomCodeName: string;
    useFloilKndCode: string;
    useFloilKndCodeName: string;
    prcsdgGradCode: string;
    prcsdgGradCodeName: string;
    elementsModlCn: string;
    envrnCndCode: string;
    envrnCndCodeName: string;

    constructor(){
        this.fomConfmSn = null;
        this.elementsSn = null;
        this.fomCode = null;
        this.fomCodeName = null;
        this.mxmmFluxVal = null;
        this.mxmmFluxValUnitCode = null;
        this.mxmmFluxValUnitCodeName = null;
        this.mummFluxVal = null;
        this.mummFluxValUnitCode = null;
        this.mummFluxValUnitCodeName = null;
        this.mummMesureQyVal = null;
        this.mummPressrVal = null;
        this.mxmmPressrValue = null;
        this.useTpScope = null;
        this.hoseLtValue = null;
        this.fluxFomCode = null;
        this.fluxFomCodeName = null;
        this.useFloilKndCode = null;
        this.useFloilKndCodeName = null;
        this.prcsdgGradCode = null;
        this.prcsdgGradCodeName = null;
        this.elementsModlCn = null;
        this.envrnCndCode = null;
        this.envrnCndCodeName = null;
    }
}
