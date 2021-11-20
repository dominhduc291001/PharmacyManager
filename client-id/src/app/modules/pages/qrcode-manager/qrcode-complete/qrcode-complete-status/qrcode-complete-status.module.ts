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
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { QrcodeCompleteStatusComponent } from './qrcode-complete-status.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { QrcodeScannerModule } from '../../share/qrcode-scanner/qrcode-scanner.module';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMessageModule } from 'ng-zorro-antd/message';

const qrcodeCompleteStatusRoutes: Route[] = [
    {
        path: '',
        component: QrcodeCompleteStatusComponent
    },
    {
        path: 'view/:athrzSn',
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        loadChildren: () => import('../qrcode-complete-view/qrcode-complete-view.module').then(m => m.QrcodeCompleteViewModule)
    }
];

@NgModule({
    declarations: [
        QrcodeCompleteStatusComponent
    ],
    imports: [
        RouterModule.forChild(qrcodeCompleteStatusRoutes),
        SharedModule,
        NzButtonModule,
        NzDatePickerModule,
        NzSelectModule,
        NzInputModule,
        NzTableModule,
        NzPaginationModule,
        NzAlertModule,
        NzSpinModule,
        NzModalModule,
        QrcodeScannerModule,
        NzBreadCrumbModule,
        NzMessageModule
    ]
})

export class QrcodeCompleteStatusModule {
}
