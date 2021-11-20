import { AtchmnflT, Inspection } from './process-complete-view';
import { ProcessHistList } from './process-hist-list';

export interface ProcessInfoEditModel{

    inspectionT: Inspection;
    inspectionInsttList: InspectionInstt[];
    processHistList: ProcessHistList[];
    inspectionAtchmnflList: AtchmnflT[];
}

export interface InspectionInstt{
    insttSn: number;
    insttNm: string;
    bizrno: string;
    rprsntvNm: string;
    reprsntTelno: string;
    adresSeCode: string;
    zip: string;
    bassAdres: string;
    detailAdres: string ;
    insttSeCode: string;
    fomConfmInsttAt: string;
    athrzInsttAt: string;
    appnNoNm: string;
    apntDe: string;
    deleteAt: string;
    registDt: Date;
    registerSeCode: string;
    registerId: string;
    updtDt: Date;
    updusrSeCode: string;
    updusrId: string;
    athrzAppnNoNm: string;
    athrzApntDe: string;
}
