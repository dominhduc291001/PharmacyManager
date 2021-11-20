import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { PermissionComponent } from './permission.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMessageModule } from 'ng-zorro-antd/message';

const permissionRoutes: Route[] = [
    {
        path: '',
        component: PermissionComponent
    },
    {
        path: '**',
        component: PermissionComponent
    }
];

@NgModule({
    declarations: [
        PermissionComponent
    ],
    imports: [
        RouterModule.forChild(permissionRoutes),
        SharedModule,
        NzListModule,
        NzSelectModule,
        NzTableModule,
        NzBreadCrumbModule,
        NzMessageModule
    ]
})

export class PermissionModule { }
