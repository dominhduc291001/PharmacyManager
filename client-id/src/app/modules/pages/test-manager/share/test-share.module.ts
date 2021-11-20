import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EntrpsInfoViewComponent } from './entrps-info-view/entrps-info-view.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { ProcessInfoRegistComponent } from './process-info-regist/process-info-regist.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MY_DATE_FORMATS } from './my-date-formats';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { HistoryInfoViewComponent } from './history-info-view/history-info-view.component';
import { AthrzDocViewComponent } from './athrz-doc-view/athrz-doc-view.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AthrzDetailResultComponent } from './athrz-detail-result/athrz-detail-result.component';
import { AthrzChartViewComponent } from './athrz-chart-view/athrz-chart-view.component';
import { AthrzDetailRegistComponent } from './athrz-detail-regist/athrz-detail-regist.component';
import { MatRadioModule } from '@angular/material/radio';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { IptVesslPopupComponent } from './inspection-popup/ipt-vessl-popup/ipt-vessl-popup.component';
import { IconsProviderModule } from 'app/core/icons/icons-provider.module';
import { IptPlatformPopupComponent } from './inspection-popup/ipt-platform-popup/ipt-platform-popup.component';
import { IptSpringDialScaleComponent } from './inspection-popup/ipt-spring-dial-scale/ipt-spring-dial-scale.component';
import { IptElectronicPrecisionComponent } from './inspection-popup/ipt-electronic-precision/ipt-electronic-precision.component';
import { IptWeightPopupComponent } from './inspection-popup/ipt-weight-popup/ipt-weight-popup.component';
import { IptGasmeterPopupComponent } from './inspection-popup/ipt-gasmeter-popup/ipt-gasmeter-popup.component';
import { IptWaterMeterPopupComponent } from './inspection-popup/ipt-water-meter-popup/ipt-water-meter-popup.component';
import { IptHotWaterMeterComponent } from './inspection-popup/ipt-hot-water-meter/ipt-hot-water-meter.component';
import { IptOilMeterPopupComponent } from './inspection-popup/ipt-oil-meter-popup/ipt-oil-meter-popup.component';
import { IptFueDispenserComponent } from './inspection-popup/ipt-fue-dispenser/ipt-fue-dispenser.component';
import { IptLgpDispenserComponent } from './inspection-popup/ipt-lgp-dispenser/ipt-lgp-dispenser.component';
import { IptGrarulerTanvoComponent } from './inspection-popup/ipt-graruler-tanvo/ipt-graruler-tanvo.component';
import { IptHeatMeterPopupComponent } from './inspection-popup/ipt-heat-meter-popup/ipt-heat-meter-popup.component';
import { IptElecmeterPopupComponent } from './inspection-popup/ipt-elecmeter-popup/ipt-elecmeter-popup.component';
import { IptElementsWaterPopupComponent } from './inspection-popup/ipt-elements-water-popup/ipt-elements-water-popup.component';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { ComviewAthrzInfoViewComponent } from './complete-view-share/comview-athrz-info-view/comview-athrz-info-view.component';
import { ComviewEntrpsInfoViewComponent } from './complete-view-share/comview-entrps-info-view/comview-entrps-info-view,component';
import { ComviewAthrzDocViewComponent } from './complete-view-share/comview-athrz-doc-view/comview-athrz-doc-view.component';
import { ComviewAthrzDetailViewComponent } from './complete-view-share/comview-athrz-detail-view/comview-athrz-detail-view.component';
import { ComviewAthrzChartViewComponent } from './complete-view-share/comview-athrz-chart-view/comview-athrz-chart-view.component';
import { ComviewProcStateComponent } from './complete-view-share/comview-proc-state/comview-proc-state.component';
import { ComviewConfmIssuRequestComponent } from './complete-view-share/comview-confm-issu-request/comview-confm-issu-request.component';
import { TestInfoViewComponent } from './test-info-view/test-info-view.component';
import { ApplicationInfoComponent } from './application-info/application-info.component';
import { EntrpsInfoEditComponent } from './entrps-info-edit/entrps-info-edit.component';
import { EntrprsSearchListComponent } from './entrprs-search-list/entrprs-search-list.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { InfoAthrzDetailRegistComponent } from './info-athrz-detail-regist/info-athrz-detail-regist.component';

@NgModule({
    declarations: [
        EntrpsInfoViewComponent,
        ProcessInfoRegistComponent,
        HistoryInfoViewComponent,
        AthrzDocViewComponent,
        AthrzDetailResultComponent,
        AthrzChartViewComponent,
        AthrzDetailRegistComponent,
        IptVesslPopupComponent,
        IptPlatformPopupComponent,
        IptSpringDialScaleComponent,
        IptElectronicPrecisionComponent,
        IptWeightPopupComponent,
        IptGasmeterPopupComponent,
        IptWaterMeterPopupComponent,
        IptHotWaterMeterComponent,
        IptOilMeterPopupComponent,
        IptFueDispenserComponent,
        IptLgpDispenserComponent,
        IptGrarulerTanvoComponent,
        IptHeatMeterPopupComponent,
        IptElecmeterPopupComponent,
        IptElementsWaterPopupComponent,
        ComviewAthrzInfoViewComponent,
        ComviewEntrpsInfoViewComponent,
        ComviewAthrzDocViewComponent,
        ComviewAthrzDetailViewComponent,
        ComviewAthrzChartViewComponent,
        ComviewProcStateComponent,
        ComviewConfmIssuRequestComponent,
        TestInfoViewComponent,
        ApplicationInfoComponent,
        EntrpsInfoEditComponent,
        EntrprsSearchListComponent,
        InfoAthrzDetailRegistComponent
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
        EntrpsInfoViewComponent,
        ProcessInfoRegistComponent,
        HistoryInfoViewComponent,
        AthrzDocViewComponent,
        AthrzDetailResultComponent,
        AthrzChartViewComponent,
        AthrzDetailRegistComponent,
        IptVesslPopupComponent,
        IptPlatformPopupComponent,
        IptSpringDialScaleComponent,
        IptElectronicPrecisionComponent,
        IptWeightPopupComponent,
        IptGasmeterPopupComponent,
        IptWaterMeterPopupComponent,
        IptHotWaterMeterComponent,
        IptOilMeterPopupComponent,
        IptFueDispenserComponent,
        IptLgpDispenserComponent,
        IptGrarulerTanvoComponent,
        IptHeatMeterPopupComponent,
        IptElecmeterPopupComponent,
        IptElementsWaterPopupComponent,
        ComviewAthrzInfoViewComponent,
        ComviewEntrpsInfoViewComponent,
        ComviewAthrzDocViewComponent,
        ComviewAthrzDetailViewComponent,
        ComviewAthrzChartViewComponent,
        ComviewProcStateComponent,
        ComviewConfmIssuRequestComponent,
        TestInfoViewComponent,
        ApplicationInfoComponent,
        EntrpsInfoEditComponent,
        EntrprsSearchListComponent,
        InfoAthrzDetailRegistComponent
    ],
    providers: [
        { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
    ]
})
export class TestShareModule {
}
