export class FrmElecmeter {
    fmsElecmeterT: ElecmeterT;

    constructor(){
        this.fmsElecmeterT = new ElecmeterT();
    }
}

export class ElecmeterT {
    fomConfmSn: number;
    fomCode: string;
    fomCodeName: string;
    estbSeCode: string;
    estbSeCodeName: string;
    upptNdLnFrmlaCode: string;
    upptNdLnFrmlaCodeName: string;
    stdrVltgeCode: string;
    stdrVltgeCodeName: string;
    stdrErcrtCode: string;
    stdrErcrtCodeName: string;
    mxmmPermErcrtVal: number;
    printErcrtVal: string;
    sdfncCode: string;
    validGradCode: string;
    validGradCodeName: string;
    validSmEstbCoVal: number;
    validSmEstbUnitCode: string;
    validSmEstbUnitCodeName: string;
    unavblGradCode: string;
    unavblGradCodeName: string;
    unavblSmEstbCoVal: number;
    unavblSmEstbCoValUnitCd: string;
    unavblSmEstbCoValUnitCdName: string;
    useEnvrnIntgrCode: string;
    useEnvrnIntgrCodeName: string;
    ratingMxmmAceptncLmpdValue: number;
    mesurDrcCode: string;
    mesurDrcCodeName: string;
    fomNm: string;
    conectStrctCode: string;
    conectStrctCodeName: string;
    athrzValidPdVal: string;
    etcMatterCn: string;
    swVersion: string;

    constructor(){
        this.fomConfmSn = 0;
        this.fomCode = null;
        this.fomCodeName = null;
        this.estbSeCode = null;
        this.estbSeCodeName = null;
        this.upptNdLnFrmlaCode = null;
        this.upptNdLnFrmlaCodeName = null;
        this.stdrVltgeCode = null;
        this.stdrVltgeCodeName = null;
        this.stdrErcrtCode = null;
        this.stdrErcrtCodeName = null;
        this.mxmmPermErcrtVal = 0;
        this.printErcrtVal = null;
        this.sdfncCode = null;
        this.validGradCode = null;
        this.validGradCodeName = null;
        this.validSmEstbCoVal = 0;
        this.validSmEstbUnitCode = null;
        this.validSmEstbUnitCodeName = null;
        this.unavblGradCode = null;
        this.unavblGradCodeName = null;
        this.unavblSmEstbCoVal = 0;
        this.unavblSmEstbCoValUnitCd = null;
        this.unavblSmEstbCoValUnitCdName = null;
        this.useEnvrnIntgrCode = null;
        this.useEnvrnIntgrCodeName = null;
        this.ratingMxmmAceptncLmpdValue = 0;
        this.mesurDrcCode = null;
        this.mesurDrcCodeName = null;
        this.fomNm = null;
        this.conectStrctCode = null;
        this.conectStrctCodeName = null;
        this.athrzValidPdVal = null;
        this.etcMatterCn = null;
        this.swVersion = null;
    }
}
