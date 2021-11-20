import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { TestShareModule } from '../../share/test-share.module';
import { MatIconModule } from '@angular/material/icon';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { InfoViewComponent } from './info-view.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMessageModule } from 'ng-zorro-antd/message';

const infoViewRoutes: Route[] = [
    {
        path: '',
        component: InfoViewComponent
    },
    {
        path: '**',
        component: InfoViewComponent
    }
];

@NgModule({
    declarations: [
        InfoViewComponent,
    ],
    imports: [
        RouterModule.forChild(infoViewRoutes),
        SharedModule,
        TestShareModule,
        MatIconModule,
        NzStepsModule,
        NzDividerModule,
        NzButtonModule,
        NzSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        NzSpinModule,
        NzBreadCrumbModule,
        NzMessageModule
    ]
})

export class InfoViewModule {
}
