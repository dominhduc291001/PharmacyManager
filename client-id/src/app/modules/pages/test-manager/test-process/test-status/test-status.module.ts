import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { TestStatusComponent } from './test-status.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMessageModule } from 'ng-zorro-antd/message';

const testStatusRoutes: Route[] = [
    {
        path: '',
        component: TestStatusComponent
    },
    {
        path: 'detail/:athrzSn/:subViewName',
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        loadChildren: () => import('../process-status-detail/process-status-detail.module').then(m => m.ProcessStatusDetailModule)
    }
];

@NgModule({
    declarations: [
        TestStatusComponent
    ],
    imports: [
        RouterModule.forChild(testStatusRoutes),
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

export class TestStatusModule {
}
