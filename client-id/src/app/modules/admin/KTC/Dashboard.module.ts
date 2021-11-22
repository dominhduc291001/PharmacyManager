import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from 'app/shared/shared.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { DashboardComponent } from './Dashboard.component';

const dashboardRoutes: Route[] = [
    {
        path: '',
        component: DashboardComponent
    }
];

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        RouterModule.forChild(dashboardRoutes),
        ChartsModule,
        SharedModule,
        NzToolTipModule
    ]
})

export class DashboardModule {
}
