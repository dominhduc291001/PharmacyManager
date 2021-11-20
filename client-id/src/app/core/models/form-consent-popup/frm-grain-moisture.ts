export class FrmGrainMoisture {
    fomConfmSn: number;
    fmsGrainMstureMetersTList: GrainMstureMetersT[];
    fmsGrainMstureMetersT: GrainMstureMetersT;

    constructor() {
        this.fomConfmSn = 0;
        this.fmsGrainMstureMetersTList = [];
        this.fmsGrainMstureMetersT = new GrainMstureMetersT();
    }
}
export class GrainMstureMetersT {
    fomConfmSn: number;
    fmsGrainMstureMetersSn: number;
    fomNm: string;
    mesureMthdCode: string;
    mesureMthdCodeName: string;
    mesureScopeCode: string;
    mesureScopeCodeName: string;
    prcsdgCode: string;
    prcsdgCodeName: string;
    useTpScope: string;
    trgetCrlsRcepntAt: string;
    trgetCrlsRiceAt: string;
    trgetCrlsBrrceAt: string;
    trgetCrlsBrrerLiAt: string;
    trgetCrlsBrrerLiRiceAt: string;
    trgetCrlsWheatAt: string;

    constructor() {
        this.fomConfmSn = 0;
        this.fmsGrainMstureMetersSn = 0;
        this.fomNm = null;
        this.mesureMthdCode = null;
        this.mesureMthdCodeName = null;
        this.mesureScopeCode = null;
        this.mesureScopeCodeName = null;
        this.prcsdgCode = null;
        this.prcsdgCodeName = null;
        this.useTpScope = null;
        this.trgetCrlsRcepntAt = null;
        this.trgetCrlsRiceAt = null;
        this.trgetCrlsBrrceAt = null;
        this.trgetCrlsBrrerLiAt = null;
        this.trgetCrlsBrrerLiRiceAt = null;
        this.trgetCrlsWheatAt = null;
    }
}
