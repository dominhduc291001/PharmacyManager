/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'test',
        title   : '검정관리',
        type    : 'collapsable',
        icon    : 'heroicons_outline:shield-check',
        children: [
            {
                id   : 'test.process',
                title: '접수처리',
                type : 'collapsable',
                icon : 'heroicons_outline:document-text',
                children: [
                    {
                        id   : 'test.process.status',
                        title: '전체현황',
                        type : 'basic',
                        link : 'KTC/test/InspectionProcess/status'
                    },
                    {
                        id   : 'test.process.work',
                        title: '검정업무 조회',
                        type : 'basic',
                        link : 'KTC/test/InspectionProcess/work'
                    }
                ]
            },
            {
                id      : 'test.history',
                title   : '완료내역',
                type    : 'collapsable',
                icon    : 'heroicons_outline:document-search',
                children: [
                    {
                        id   : 'test.history.status',
                        title: '전체현황',
                        type : 'basic',
                        link : 'KTC/test/InspectionComplete/status'
                    }
                ]
            },
            {
                id      : 'test.info',
                title   : '검정정보',
                type    : 'basic',
                icon    : 'heroicons_outline:document-report',
                link    : 'KTC/test/InspectionInfo/InfoList'
            }
        ]
    },
    {
        id      : 'qrcode',
        title   : 'QR코드 관리',
        type    : 'collapsable',
        icon    : 'heroicons_outline:qrcode',
        children: [
            {
                id      : 'qrcode.inquiry',
                title   : 'QR코드 조회',
                type    : 'basic',
                icon    : 'heroicons_outline:receipt-refund',
                link    : 'KTC/QrManager/QrInfo/status'
            },
            {
                id      : 'qrcode.history',
                title   : 'QR코드 이력조회',
                type    : 'basic',
                icon    : 'heroicons_outline:document-search',
                link    : 'KTC/QrManager/QrComplete/status'
            },
            {
                id      : 'qrcode.print',
                title   : '인쇄프로그램 인증관리​',
                type    : 'basic',
                icon    : 'heroicons_outline:printer',
                link    : 'KTC/QrManager/QrProgram/status'
            }
        ],
    },
    {
        id      : 'info',
        title   : '형식승인 정보조회',
        type    : 'collapsable',
        icon    : 'heroicons_outline:archive',
        children: [
            {
                id   : 'info.process',
                title: '접수처리',
                type : 'collapsable',
                icon : 'heroicons_outline:clipboard-list',
                children: [
                    {
                        id   : 'info.process.status',
                        title: '전체현황',
                        type : 'basic',
                        link : 'KTC/FormConsent/FormConsentRequest/status'
                    }
                ]
            },
            {
                id      : 'info.history',
                title   : '완료내역',
                type    : 'collapsable',
                icon    : 'heroicons_outline:clipboard-copy',
                children: [
                    {
                        id   : 'info.history.status',
                        title: '전체현황',
                        type : 'basic',
                        link : 'KTC/FormConsent/FormConsentComplete/status'
                    }
                ]
            },
            {
                id      : 'info.info',
                title   : '형식승인정보',
                type    : 'basic',
                icon    : 'heroicons_outline:clipboard-check',
                link    : 'KTC/FormConsent/FormConsentInfo/status'
            }
        ]
    },
    {
        id      : 'user',
        title   : '사용자 정보조회',
        type    : 'collapsable',
        icon    : 'heroicons_outline:user',
        children: [
            {
                id      : 'user.inquiry',
                title   : '개인정보변경',
                type    : 'basic',
                icon    : 'heroicons_outline:user',
                link    : 'KTC/user-manager/user-information'
            }
        ],
    },
    {
        id      : 'group',
        title   : '시스템 관리',
        type    : 'collapsable',
        icon    : 'heroicons_outline:user-group',
        children: [
            {
                id      : 'group.inquiry',
                title   : '사용자그룹조회',
                type    : 'basic',
                icon    : 'heroicons_outline:users',
                link    : 'KTC/group-manager/user-group'
            },
            {
                id      : 'group.byuser',
                title   : '그룹별사용자조회',
                type    : 'basic',
                icon    : 'heroicons_outline:user-group',
                link    : 'KTC/group-manager/user'
            },
            {
                id      : 'group.auth',
                title   : '권한조회',
                type    : 'basic',
                icon    : 'heroicons_outline:adjustments',
                link    : 'KTC/group-manager/permission'
            }
        ],
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id      : 'home',
        title   : '집',
        tooltip : '집',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : 'KTC',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'test',
        title   : '검정관리',
        tooltip : '검정관리',
        type    : 'aside',
        icon    : 'heroicons_outline:shield-check',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'qrcode',
        title   : 'QR코드 관리',
        tooltip : 'QR코드 관리',
        type    : 'aside',
        icon    : 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'info',
        title   : '형식승인 정보조회',
        tooltip : '형식승인 정보조회',
        type    : 'aside',
        icon    : 'heroicons_outline:archive',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user',
        title   : '사용자 정보조회',
        tooltip : '사용자 정보조회',
        type    : 'basic',
        icon    : 'heroicons_outline:user',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'group',
        title   : '시스템관리',
        tooltip : '시스템관리',
        type    : 'aside',
        icon    : 'heroicons_outline:cog',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [

];
export const horizontalNavigation: FuseNavigationItem[] = [

];
