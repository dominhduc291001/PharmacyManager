import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IptVesslPage } from '../models/inspection-popup/ipt-vessl-page';
import { IptVesslT } from '../models/inspection-popup/ipt-vesslT';
import { IptPlatformSave, IptPlfrm } from '../models/inspection-popup/ipt-platform-model';
import { SpringDialSecodeSave } from '../models/inspection-popup/ipt-spring-dial-secode';
import { IptSprdscPlfrmdscDetailT, IptSpringDialScaleSave } from '../models/inspection-popup/ipt-spring-dial-scale-model';
import { IptEltrnPrcsBlDetailT } from '../models/inspection-popup/ipt-electron-precision-model';
import { IptFueldispenserT } from '../models/inspection-popup/ipt-fue-dispenser';
import { EntrprsSearchModel } from '../models/inspection-popup/entrprs-search-model';
import { EntrprsSearchRp } from '../interfaces/entrprs-search-rp';
import { UrlDefault } from 'app/shared/urlDefault';
import { IptLpgDispenserModel, IptLpgdispenserT } from '../models/inspection-popup/ipt-lgp-dispenser-model';
import { IptElementsWaterT, IptElementWaterModel } from '../models/inspection-popup/ipt-element-water-model';
import { IptWeightModel, IptWeightT } from '../models/inspection-popup/ipt-weight-model';
import { IptGasmeterModel, IptGasmeterT } from '../models/inspection-popup/ipt-gasmeter-model';
import { IptWaterMeterModel, IptWaterMeterT } from '../models/inspection-popup/ipt-watermeter-model';
import { IptHotWaterMeterModel, IptHotWaterMeterT } from '../models/inspection-popup/ipt-hotwater-meter-model';
import { IptOilMeterModel, IptOilmeterT } from '../models/inspection-popup/ipt-oilmeter-model';
import { IptGrarulerTanvolModel } from '../models/inspection-popup/ipt-graruler-tanvol-model';
import { IptHeatMeterModel } from '../models/inspection-popup/ipt-heatmeter-model';
import { IptElecMeterModel } from '../models/inspection-popup/ipt-elecmeter-model';

