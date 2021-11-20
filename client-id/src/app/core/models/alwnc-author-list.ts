export class AlwncAuthorList {
    authorGroupCode: string;
    menuCode: number;
    readAuthYn: string;
    createAuthYn: string;
    updateAuthYn: string;
    deleteAuthYn: string;
    printAuthYn: string;
    manageAuthYn: string;
    menuNm: string;
    menuTyCode: string;
    useAt: string;
    id: string;
    pid: string;
    idItem: number[];
    use: string;
    icon: string;

    constructor() {
        this.authorGroupCode = '';
        this.menuCode = 0;
        this.readAuthYn = 'N';
        this.createAuthYn = 'N';
        this.updateAuthYn = 'N';
        this.deleteAuthYn = 'N';
        this.printAuthYn = 'N';
        this.manageAuthYn = 'N';
        this.menuNm = '';
        this.menuTyCode = '';
        this.useAt = '';
        this.id = '';
        this.pid = '';
        this.idItem = [];
        this.use = 'N';
        this.icon = 'R';
    }
}
