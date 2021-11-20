/* eslint-disable @typescript-eslint/naming-convention */
export class FrmWeight {
    fmsWeightT: WeightT;

    constructor() {
        this.fmsWeightT = new WeightT();
    }
}

export class WeightT {
    fmsWeight: Weight;
    fomConfmCntpeSetStrct_SingleT: FomConfmCntpeSetShape;
    fomConfmCntpeSetStrct_DualT: FomConfmCntpeSetShape;
    fomConfmCntpeSetHole_ExistT: FomConfmCntpeSetShape;
    fomConfmCntpeSetHole_EmptyT: FomConfmCntpeSetShape;
    fomConfmCntpeSetShape_LineT: FomConfmCntpeSetShape;
    fomConfmCntpeSetShape_PlateT: FomConfmCntpeSetShape;
    fomConfmCntpeSetShape_PailT: FomConfmCntpeSetShape;
    fomConfmCntpeSetShape_RectangleT: FomConfmCntpeSetShape;
    fomConfmCntpeSetShape_EtcT: FomConfmCntpeSetShape;

    constructor() {
        this.fmsWeight = new Weight();
        this.fomConfmCntpeSetStrct_SingleT = new FomConfmCntpeSetShape();
        this.fomConfmCntpeSetStrct_DualT = new FomConfmCntpeSetShape();
        this.fomConfmCntpeSetHole_ExistT = new FomConfmCntpeSetShape();
        this.fomConfmCntpeSetHole_EmptyT = new FomConfmCntpeSetShape();
        this.fomConfmCntpeSetShape_LineT = new FomConfmCntpeSetShape();
        this.fomConfmCntpeSetShape_PlateT = new FomConfmCntpeSetShape();
        this.fomConfmCntpeSetShape_PailT = new FomConfmCntpeSetShape();
        this.fomConfmCntpeSetShape_RectangleT = new FomConfmCntpeSetShape();
        this.fomConfmCntpeSetShape_EtcT = new FomConfmCntpeSetShape();
    }
}

export class Weight {
    fomConfmSn: number;
    gradCode: any;
    gradCodeName: any;
    tyCode: any;
    tyCodeName: any;
    setSeCode: any;
    setSeCodeName: any;
    setGngchMummVal: any;
    setGngchMummValUnitCd: any;
    setGngchMummValUnitCdName: any;
    setGngchMxmmVal: any;
    setGngchMxmmValUnitCd: any;
    setGngchMxmmValUnitCdName: any;
    pceGngchVal: any;
    pceGngchValUnitCode: any;
    pceGngchValUnitCodeName: any;
    pceStrctCode: any;
    pceStrctCodeName: any;
    pceMdatHoleCode: any;
    pceMdatHoleCodeName: any;
    pceShapeCode: any;
    pceShapeCodeName: any;
    fomNm: any;

    constructor() {
        this.fomConfmSn = 0;
        this.gradCode = null;
        this.gradCodeName = null;
        this.tyCode = null;
        this.tyCodeName = null;
        this.setSeCode = null;
        this.setSeCodeName = null;
        this.setGngchMummVal = null;
        this.setGngchMummValUnitCd = null;
        this.setGngchMummValUnitCdName = null;
        this.setGngchMxmmVal = null;
        this.setGngchMxmmValUnitCd = null;
        this.setGngchMxmmValUnitCdName = null;
        this.pceGngchVal = null;
        this.pceGngchValUnitCode = null;
        this.pceGngchValUnitCodeName = null;
        this.pceStrctCode = null;
        this.pceStrctCodeName = null;
        this.pceMdatHoleCode = null;
        this.pceMdatHoleCodeName = null;
        this.pceShapeCode = null;
        this.pceShapeCodeName = null;
        this.fomNm = null;
    }
}

export class FomConfmCntpeSetShape {
    fomConfmSn: any;
    fomConfmCntpeSetStrctSn: any;
    setStrctCode: any;
    setStrctCodeName: any;
    setStrctMummVal: any;
    setStrctMummValUnitCd: any;
    setStrctMummValUnitCdName: any;
    setStrctMxmmVal: any;
    setStrctMxmmValUnitCd: any;
    setStrctMxmmValUnitCdName: any;

    constructor() {
        this.fomConfmSn = null;
        this.fomConfmCntpeSetStrctSn = null;
        this.setStrctCode = null;
        this.setStrctCodeName = null;
        this.setStrctMummVal = null;
        this.setStrctMummValUnitCd = null;
        this.setStrctMummValUnitCdName = null;
        this.setStrctMxmmVal = null;
        this.setStrctMxmmValUnitCd = null;
        this.setStrctMxmmValUnitCdName = null;
    }
}
