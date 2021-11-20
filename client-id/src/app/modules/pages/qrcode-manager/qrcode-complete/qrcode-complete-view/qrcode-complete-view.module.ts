import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { TestShareModule } from 'app/modules/pages/test-manager/share/test-share.module';
import { QrcodeCompleteViewComponent } from './qrcode-complete-view.component';
import { QrcodeShareModule } from '../../share/qrcode-share.module';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMessageModule } from 'ng-zorro-antd/message';

const qrcodeCompleteViewRoutes: Route[] = [
    {
        path: '',
        component: QrcodeCompleteViewComponent
    },
    {
        path: '**',
        component: QrcodeCompleteViewComponent
    }
];

@NgModule({
    declarations: [
        QrcodeCompleteViewComponent
    ],
    imports: [
        RouterModule.forChild(qrcodeCompleteViewRoutes),
        SharedModule,
        TestShareModule,
        MatIconModule,
        NzStepsModule,
        NzDividerModule,
        NzButtonModule,
        NzSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        NzSpinModule,
        QrcodeShareModule,
        NzBreadCrumbModule,
        NzMessageModule
    ]
})

export class QrcodeCompleteViewModule {
}
