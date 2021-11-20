import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UrlDefault } from 'app/shared/urlDefault';
import { FrmPopupRq } from '../models/frm-popup-rq';
import { FrmPlatformScale } from '../models/form-consent-popup/frm-platform-scales';
import { FrmSpringDialScales } from '../models/form-consent-popup/frm-springdial-scales';
import { FrmElectronicPrecision } from '../models/form-consent-popup/frm-electronic-precision';
import { FrmWeight } from '../models/form-consent-popup/frm-weight';
import { FrmProtableWhealLoad } from '../models/form-consent-popup/frm-protable-wheal-load';
import { FrmGasmeter } from '../models/form-consent-popup/frm-gasmeter';
import { FrmWaterMeter } from '../models/form-consent-popup/frm-water-meter';
import { FrmHotWaterMeter } from '../models/form-consent-popup/frm-hot-water-meter';
import { FrmOilmeter } from '../models/form-consent-popup/frm-oilmeter';
import { FrmFuelDispenser } from '../models/form-consent-popup/frm-fuel-dispenser';
import { FrmLpgDispenser } from '../models/form-consent-popup/frm-lpg-dispenser';
import { FrmGrarulerTanVol } from '../models/form-consent-popup/frm-graruler-tan-vol';
import { FrmGrarulerTanVolLol } from '../models/form-consent-popup/frm-graruler-tan-vol-lol';
import { FrmHeatMeter } from '../models/form-consent-popup/frm-heat-meter';
import { FrmElecmeter } from '../models/form-consent-popup/frm-elecmeter';
import { FrmGrainMoisture } from '../models/form-consent-popup/frm-grain-moisture';
import { FrmClinicalTemp } from '../models/form-consent-popup/frm-clinical-temp';
import { FrmSphygMon } from '../models/form-consent-popup/frm-sphyg-mon';
import { FrmElementsWater } from '../models/form-consent-popup/frm-elements-water';

@Injectable({
    providedIn: 'root'
})
export class FrmPopupService {
    private httpOptions = {
        headers: new HttpHeaders({
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Content-Type': 'application/json'
        }),
    };
    constructor(private router: Router, private httpClient: HttpClient) { }

    public frmConsentPlatformScalesViewPopup(result: FrmPopupRq): Observable<FrmPlatformScale> {
        const url = `${UrlDefault._apiServer}/api/FrmPopup/FormConsentPlatFormScalesViewPopup`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public frmConsentSpringDialScalesViewPopup(result: FrmPopupRq): Observable<FrmSpringDialScales> {
        const url = `${UrlDefault._apiServer}/api/FrmPopup/FormConsentSpringDialScalesViewPopup`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public frmConsentElectronicPrecisionViewPopup(result: FrmPopupRq): Observable<FrmElectronicPrecision> {
        const url = `${UrlDefault._apiServer}/api/FrmPopup/FormConsentElectronicPrecisionViewPopup`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public frmConsentWeightViewPopup(result: FrmPopupRq): Observable<FrmWeight> {
        const url = `${UrlDefault._apiServer}/api/FrmPopup/FormConsentWeightViewPopup`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public frmConsentProtableWhealLoadViewPopup(result: FrmPopupRq): Observable<FrmProtableWhealLoad> {
        const url = `${UrlDefault._apiServer}/api/FrmPopup/FormConsentProtableWhealLoadViewPopup`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public frmConsentFmsGasmeterViewPopup(result: FrmPopupRq): Observable<FrmGasmeter> {
        const url = `${UrlDefault._apiServer}/api/FrmPopup/FormConsentFmsGasmeterViewPopup`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public frmConsentFmsWaterMeterViewPopup(result: FrmPopupRq): Observable<FrmWaterMeter> {
        const url = `${UrlDefault._apiServer}/api/FrmPopup/FormConsentFmsWaterMeterViewPopup`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public formConsentFmsHotWaterMeterViewPopup(result: FrmPopupRq): Observable<FrmHotWaterMeter> {
        const url = `${UrlDefault._apiServer}/api/FrmPopup/FormConsentFmsHotWaterMeterViewPopup`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public formConsentFmsOilmeterViewPopup(result: FrmPopupRq): Observable<FrmOilmeter> {
        const url = `${UrlDefault._apiServer}/api/FrmPopup/FormConsentFmsOilmeterViewPopup`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public formConsentFuelDispenserViewPopup(result: FrmPopupRq): Observable<FrmFuelDispenser> {
        const url = `${UrlDefault._apiServer}/api/FrmPopup/FormConsentFuelDispenserViewPopup`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public formConsentLpgDispenserViewPopup(result: FrmPopupRq): Observable<FrmLpgDispenser> {
        const url = `${UrlDefault._apiServer}/api/FrmPopup/FormConsentLpgDispenserViewPopup`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public formConsentGrarulerTanVolViewPopup(result: FrmPopupRq): Observable<FrmGrarulerTanVol> {
        const url = `${UrlDefault._apiServer}/api/FrmPopup/FormConsentGrarulerTanVolViewPopup`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public formConsentGrarulerTanVolLolViewPopup(result: FrmPopupRq): Observable<FrmGrarulerTanVolLol> {
        const url = `${UrlDefault._apiServer}/api/FrmPopup/FormConsentGrarulerTanVolLolViewPopup`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public formConsentHeatMeterViewPopup(result: FrmPopupRq): Observable<FrmHeatMeter> {
        const url = `${UrlDefault._apiServer}/api/FrmPopup/FormConsentHeatMeterViewPopup`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public formConsentElecmeterViewPopup(result: FrmPopupRq): Observable<FrmElecmeter> {
        const url = `${UrlDefault._apiServer}/api/FrmPopup/FormConsentElecmeterViewPopup`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public formConsentGrainMoistureViewPopup(result: FrmPopupRq): Observable<FrmGrainMoisture> {
        const url = `${UrlDefault._apiServer}/api/FrmPopup/FormConsentGrainMoistureViewPopup`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public formConsentClinicalTempViewPopup(result: FrmPopupRq): Observable<FrmClinicalTemp> {
        const url = `${UrlDefault._apiServer}/api/FrmPopup/FormConsentClinicalTempViewPopup`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public formConsentSphygMonViewPopup(result: FrmPopupRq): Observable<FrmSphygMon> {
        const url = `${UrlDefault._apiServer}/api/FrmPopup/FormConsentSphygMonViewPopup`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public formConsentElementsWaterPopup(result: FrmPopupRq): Observable<FrmElementsWater> {
        const url = `${UrlDefault._apiServer}/api/FrmPopup/FormConsentElementsWaterPopup`;
        return this.httpClient
            .post<any>(url, result, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): any {
        return throwError(error.status);
    }
}
