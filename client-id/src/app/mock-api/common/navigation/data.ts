/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'product',
        title: 'Quản lý thuốc',
        type: 'basic',
        icon: 'heroicons_outline:shield-check',
        link: '/QuanLyThuoc'
    },
    {
        id: 'user',
        title: 'Quản lý người dùng',
        type: 'basic',
        icon: 'heroicons_outline:shield-check',
        link: '/QuanLyNguoiDung'
    },
    {
        id: 'customer',
        title: 'Quản lý khách hàng',
        tooltip: 'Quản lý khách hàng',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/QuanLyKhachHang'
    }
    // {
    //     id      : 'qrcode',
    //     title   : 'QR코드 관리',
    //     type    : 'collapsable',
    //     icon    : 'heroicons_outline:qrcode'
    // },
    // {
    //     id      : 'info',
    //     title   : '형식승인 정보조회',
    //     type    : 'collapsable',
    //     icon    : 'heroicons_outline:archive'
    // },
    // {
    //     id      : 'user',
    //     title   : '사용자 정보조회',
    //     type    : 'collapsable',
    //     icon    : 'heroicons_outline:user'
    // },
    // {
    //     id      : 'group',
    //     title   : '시스템 관리',
    //     type    : 'collapsable',
    //     icon    : 'heroicons_outline:user-group'
    // }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'product',
        title: 'Quản lý thuốc',
        tooltip: 'Quản lý thuốc',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/QuanLyThuoc'
    },
    {
        id: 'user',
        title: 'Quản lý người dùng',
        tooltip: 'Quản lý người dùng',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/QuanLyNguoiDung'
    },
    {
        id: 'customer',
        title: 'Quản lý khách hàng',
        tooltip: 'Quản lý khách hàng',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/QuanLyKhachHang'
    }
    // {
    //     id      : 'test',
    //     title   : '검정관리',
    //     tooltip : '검정관리',
    //     type    : 'aside',
    //     icon    : 'heroicons_outline:shield-check'
    // },
    // {
    //     id      : 'qrcode',
    //     title   : 'QR코드 관리',
    //     tooltip : 'QR코드 관리',
    //     type    : 'aside',
    //     icon    : 'heroicons_outline:qrcode'
    // },
    // {
    //     id      : 'info',
    //     title   : '형식승인 정보조회',
    //     tooltip : '형식승인 정보조회',
    //     type    : 'aside',
    //     icon    : 'heroicons_outline:archive'
    // },
    // {
    //     id      : 'user',
    //     title   : '사용자 정보조회',
    //     tooltip : '사용자 정보조회',
    //     type    : 'basic',
    //     icon    : 'heroicons_outline:user'
    // },
    // {
    //     id      : 'group',
    //     title   : '시스템관리',
    //     tooltip : '시스템관리',
    //     type    : 'aside',
    //     icon    : 'heroicons_outline:cog'
    // }
];
export const futuristicNavigation: FuseNavigationItem[] = [

];
export const horizontalNavigation: FuseNavigationItem[] = [

];
