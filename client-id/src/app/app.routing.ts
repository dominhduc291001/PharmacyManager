/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    { path: '', pathMatch: 'full', redirectTo: 'Dashboard' },

    // Redirect signed in user to the '/KTC'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'Dashboard' },

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule) }
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule) }]
    },

    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            // { path: 'Dashboard', loadChildren: () => import('app/modules/admin/KTC/Dashboard.module').then(m => m.DashboardModule) },
            { path: 'QuanLyThuoc', loadChildren: () => import('app/modules/pages/quan-ly-thuoc/quan-ly-thuoc.module').then(m => m.QuanLyThuocModule) },
            { path: 'QuanLyXuatHang', loadChildren: () => import('app/modules/pages/quan-ly-xuat-hang/quan-ly-xuat-hang.module').then(m => m.QuanLyXuatHangModule) },
            { path: 'QuanLyNhapHang', loadChildren: () => import('app/modules/pages/quan-ly-nhap-hang/quan-ly-nhap-hang.module').then(m => m.QuanLyNhapHangModule) },
            { path: 'QuanLyNguoiDung', loadChildren: () => import('app/modules/pages/quan-ly-nguoi-dung/quan-ly-nguoi-dung.module').then(m => m.QuanLyNguoiDungModule) },
            { path: 'QuanLyKhachHang', loadChildren: () => import('app/modules/pages/quan-ly-khach-hang/quan-ly-khach-hang.module').then(m => m.QuanLyKhachHangModule) },
            { path: 'QuanLyNhaCungCap', loadChildren: () => import('app/modules/pages/quan-ly-nha-cung-cap/quan-ly-nha-cung-cap.module').then(m => m.QuanLyNhaCungCapModule) },
            { path: '404', loadChildren: () => import('app/shared/error-page/error-page.module').then(m => m.ErrorPageModule) },
            // error page 404
            { path: '**', loadChildren: () => import('app/shared/error-page/error-page.module').then(m => m.ErrorPageModule) }
        ]
    }
];