@Injectable({
  providedIn: 'root'
})
export class InspectionPopupService {
  private httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json'
    }),
  };
  constructor(private router: Router, private httpClient: HttpClient) { }

  public getIptVessPopup(_athrzSn: number, _athrzDetail: number, _reqstQy: number, _searchText: string): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptVesslPopup`;
    const result = {
        athrzSn: _athrzSn,
        athrzDetailSn: _athrzDetail,
        reqstQy: _reqstQy,
        searchText: _searchText
    };
    return this.httpClient
      .post<IptVesslPage>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptDummyVesslNo(result: IptVesslT): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/InsertDummyVesslNo`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptVessProcess(result: IptVesslT): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptVesslProcess`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public etcDetailEdit(_athrzSn: number, _athrzDetail: number, _reqstdocVesslNo: string): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/AthrzDetailEtcInfoEditProcess`;
    const result = {
        athrzSn: _athrzSn,
        athrzDetailSn: _athrzDetail,
        reqstdocVesslNo: _reqstdocVesslNo
    };
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptPlatFormScalesPopup(_athrzSn: number, _athrzDetail: number): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptPlatFormScalesPopup`;
    const result = {
        athrzSn: _athrzSn,
        athrzDetailSn: _athrzDetail,
    };
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptPlatFormScalesDetailProcess(result: IptPlatformSave): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptPlatFormScalesDetailProcess`;
    return this.httpClient
      .post<IptPlatformSave>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptPlatFormScalesDetailDelete(data: IptPlfrm): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptPlatFormScalesDetailDelete`;
    const result = {
        athrzSn: data.athrzSn,
        athrzDetailSn: data.athrzDetailSn,
        plfrmSclDetailSn: data.plfrmSclDetailSn
    };
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptSpringDialScalesPopup(_athrzSn: number, _athrzDetail: number): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptSpringDialScalesPopup`;
    const result = {
        athrzSn: _athrzSn,
        athrzDetailSn: _athrzDetail,
    };
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptSpringDialScalesProcess(result: SpringDialSecodeSave): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptSpringDialScalesProcess`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public iptSpringDialScalesDetailProcess(result: IptSpringDialScaleSave): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptSpringDialScalesDetailProcess`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptSpringDialScalesDetailDelete(data: IptSprdscPlfrmdscDetailT): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptSpringDialScalesDetailDelete`;
    const result = {
        athrzSn: data.athrzSn,
        athrzDetailSn: data.athrzDetailSn,
        sprdscPlfrmdscDetaillSn: data.sprdscPlfrmdscDetaillSn
    };
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptElectronicPrecisionPopup(_athrzSn: number, _athrzDetail: number): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptElectronicPrecisionPopup`;
    const result = {
        athrzSn: _athrzSn,
        athrzDetailSn: _athrzDetail,
    };
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptElectronicPrecisionProcess(result: IptEltrnPrcsBlDetailT): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptElectronicPrecisionProcess`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptElectronicPrecisionDelete(data: IptEltrnPrcsBlDetailT): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptElectronicPrecisionDelete`;
    const result = {
        athrzSn: data.athrzSn,
        athrzDetailSn: data.athrzDetailSn,
        ausEltrnPrcsBlSn: data.ausEltrnPrcsBlSn
    };
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptFueDispenserPopup(_athrzSn: number, _athrzDetail: number): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptFuelDispenserPopup`;
    const result = {
        athrzSn: _athrzSn,
        athrzDetailSn: _athrzDetail,
    };
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptFueDispenserProcess(result: IptFueldispenserT): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptFuelDispenserProcess`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptFueDispenserDelete(data: IptFueldispenserT): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptFuelDispenserDelete`;
    const result = {
        athrzSn: data.athrzSn,
        athrzDetailSn: data.athrzDetailSn,
        ausFueldispenserSn: data.ausFueldispenserSn
    };
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public entrprsSearchListPopup(result: EntrprsSearchModel): Observable<EntrprsSearchRp[]>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/EntrprsSearchListPopup`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptLpgDispenserPopup(_athrzSn: number, _athrzDetail: number): Observable<IptLpgDispenserModel>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptLpgDispenserPopup`;
    const result = {
        athrzSn: _athrzSn,
        athrzDetailSn: _athrzDetail,
    };
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptLpgDispenserProcess(result: IptLpgdispenserT): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptLpgDispenserProcess`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptLpgDispenserDelete(result: IptLpgdispenserT): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptLpgDispenserDelete`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptElementsWaterPopup(_athrzSn: number, _athrzDetail: number): Observable<IptElementWaterModel>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptElementsWaterPopup`;
    const result = {
        athrzSn: _athrzSn,
        athrzDetailSn: _athrzDetail,
    };
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptElementsWaterProcess(result: IptElementsWaterT): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptElementsWaterProcess`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptElementsWaterDelete(result: IptElementsWaterT): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptElementsWaterDelete`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptWeightPopup(_athrzSn: number, _athrzDetail: number): Observable<IptWeightModel>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptWeightPopup`;
    const result = {
        athrzSn: _athrzSn,
        athrzDetailSn: _athrzDetail,
    };
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptWeightProcess(result: IptWeightT): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptWeightProcess`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptGasmeterPopup(_athrzSn: number, _athrzDetail: number): Observable<IptGasmeterModel>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptGasmeterPopup`;
    const result = {
        athrzSn: _athrzSn,
        athrzDetailSn: _athrzDetail,
    };
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptGasmeterProcess(result: IptGasmeterT): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptGasmeterProcess`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptWatermeterPopup(_athrzSn: number, _athrzDetail: number): Observable<IptWaterMeterModel>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptWaterMeterPopup`;
    const result = {
        athrzSn: _athrzSn,
        athrzDetailSn: _athrzDetail,
    };
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptWatermeterProcess(result: IptWaterMeterT): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptWaterMeterProcess`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptHotWaterMeterPopup(_athrzSn: number, _athrzDetail: number): Observable<IptHotWaterMeterModel>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptHotWaterMeterPopup`;
    const result = {
        athrzSn: _athrzSn,
        athrzDetailSn: _athrzDetail,
    };
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptHotWaterMeterProcess(result: IptHotWaterMeterT): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptHotWaterMeterProcess`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptOilMeterPopup(_athrzSn: number, _athrzDetail: number): Observable<IptOilMeterModel>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptOilMeterPopup`;
    const result = {
        athrzSn: _athrzSn,
        athrzDetailSn: _athrzDetail,
    };
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptOilMeterProcess(result: IptOilmeterT): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptOilMeterProcess`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptGrarulerTanvolPopup(_athrzSn: number, _athrzDetail: number): Observable<IptGrarulerTanvolModel>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptGrarulerTanVolPopup`;
    const result = {
        athrzSn: _athrzSn,
        athrzDetailSn: _athrzDetail,
    };
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptGrarulerTanvolProcess(result: IptGrarulerTanvolModel): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptGrarulerTanVolProcess`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptHeatMeterPopup(_athrzSn: number, _athrzDetail: number): Observable<IptHeatMeterModel>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptHeatMeterPopup`;
    const result = {
        athrzSn: _athrzSn,
        athrzDetailSn: _athrzDetail,
    };
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptHeatMeterProcess(result: IptHeatMeterModel): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptHeatMeterProcess`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptElecMeterPopup(_athrzSn: number, _athrzDetail: number): Observable<IptElecMeterModel>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptElecMeterPopup`;
    const result = {
        athrzSn: _athrzSn,
        athrzDetailSn: _athrzDetail,
    };
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public iptElecMeterProcess(result: IptElecMeterModel): Observable<any>{
    const url = `${UrlDefault._apiServer}/api/InspectionPopup/IptElecMeterProcess`;
    return this.httpClient
      .post<any>(url,result,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any{
    return throwError(error.status);
  }
}
