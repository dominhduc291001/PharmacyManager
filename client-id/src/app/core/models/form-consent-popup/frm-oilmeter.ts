export class FrmOilmeter {
    fmsOilmeterT: OilmeterT;

    constructor() {
        this.fmsOilmeterT = new OilmeterT();
    }
}

export class OilmeterT {
    fomConfmSn: number;
    fomCode: string;
    fomCodeName: string;
    mxmmFluxVal: number;
    mxmmFluxValUnitCode: string;
    mxmmFluxValUnitCodeName: string;
    mummFluxVal: number;
    mummFluxUnitCode: string;
    mummFluxUnitCodeName: string;
    strctCode: string;
    strctCodeName: string;
    strctCn: any;
    modelNm: string;
    makrNm: string;
    mxmmUsePressrVal: number;
    cirDmVal: number;
    mummMesureQyVal: number;
    useVstyScope: string;
    useTpScope: string;
    envrnCndCode: any;
    envrnCndCodeName: any;

    constructor() {
        this.fomConfmSn = 0;
        this.fomCode = null;
        this.fomCodeName = null;
        this.mxmmFluxVal = 0;
        this.mxmmFluxValUnitCode = null;
        this.mxmmFluxValUnitCodeName = null;
        this.mummFluxVal = 0;
        this.mummFluxUnitCode = null;
        this.mummFluxUnitCodeName = null;
        this.strctCode = null;
        this.strctCodeName = null;
        this.strctCn = null;
        this.modelNm = null;
        this.makrNm = null;
        this.mxmmUsePressrVal = 0;
        this.cirDmVal = 0;
        this.mummMesureQyVal = 0;
        this.useVstyScope = null;
        this.useTpScope = null;
        this.envrnCndCode = null;
        this.envrnCndCodeName = null;
    }
}
