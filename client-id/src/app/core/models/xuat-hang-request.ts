export class XuatHangRequest {
    expId: string;
    expDate: Date;
    expNote: string;
    cusId: string;
    userId: string;
    proId: string;
    quantity: number;
    expPrice: number;

    constructor() {
        this.expId = null;
        this.expDate = null;
        this.expNote = null;
        this.cusId = null;
        this.userId = null;
        this.proId = null;
        this.quantity = null;
        this.expPrice = null;
    }
}
