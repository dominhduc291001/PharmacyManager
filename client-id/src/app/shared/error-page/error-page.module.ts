import { ErrorPageComponent } from './error-page.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { NzButtonModule } from 'ng-zorro-antd/button';

const errorPageRoutes: Route[] = [
    {
        path: '',
        component: ErrorPageComponent
    }
];

@NgModule({
    declarations: [
        ErrorPageComponent
    ],
    imports: [
        RouterModule.forChild(errorPageRoutes),
        SharedModule,
        NzButtonModule
    ]
})

export class ErrorPageModule { }
