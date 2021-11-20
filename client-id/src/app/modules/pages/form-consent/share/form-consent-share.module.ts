import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MatRadioModule } from '@angular/material/radio';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { IconsProviderModule } from 'app/core/icons/icons-provider.module';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { MY_DATE_FORMATS } from '../../test-manager/share/my-date-formats';
import { ApprovalHistoryComponent } from './approval-history/approval-history.component';
import { EnterPriseViewComponent } from './enterprise-view/enterprise-view.component';
import { GaugeViewComponent } from './gauge-view/gauge-view.component';
import { EtcViewComponent } from './etc-view/etc-view.component';
import { ConsentDocViewComponent } from './consent-docview/consent-docview.component';
import { SampleViewComponent } from './sample-view/sample-view.component';
import { TestResultViewComponent } from './test-result-view/test-result-view.component';
import { LawViewComponent } from './law-view/law-view.component';
import { ChangeInfoViewComponent } from './change-info-view/change-info-view.component';
import { ReissueViewComponent } from './reissue-view/reissue-view.component';
import { IssueInfoViewComponent } from './issue-info/issue-info.component';
import { FrmPlatformScalesPopupComponent } from './frm-popup/frm-platform-scales-popup/frm-platform-scales-popup.component';
import { FrmSpringDialScalesPopupComponent } from './frm-popup/frm-springdial-scales-popup/frm-springdial-scales-popup.component';
import { FrmElectronicPrecisionComponent } from './frm-popup/frm-electronic-precision/frm-electronic-precision.component';
import { FrmWeightComponent } from './frm-popup/frm-weight/frm-weight.component';
import { FrmProtableWhealLoadComponent } from './frm-popup/frm-protable-wheal-load/frm-protable-wheal-load.component';
import { FrmGasmeterComponent } from './frm-popup/frm-gasmeter/frm-gasmeter.component';
import { FrmWaterMeterComponent } from './frm-popup/frm-water-meter/frm-water-meter.component';
import { FrmHotWaterMeterComponent } from './frm-popup/frm-hot-water-meter/frm-hot-water-meter.component';
import { FrmOilmeterComponent } from './frm-popup/frm-oilmeter/frm-oilmeter.component';
import { FrmFuelDispenserComponent } from './frm-popup/frm-fuel-dispenser/frm-fuel-dispenser.component';
import { FrmLpgDispenserComponent } from './frm-popup/frm-lpg-dispenser/frm-lpg-dispenser.component';
import { FrmGrarulerTanVolComponent } from './frm-popup/frm-graruler-tan-vol/frm-graruler-tan-vol.component';
import { FrmGrarulerTanVolLolComponent } from './frm-popup/frm-graruler-tan-vol-lol/frm-graruler-tan-vol-lol.component';
import { FrmHeatMeterComponent } from './frm-popup/frm-heat-meter/frm-heat-meter.component';
import { FrmElecmeterComponent } from './frm-popup/frm-elecmeter/frm-elecmeter.component';
import { FrmGrainMoistureComponent } from './frm-popup/frm-grain-moisture/frm-grain-moisture.component';
import { FrmClinicalTempComponent } from './frm-popup/frm-clinical-temp/frm-clinical-temp.component';
import { FrmSphygMonComponent } from './frm-popup/frm-sphyg-mon/frm-sphyg-mon.component';
import { FrmElementsWaterComponent } from './frm-popup/frm-elements-water/frm-elements-water.component';
import { ApprovalRequestComponent } from './approval-request/approval-request.component';
import { GaugeEditViewComponent } from './gauge-edit/gauge-edit.component';
import { SampleEditComponent } from './sample-edit/sample-edit.component';
import { TestResultEditComponent } from './test-result-edit/test-result-edit.component';
import { LawEditComponent } from './law-edit/law-edit.component';
import { ChangeInfoEditComponent } from './change-info-edit/change-info-edit.component';
import { ProcessInfoViewComponent } from './process-info-view/process-info-view.component';
import { ApprovalInformationComponent } from './approval-information/approval-information.component';
import { GaugeViewInfoComponent } from './gauge-view-info/gauge-view-info.component';
import { LawViewInfoComponent } from './law-view-info/law-view-info.component';
import { ProcessInfoEditComponent } from './process-info-edit/process-info-edit.component';
import { FrmHistoryInfoViewComponent } from './frm-history-info-view/frm-history-info-view.component';

@NgModule({
    declarations: [
        ApprovalHistoryComponent,
        EnterPriseViewComponent,
        GaugeViewComponent,
        EtcViewComponent,
        ConsentDocViewComponent,
        SampleViewComponent,
        TestResultViewComponent,
        LawViewComponent,
        ChangeInfoViewComponent,
        ReissueViewComponent,
        IssueInfoViewComponent,
        FrmPlatformScalesPopupComponent,
        FrmSpringDialScalesPopupComponent,
        FrmElectronicPrecisionComponent,
        FrmWeightComponent,
        FrmProtableWhealLoadComponent,
        FrmGasmeterComponent,
        FrmWaterMeterComponent,
        FrmHotWaterMeterComponent,
        FrmOilmeterComponent,
        FrmFuelDispenserComponent,
        FrmLpgDispenserComponent,
        FrmGrarulerTanVolComponent,
        FrmGrarulerTanVolLolComponent,
        FrmHeatMeterComponent,
        FrmElecmeterComponent,
        FrmGrainMoistureComponent,
        FrmClinicalTempComponent,
        FrmSphygMonComponent,
        FrmElementsWaterComponent,
        ApprovalRequestComponent,
        GaugeEditViewComponent,
        SampleEditComponent,
        TestResultEditComponent,
        LawEditComponent,
        ChangeInfoEditComponent,
        ProcessInfoViewComponent,
        ProcessInfoEditComponent,
        FrmHistoryInfoViewComponent,
        ApprovalInformationComponent,
        GaugeViewInfoComponent,
        LawViewInfoComponent
    ],
    imports: [
        SharedModule,
        MatInputModule,
        MatFormFieldModule,
        NzDividerModule,
        NzTableModule,
        NzCheckboxModule,
        MatIconModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MomentDateModule,
        NzButtonModule,
        MatRadioModule,
        IconsProviderModule,
        NzDrawerModule,
        NzMessageModule,
        NzSpinModule,
        NzPaginationModule
    ],
    exports: [
        ApprovalHistoryComponent,
        EnterPriseViewComponent,
        GaugeViewComponent,
        EtcViewComponent,
        ConsentDocViewComponent,
        SampleViewComponent,
        TestResultViewComponent,
        LawViewComponent,
        ChangeInfoViewComponent,
        ReissueViewComponent,
        IssueInfoViewComponent,
        FrmPlatformScalesPopupComponent,
        FrmSpringDialScalesPopupComponent,
        ApprovalRequestComponent,
        GaugeEditViewComponent,
        SampleEditComponent,
        TestResultEditComponent,
        LawEditComponent,
        ChangeInfoEditComponent,
        ProcessInfoViewComponent,
        ProcessInfoEditComponent,
        FrmHistoryInfoViewComponent,
        ApprovalInformationComponent,
        GaugeViewInfoComponent,
        LawViewInfoComponent
    ],
    providers: [
        { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
    ]
})
export class FormConsentShareModule {
}
