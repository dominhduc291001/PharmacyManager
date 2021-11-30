export class NhapHangRequest {
    impId: string;
    impDate: string;
    impNote: string;
    userId: string;
    supId: string;
    proId: string;
    quantity: number;

    constructor() {
        this.impId = null;
        this.impDate = null;
        this.impNote = null;
        this.userId = null;
        this.supId = null;
        this.proId = null;
        this.quantity = null;
    }
}
