/* eslint-disable @typescript-eslint/explicit-function-return-type */
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
import { ConsentInfoStatusComponent } from './form-consent-info-status.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMessageModule } from 'ng-zorro-antd/message';

const infoStatusRoutes: Route[] = [
    {
        path: '',
        component: ConsentInfoStatusComponent
    },
    {
        path: 'detail/:fomConfmSn',
        loadChildren: () => import('../form-consent-info-view/form-consent-info-view.module').then(m => m.FormConsentInfoView)
    }
];

@NgModule({
    declarations: [
        ConsentInfoStatusComponent
    ],
    imports: [
        RouterModule.forChild(infoStatusRoutes),
        SharedModule,
        NzButtonModule,
        NzDatePickerModule,
        NzSelectModule,
        NzInputModule,
        NzTableModule,
        NzPaginationModule,
        NzAlertModule,
        NzSpinModule,
        NzBreadCrumbModule,
        NzMessageModule
    ]
})

export class FormConsentInfoStatusModule {
}
