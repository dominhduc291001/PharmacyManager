import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { QrcodeInfoStatusComponent } from './qrcode-info-status.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { QrcodeScannerModule } from '../../share/qrcode-scanner/qrcode-scanner.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMessageModule } from 'ng-zorro-antd/message';

const infoListRoutes: Route[] = [
    {
        path: '',
        component: QrcodeInfoStatusComponent
    },
    {
        path: 'view/:athrzSn',
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        loadChildren: () => import('../qrcode-info-view/qrcode-info-view.module').then(m => m.QrcodeInfoViewModule)
    },
    {
        path: 'edit/:athrzSn',
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        loadChildren: () => import('../../../test-manager/test-info/info-edit/info-edit.module').then(m => m.InfoEditModule)
    }
];

@NgModule({
    declarations: [
        QrcodeInfoStatusComponent
    ],
    imports: [
        RouterModule.forChild(infoListRoutes),
        SharedModule,
        NzButtonModule,
        NzDatePickerModule,
        NzSelectModule,
        NzInputModule,
        NzTableModule,
        NzPaginationModule,
        NzAlertModule,
        NzModalModule,
        MatSelectModule,
        MatFormFieldModule,
        QrcodeScannerModule,
        NzSpinModule,
        NzBreadCrumbModule,
        NzMessageModule
    ]
})

export class QrcodeInfoStatusModule {
}
