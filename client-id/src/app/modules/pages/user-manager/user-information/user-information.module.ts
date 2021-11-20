import { UserInformationComponent } from './user-information.component';
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

const userInformationRoutes: Route[] = [
    {
        path: '',
        component: UserInformationComponent
    },

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    { path: 'change/:userId', loadChildren: () => import('app/modules/pages/user-manager/change-user/change-user.module').then(m => m.ChangeUserModule) }
];

@NgModule({
    declarations: [
        UserInformationComponent,
    ],
    imports: [
        RouterModule.forChild(userInformationRoutes),
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

export class UserInformationModule { }
