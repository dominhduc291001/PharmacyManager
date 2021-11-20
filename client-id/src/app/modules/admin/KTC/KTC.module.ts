import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { KTCComponent } from 'app/modules/admin/KTC/KTC.component';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from 'app/shared/shared.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

const ktcRoutes: Route[] = [
    {
        path: '',
        component: KTCComponent
    }
];

@NgModule({
    declarations: [
        KTCComponent
    ],
    imports: [
        RouterModule.forChild(ktcRoutes),
        ChartsModule,
        SharedModule,
        NzToolTipModule
    ]
})

export class KTCModule {
}
