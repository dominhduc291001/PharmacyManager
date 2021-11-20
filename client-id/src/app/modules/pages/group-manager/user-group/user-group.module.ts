import { UserGroupComponent } from './user-group.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMessageModule } from 'ng-zorro-antd/message';

const userGroupRoutes: Route[] = [
    {
        path: '',
        component: UserGroupComponent
    },
    {
        path: '**',
        component: UserGroupComponent
    }
];

@NgModule({
    declarations: [
        UserGroupComponent
    ],
    imports: [
        RouterModule.forChild(userGroupRoutes),
        SharedModule,
        NzButtonModule,
        NzSelectModule,
        NzInputModule,
        NzTableModule,
        NzPaginationModule,
        NzBreadCrumbModule,
        NzMessageModule
    ]
})

export class UserGroupModule { }
