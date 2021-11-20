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
import { ConsentRequestStatusComponent } from './form-consent-request-status.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMessageModule } from 'ng-zorro-antd/message';

const completeStatusRoutes: Route[] = [
    {
        path     : '',
        component: ConsentRequestStatusComponent
    },
    {
        path: 'detail/:fomConfmSn',
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        loadChildren: () => import('../form-consent-request-view/form-consent-request-view.module').then(m => m.FormConsentRequestView)}
];

@NgModule({
    declarations: [
        ConsentRequestStatusComponent
    ],
    imports     : [
        RouterModule.forChild(completeStatusRoutes),
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
export class FormConsentRequestStatusModule
{
}
