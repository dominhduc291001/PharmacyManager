import { ChangeUserComponent } from './change-user.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';
import { ReactiveFormsModule } from '@angular/forms';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMessageModule } from 'ng-zorro-antd/message';

const changeUserRoutes: Route[] = [
    {
        path: '',
        component: ChangeUserComponent
    },
    {
        path: '**',
        component: ChangeUserComponent
    }
];

@NgModule({
    declarations: [
        ChangeUserComponent
    ],
    imports: [
        RouterModule.forChild(changeUserRoutes),
        SharedModule,
        NzButtonModule,
        NzSelectModule,
        NzInputModule,
        NzTableModule,
        NzPaginationModule,
        NzSpinModule,
        NzModalModule,
        NzFormModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FuseCardModule,
        FuseAlertModule,
        ReactiveFormsModule,
        NzBreadCrumbModule,
        NzMessageModule
    ]
})

export class ChangeUserModule { }
