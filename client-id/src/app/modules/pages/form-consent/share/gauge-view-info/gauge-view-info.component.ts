import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { FormConsentCompleteView } from 'app/core/interfaces/form-consent-complete-view';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { FrmClinicalTempComponent } from '../frm-popup/frm-clinical-temp/frm-clinical-temp.component';
import { FrmElecmeterComponent } from '../frm-popup/frm-elecmeter/frm-elecmeter.component';
import { FrmElectronicPrecisionComponent } from '../frm-popup/frm-electronic-precision/frm-electronic-precision.component';
import { FrmElementsWaterComponent } from '../frm-popup/frm-elements-water/frm-elements-water.component';
import { FrmFuelDispenserComponent } from '../frm-popup/frm-fuel-dispenser/frm-fuel-dispenser.component';
import { FrmGasmeterComponent } from '../frm-popup/frm-gasmeter/frm-gasmeter.component';
import { FrmGrainMoistureComponent } from '../frm-popup/frm-grain-moisture/frm-grain-moisture.component';
import { FrmGrarulerTanVolLolComponent } from '../frm-popup/frm-graruler-tan-vol-lol/frm-graruler-tan-vol-lol.component';
import { FrmGrarulerTanVolComponent } from '../frm-popup/frm-graruler-tan-vol/frm-graruler-tan-vol.component';
import { FrmHeatMeterComponent } from '../frm-popup/frm-heat-meter/frm-heat-meter.component';
import { FrmHotWaterMeterComponent } from '../frm-popup/frm-hot-water-meter/frm-hot-water-meter.component';
import { FrmLpgDispenserComponent } from '../frm-popup/frm-lpg-dispenser/frm-lpg-dispenser.component';
import { FrmOilmeterComponent } from '../frm-popup/frm-oilmeter/frm-oilmeter.component';
import { FrmPlatformScalesPopupComponent } from '../frm-popup/frm-platform-scales-popup/frm-platform-scales-popup.component';
import { FrmProtableWhealLoadComponent } from '../frm-popup/frm-protable-wheal-load/frm-protable-wheal-load.component';
import { FrmSphygMonComponent } from '../frm-popup/frm-sphyg-mon/frm-sphyg-mon.component';
import { FrmSpringDialScalesPopupComponent } from '../frm-popup/frm-springdial-scales-popup/frm-springdial-scales-popup.component';
import { FrmWaterMeterComponent } from '../frm-popup/frm-water-meter/frm-water-meter.component';
import { FrmWeightComponent } from '../frm-popup/frm-weight/frm-weight.component';

