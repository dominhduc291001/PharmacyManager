import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {MatRadioModule} from '@angular/material/radio';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { IconsProviderModule } from 'app/core/icons/icons-provider.module';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { MY_DATE_FORMATS } from '../../test-manager/share/my-date-formats';
import { QrcodeEntrpsInfoViewComponent } from './qrcode-entrps-info-view/qrcode-entrps-info-view.component';
import { QrcodeAthrzDetailViewComponent } from './qrcode-athrz-detail-view/qrcode-athrz-detail-view.component';
import { QrcodeProcStateComponent } from './qrcode-proc-state/qrcode-proc-state.component';
@NgModule({
    declarations: [
        QrcodeEntrpsInfoViewComponent,
        QrcodeAthrzDetailViewComponent,
        QrcodeProcStateComponent
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
        QrcodeEntrpsInfoViewComponent,
        QrcodeAthrzDetailViewComponent,
        QrcodeProcStateComponent
    ],
    providers: [
        { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
    ]
})
export class QrcodeShareModule
{
}
