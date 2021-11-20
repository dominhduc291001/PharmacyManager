export class UserEmplRequest {
    startIndex: number;
    endIndex: number;
    searchType: string;
    searchText: any;
    searchDeptNm: string;
    searchDeptCode: any;
    searchUseAt: any;

    constructor() {
        this.startIndex = 1;
        this.endIndex = 10;
        this.searchType = null;
        this.searchText = null;
        this.searchDeptNm = null;
        this.searchDeptCode = null;
        this.searchUseAt = null;
    }
}
