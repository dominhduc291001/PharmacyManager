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
import { InfoListComponent } from './info-list.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMessageModule } from 'ng-zorro-antd/message';

const infoListRoutes: Route[] = [
    {
        path: '',
        component: InfoListComponent
    },
    {
        path: 'view/:athrzSn',
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        loadChildren: () => import('../info-view/info-view.module').then(m => m.InfoViewModule)
    },
    {
        path: 'edit/:athrzSn',
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        loadChildren: () => import('../info-edit/info-edit.module').then(m => m.InfoEditModule)
    }
];

@NgModule({
    declarations: [
        InfoListComponent
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
        NzBreadCrumbModule,
        NzMessageModule
    ]
})

export class InfoListModule {
}
