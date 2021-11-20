export interface DdlFormConsentInfo{
    searchModel: any;
    gridData: any;
    mrnrSeCodeList: MrnrSeCode[];
    fomConfmSeCodeList: FomConfmSeCodeList[];
    registSeCodeList: any;
    processSttusList: any;
}

export interface MrnrSeCode{
    bsisCode: string;
    bsisCodeNm: string;
    upperCodeOne: any;
    upperCodeTwo: any;
    upperCodeThree: any;
}

export interface FomConfmSeCodeList{
    bsisCode: string;
    bsisCodeNm: string;
    upperCodeOne: any;
    upperCodeTwo: any;
    upperCodeThree: any;
}