@Component({
    selector: 'gauge-view-info',
    templateUrl: './gauge-view-info.component.html',
    styleUrls: ['../form-consent-share.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class GaugeViewInfoComponent implements OnInit {
    @Input() dataPage: FormConsentCompleteView;
    sizeDrawer = 720;

    constructor(private drawerService: NzDrawerService) { }

    ngOnInit(): void {
    }

    showPopup(): void {
        if (window.innerWidth >= 768) {
            this.sizeDrawer = 730;
        };
        if (window.innerWidth < 768 && window.innerWidth >= 600) {
            this.sizeDrawer = 580;
        }
        if (window.innerWidth < 600) {
            this.sizeDrawer = 350;
        }
        switch (this.dataPage.formConsentT.formConsent.mrnrSeCode) {
            case 'AB001001':
                const drawerMeter = this.drawerService.create<FrmPlatformScalesPopupComponent,
                    { dataMain: FormConsentCompleteView }>({
                        nzTitle: '규격및형식 (판수동저울)',
                        nzContent: FrmPlatformScalesPopupComponent,
                        nzWidth: this.sizeDrawer,
                        nzContentParams: {
                            dataMain: this.dataPage
                        }
                    });
                drawerMeter.open();
                break;
            case 'AB001002':
                const drawerMeter1 = this.drawerService.create<FrmSpringDialScalesPopupComponent,
                    { dataMain: FormConsentCompleteView }>({
                        nzTitle: '규격및형식 (접시지시및판지시저울)',
                        nzContent: FrmSpringDialScalesPopupComponent,
                        nzWidth: this.sizeDrawer,
                        nzContentParams: {
                            dataMain: this.dataPage
                        }
                    });
                drawerMeter1.open();
                break;
            case 'AB001003':
                const drawerMeter2 = this.drawerService.create<FrmElectronicPrecisionComponent,
                    { dataMain: FormConsentCompleteView }>({
                        nzTitle: '규격 및 형식 (전기식 지시 저울)',
                        nzContent: FrmElectronicPrecisionComponent,
                        nzWidth: this.sizeDrawer,
                        nzContentParams: {
                            dataMain: this.dataPage
                        }
                    });
                drawerMeter2.open();
                break;
            case 'AB001004':
                const drawerMeter3 = this.drawerService.create<FrmWeightComponent,
                    { dataMain: FormConsentCompleteView }>({
                        nzTitle: '규격 및 형식 (분동)',
                        nzContent: FrmWeightComponent,
                        nzWidth: this.sizeDrawer,
                        nzContentParams: {
                            dataMain: this.dataPage
                        }
                    });
                drawerMeter3.open();
                break;
            case 'AB001005':
                const drawerMeter4 = this.drawerService.create<FrmProtableWhealLoadComponent,
                    { dataMain: FormConsentCompleteView }>({
                        nzTitle: '규격 및 형식 (이동식 축중기)',
                        nzContent: FrmProtableWhealLoadComponent,
                        nzWidth: this.sizeDrawer,
                        nzContentParams: {
                            dataMain: this.dataPage
                        }
                    });
                drawerMeter4.open();
                break;
            case 'AB001006':
                const drawerMeter5 = this.drawerService.create<FrmGasmeterComponent,
                    { dataMain: FormConsentCompleteView }>({
                        nzTitle: '규격 및 형식 (가스미터)',
                        nzContent: FrmGasmeterComponent,
                        nzWidth: this.sizeDrawer,
                        nzContentParams: {
                            dataMain: this.dataPage
                        }
                    });
                drawerMeter5.open();
                break;
            case 'AB001007':
                const drawerMeter6 = this.drawerService.create<FrmWaterMeterComponent,
                    { dataMain: FormConsentCompleteView }>({
                        nzTitle: '규격 및 형식 (가스미터)',
                        nzContent: FrmWaterMeterComponent,
                        nzWidth: this.sizeDrawer,
                        nzContentParams: {
                            dataMain: this.dataPage
                        }
                    });
                drawerMeter6.open();
                break;
            case 'AB001008':
                const drawerMeter7 = this.drawerService.create<FrmHotWaterMeterComponent,
                    { dataMain: FormConsentCompleteView }>({
                        nzTitle: '규격 및 형식 (온수미터)',
                        nzContent: FrmHotWaterMeterComponent,
                        nzWidth: this.sizeDrawer,
                        nzContentParams: {
                            dataMain: this.dataPage
                        }
                    });
                drawerMeter7.open();
                break;
            case 'AB001009':
                const drawerMeter8 = this.drawerService.create<FrmOilmeterComponent,
                    { dataMain: FormConsentCompleteView }>({
                        nzTitle: '규격 및 형식 (오일미터)',
                        nzContent: FrmOilmeterComponent,
                        nzWidth: this.sizeDrawer,
                        nzContentParams: {
                            dataMain: this.dataPage
                        }
                    });
                drawerMeter8.open();
                break;
            case 'AB001010':
                const drawerMeter9 = this.drawerService.create<FrmFuelDispenserComponent,
                    { dataMain: FormConsentCompleteView }>({
                        nzTitle: '규격 및 형식 (주유기)',
                        nzContent: FrmFuelDispenserComponent,
                        nzWidth: this.sizeDrawer,
                        nzContentParams: {
                            dataMain: this.dataPage
                        }
                    });
                drawerMeter9.open();
                break;
            case 'AB001011':
                const drawerMeter10 = this.drawerService.create<FrmLpgDispenserComponent,
                    { dataMain: FormConsentCompleteView }>({
                        nzTitle: '규격 및 형식 (LPG 미터)',
                        nzContent: FrmLpgDispenserComponent,
                        nzWidth: this.sizeDrawer,
                        nzContentParams: {
                            dataMain: this.dataPage
                        }
                    });
                drawerMeter10.open();
                break;
            case 'AB001012':
                const drawerMeter11 = this.drawerService.create<FrmGrarulerTanVolComponent,
                    { dataMain: FormConsentCompleteView }>({
                        nzTitle: '규격 및 형식 (눈새김 탱크)',
                        nzContent: FrmGrarulerTanVolComponent,
                        nzWidth: this.sizeDrawer,
                        nzContentParams: {
                            dataMain: this.dataPage
                        }
                    });
                drawerMeter11.open();
                break;
            case 'AB001013':
                const drawerMeter12 = this.drawerService.create<FrmGrarulerTanVolLolComponent,
                    { dataMain: FormConsentCompleteView }>({
                        nzTitle: '규격 및 형식 (눈새김 탱크로리)',
                        nzContent: FrmGrarulerTanVolLolComponent,
                        nzWidth: this.sizeDrawer,
                        nzContentParams: {
                            dataMain: this.dataPage
                        }
                    });
                drawerMeter12.open();
                break;
            case 'AB001014':
                const drawerMeter13 = this.drawerService.create<FrmHeatMeterComponent,
                    { dataMain: FormConsentCompleteView }>({
                        nzTitle: '규격 및 형식 (적산열량계)',
                        nzContent: FrmHeatMeterComponent,
                        nzWidth: this.sizeDrawer,
                        nzContentParams: {
                            dataMain: this.dataPage
                        }
                    });
                drawerMeter13.open();
                break;
            case 'AB001015':
                const drawerMeter14 = this.drawerService.create<FrmElecmeterComponent,
                    { dataMain: FormConsentCompleteView }>({
                        nzTitle: '규격 및 형식 (전력량계)',
                        nzContent: FrmElecmeterComponent,
                        nzWidth: this.sizeDrawer,
                        nzContentParams: {
                            dataMain: this.dataPage
                        }
                    });
                drawerMeter14.open();
                break;
            case 'AB001016':
                const drawerMeter15 = this.drawerService.create<FrmGrainMoistureComponent,
                    { dataMain: FormConsentCompleteView }>({
                        nzTitle: '규격 및 형식 (곡물수분 측정기)',
                        nzContent: FrmGrainMoistureComponent,
                        nzWidth: this.sizeDrawer,
                        nzContentParams: {
                            dataMain: this.dataPage
                        }
                    });
                drawerMeter15.open();
                break;
            case 'AB001017':
                const drawerMeter16 = this.drawerService.create<FrmClinicalTempComponent,
                    { dataMain: FormConsentCompleteView }>({
                        nzTitle: '규격 및 형식 (쳬온계)',
                        nzContent: FrmClinicalTempComponent,
                        nzWidth: this.sizeDrawer,
                        nzContentParams: {
                            dataMain: this.dataPage
                        }
                    });
                drawerMeter16.open();
                break;
            case 'AB001018':
                const drawerMeter17 = this.drawerService.create<FrmSphygMonComponent,
                    { dataMain: FormConsentCompleteView }>({
                        nzTitle: '규격 및 형식 (혈압계)',
                        nzContent: FrmSphygMonComponent,
                        nzWidth: this.sizeDrawer,
                        nzContentParams: {
                            dataMain: this.dataPage
                        }
                    });
                drawerMeter17.open();
                break;
            case 'AB001020':
                const drawerMeter18 = this.drawerService.create<FrmElementsWaterComponent,
                    { dataMain: FormConsentCompleteView }>({
                        nzTitle: '규격 및 형식 (요소수 미터)',
                        nzContent: FrmElementsWaterComponent,
                        nzWidth: this.sizeDrawer,
                        nzContentParams: {
                            dataMain: this.dataPage
                        }
                    });
                drawerMeter18.open();
                break;
            default:
                alert('구성 중인 기능');
        }
    }

}
