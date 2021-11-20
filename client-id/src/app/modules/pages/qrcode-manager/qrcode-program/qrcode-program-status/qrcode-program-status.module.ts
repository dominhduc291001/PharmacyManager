import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { QrcodeProgramStatusComponent } from './qrcode-program-status.component';
import { QrcodeProgramEditComponent } from '../qrcode-program-edit/qrcode-program-edit.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

const infoListRoutes: Route[] = [
    {
        path: '',
        component: QrcodeProgramStatusComponent
    },
    {
        path: '**',
        component: QrcodeProgramStatusComponent
    },
];

const dateFormats = {
    parse: {
        dateInput: ['YYYY-MM-DD']
    },
    display: {
        dateInput: 'YYYY-MM-DD',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

@NgModule({
    declarations: [
        QrcodeProgramStatusComponent,
        QrcodeProgramEditComponent
    ],
    imports: [
        RouterModule.forChild(infoListRoutes),
        SharedModule,
        NzButtonModule,
        NzDatePickerModule,
        NzSelectModule,
        NzInputModule,
        NzTableModule,
        NzPaginationModule,
        NzDrawerModule,
        NzMessageModule,
        NzSpinModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatFormFieldModule,
        MatRadioModule,
        NzBreadCrumbModule
    ],
    providers: [
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        { provide: MAT_DATE_FORMATS, useValue: dateFormats }
    ]
})

export class QrcodeProgramStatusModule {
}
