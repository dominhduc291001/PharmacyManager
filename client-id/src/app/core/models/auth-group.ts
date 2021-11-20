export class AuthGroup {
    no: number;
    groupCode: string;
    authGroupName: string;
    isUse: string;
    registDate: Date;

    constructor() {
        this.no = 0;
        this.groupCode = '';
        this.authGroupName = '';
        this.isUse = 'Y';
        this.registDate = new Date();
    }
}
