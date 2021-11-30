import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
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
import { NzModalModule } from 'ng-zorro-antd/modal';
import { SharedModule } from 'app/shared/shared.module';
import { QuanLyXuatHangComponent } from './quan-ly-xuat-hang.component';

const quanLyXuatHangRoutes: Route[] = [
    {
        path: '',
        component: QuanLyXuatHangComponent
    }
];

@NgModule({
    declarations: [
        QuanLyXuatHangComponent
    ],
    imports: [
        RouterModule.forChild(quanLyXuatHangRoutes),
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
        NzMessageModule,
        NzModalModule,
        NzDatePickerModule,
    ]
})

export class QuanLyXuatHangModule {
}
