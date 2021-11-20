export interface EntrprsSearchRp{
    entrprsSn: number;
    entrprsNm: string;
    bizrno: string;
    rprsntvNm: string;
    reprsntTelno: string;
    reprsntFxNum: string;
    mfcrtrAt: string;
    irtbAt: string;
    repairIndutyAt: string;
    mesurProofIndutyAt: string;
    mrnrEmplyrAt: string;
    atptRceptAt: string;
    mberAt: string;
    deleteAt: string;
    enterpriseSectionName: string;
    registDt: Date;
    registerId: string;
    updtDt: Date;
    updusrId: string;
    registerSeCode: string;
    updusrSeCode: string;
    registerNm: string;
    updusrNm: string;
    hmpgUrl: string;
    rcognDe: string;
    rcognNoNm: string;
    rcognSeCodeNm: string;
    rowNumber: number;
    totalCount: number;
    bizEntrprsAdres: BizEntrprs;
}

export interface BizEntrprs{
    entrprsAdresSn: number;
    entrprsSn: number;
    entrprsAdresSeCode: string;
    entrprsAdresSeCodeNm: string;
    entrprsAdresNm: string;
    adresTelno: string;
    adresFxnum: string;
    adresSeCode: string;
    detailAdres: string;
    bassAdres: string;
    zip: string;
    zip1: string;
    zip2: string;
    dmstcAt: string;
}
