import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { QrcodeScannerComponent } from '../../share/qrcode-scanner/qrcode-scanner.component';
import {MatSelectModule} from '@angular/material/select';
import { ZXingScannerModule } from '@zxing/ngx-scanner';


@NgModule({
    declarations: [
        QrcodeScannerComponent
    ],
    imports     : [
        SharedModule,
        MatSelectModule,
        ZXingScannerModule
    ],
    exports: [
        QrcodeScannerComponent
    ]
})
export class QrcodeScannerModule
{
}
