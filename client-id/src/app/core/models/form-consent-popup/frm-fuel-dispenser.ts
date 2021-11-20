export class FrmFuelDispenser {
    fomConfmSn: number;
    fmsFueldispenserTList: FueldispenserT[];
    fmsFueldispenserT: FueldispenserT;

    constructor() {
        this.fomConfmSn = 0;
        this.fmsFueldispenserTList = [];
        this.fmsFueldispenserT = new FueldispenserT();
    }
}

export class FueldispenserT {
    fomConfmSn: number;
    fueldispenserSn: number;
    fueldispenserModlCn: string;
    fomCode: string;
    fomCodeName: string;
    seCode: string;
    seCodeName: string;
    mxmmPressrValue: number;
    mummPressrVal: number;
    useTpScope: string;
    hoseLtValue: number;
    selfSeCode: string;
    selfSeCodeName: string;
    prcsdgGradValue: number;
    envrnGradCode: string;
    envrnGradCodeName: string;
    mxmmFluxLftVal: number;
    mxmmFluxLftValUnitCode: string;
    mxmmFluxLftValUnitCodeName: string;
    mummFluxLftVal: number;
    mummFluxLftUnitCode: string;
    mummFluxLftUnitCodeName: string;
    mummMesureQyLftVal: number;
    mxmmFluxRitVal: number;
    mxmmFluxRitValUnitCode: any;
    mxmmFluxRitValUnitCodeName: any;
    mummFluxRitVal: number;
    mummFluxRitUnitCode: any;
    mummFluxRitUnitCodeName: any;
    mummMesureQyRitVal: number;
    useFuelGslnLftAt: string;
    useFuelKeroLftAt: string;
    useFuelThrghLftAt: string;
    useFuelGslnRitAt: any;
    useFuelKeroRitAt: any;
    useFuelThrghRitAt: any;
    extDmLftVal: number;
    extDmRitVal: number;
    makrNm: any;
    swVersion: any;
    swHash: any;

    constructor() {
        this.fomConfmSn = 0;
        this.fueldispenserSn = 0;
        this.fueldispenserModlCn = null;
        this.fomCode = null;
        this.fomCodeName = null;
        this.seCode = null;
        this.seCodeName = null;
        this.mxmmPressrValue = 0;
        this.mummPressrVal = 0;
        this.useTpScope = null;
        this.hoseLtValue = 0;
        this.selfSeCode = null;
        this.selfSeCodeName = null;
        this.prcsdgGradValue = 0;
        this.envrnGradCode = null;
        this.envrnGradCodeName = null;
        this.mxmmFluxLftVal = 0;
        this.mxmmFluxLftValUnitCode = null;
        this.mxmmFluxLftValUnitCodeName = null;
        this.mummFluxLftVal = 0;
        this.mummFluxLftUnitCode = null;
        this.mummFluxLftUnitCodeName = null;
        this.mummMesureQyLftVal = 0;
        this.mxmmFluxRitVal = 0;
        this.mxmmFluxRitValUnitCode = null;
        this.mxmmFluxRitValUnitCodeName = null;
        this.mummFluxRitVal = 0;
        this.mummFluxRitUnitCode = null;
        this.mummFluxRitUnitCodeName = null;
        this.mummMesureQyRitVal = 0;
        this.useFuelGslnLftAt = null;
        this.useFuelKeroLftAt = null;
        this.useFuelThrghLftAt = null;
        this.useFuelGslnRitAt = null;
        this.useFuelKeroRitAt = null;
        this.useFuelThrghRitAt = null;
        this.extDmLftVal = 0;
        this.extDmRitVal = 0;
        this.makrNm = null;
        this.swVersion = null;
        this.swHash = null;
    }
}
