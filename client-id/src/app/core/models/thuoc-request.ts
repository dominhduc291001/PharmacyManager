export class ThuocRequest {
    proId: string;
    proName: string;
    proNo: string;
    proProducer: string;
    proPack: string;
    proUnit: string;
    proPrice: number;
    typeId: number;

    constructor() {
        this.proId = null;
        this.proName = null;
        this.proNo = null;
        this.proProducer = null;
        this.proPack = null;
        this.proUnit = null;
        this.proPrice = 0;
        this.typeId = 0;
    }
}
