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
    { path: '', pathMatch: 'full', redirectTo: 'KTC' },

    // Redirect signed in user to the '/KTC'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'KTC' },

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
            { path: 'KTC', loadChildren: () => import('app/modules/admin/KTC/KTC.module').then(m => m.KTCModule) },
            { path: 'KTC/test/InspectionProcess/status', loadChildren: () => import('app/modules/pages/test-manager/test-process/test-status/test-status.module').then(m => m.TestStatusModule) },
            { path: 'KTC/test/InspectionProcess/work', loadChildren: () => import('app/modules/pages/test-manager/test-process/test-work/test-work.module').then(m => m.TestWorkModule) },
            { path: 'KTC/test/InspectionComplete/status', loadChildren: () => import('app/modules/pages/test-manager/test-complete/complete-status/complete-status.module').then(m => m.CompleteStatusModule) },
            { path: 'KTC/test/InspectionInfo/InfoList', loadChildren: () => import('app/modules/pages/test-manager/test-info/info-list/info-list.module').then(m => m.InfoListModule) },
            { path: 'KTC/QrManager/QrInfo/status', loadChildren: () => import('app/modules/pages/qrcode-manager/qrcode-info/qrcode-info-status/qrcode-info-status.module').then(m => m.QrcodeInfoStatusModule) },
            { path: 'KTC/QrManager/QrComplete/status', loadChildren: () => import('app/modules/pages/qrcode-manager/qrcode-complete/qrcode-complete-status/qrcode-complete-status.module').then(m => m.QrcodeCompleteStatusModule) },
            { path: 'KTC/QrManager/QrProgram/status', loadChildren: () => import('app/modules/pages/qrcode-manager/qrcode-program/qrcode-program-status/qrcode-program-status.module').then(m => m.QrcodeProgramStatusModule) },
            { path: 'KTC/FormConsent/FormConsentRequest/status', loadChildren: () => import('app/modules/pages/form-consent/form-consent-request/form-consent-request-status/form-consent-request-status.module').then(m => m.FormConsentRequestStatusModule) },
            { path: 'KTC/FormConsent/FormConsentComplete/status', loadChildren: () => import('app/modules/pages/form-consent/form-consent-complete/form-consent-complete-status/form-consent-complete-status.module').then(m => m.FormConsentCompleteStatusModule) },
            { path: 'KTC/FormConsent/FormConsentInfo/status', loadChildren: () => import('app/modules/pages/form-consent/form-consent-info/form-consent-info-status/form-consent-info-status.module').then(m => m.FormConsentInfoStatusModule) },
            // { path: 'KTC/group-manager/user-group', loadChildren: () => import('app/modules/pages/group-manager/user-group/user-group.module').then(m => m.UserGroupModule) },
            // { path: 'KTC/group-manager/user', loadChildren: () => import('app/modules/pages/group-manager/user/user.module').then(m => m.UserModule) },
            // { path: 'KTC/group-manager/permission', loadChildren: () => import('app/modules/pages/group-manager/permission/permission.module').then(m => m.PermissionModule) },
            // { path: 'KTC/user-manager/user-information', loadChildren: () => import('app/modules/pages/user-manager/user-information/user-information.module').then(m => m.UserInformationModule) },
            { path: '404', loadChildren: () => import('app/shared/error-page/error-page.module').then(m => m.ErrorPageModule) },
            // error page 404
            { path: '**', loadChildren: () => import('app/shared/error-page/error-page.module').then(m => m.ErrorPageModule) }
        ]
    }
];
