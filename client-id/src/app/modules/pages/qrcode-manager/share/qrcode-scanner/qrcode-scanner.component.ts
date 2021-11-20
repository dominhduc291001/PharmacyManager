/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
    selector: 'qrcode-scanner',
    templateUrl: './qrcode-scanner.component.html',
    styleUrls: ['./qrcode-scanner.component.css']
})
export class QrcodeScannerComponent {
    availableDevices: MediaDeviceInfo[];
    deviceCurrent: MediaDeviceInfo;
    deviceSelected: string;
    qrResult: string = '';
    formatsEnabled: BarcodeFormat[] = [
        BarcodeFormat.CODE_128,
        BarcodeFormat.DATA_MATRIX,
        BarcodeFormat.EAN_13,
        BarcodeFormat.QR_CODE,
    ];
    hasDevices: boolean;
    hasPermission: boolean;

    constructor(private modal: NzModalRef) { }

    onCamerasFound(devices: MediaDeviceInfo[]): void {
        if (devices !== null) {
            this.availableDevices = devices;
            this.hasDevices = Boolean(devices && devices.length);
        }
    }

    onCodeResult(resultString: string) {
        if (resultString !== null) {
            this.qrResult = resultString;
            this.destroyModal();
        }
    }

    onDeviceSelectChange(selected: string) {
        if (selected !== null) {
            const selectedStr = selected || '';
            if (this.deviceSelected === selectedStr) { return; }
            this.deviceSelected = selectedStr;
            const device = this.availableDevices.find(x => x.deviceId === selected);
            this.deviceCurrent = device || undefined;
        }
    }

    onDeviceChange(device: MediaDeviceInfo) {
        if (device !== null) {
            const selectedStr = device?.deviceId || '';
            if (this.deviceSelected === selectedStr) { return; }
            this.deviceSelected = selectedStr;
            this.deviceCurrent = device || undefined;
        }
    }

    onHasPermission(has: boolean) {
        if (has !== null) {
            this.hasPermission = has;
        }
    }

    destroyModal(): void {
        this.modal.destroy(this.qrResult);
    }
}
