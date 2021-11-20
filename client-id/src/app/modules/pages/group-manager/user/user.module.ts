import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { UserComponent } from './user.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMessageModule } from 'ng-zorro-antd/message';

const userRoutes: Route[] = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: '**',
        component: UserComponent
    }
];

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        RouterModule.forChild(userRoutes),
        SharedModule,
        NzButtonModule,
        NzSelectModule,
        NzInputModule,
        NzTableModule,
        NzPaginationModule,
        NzGridModule,
        NzListModule,
        NzBreadCrumbModule,
        NzMessageModule
    ]
})

export class UserModule { }
