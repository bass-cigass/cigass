import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SamplerUserLayoutComponent } from './layouts/sampler-user-layout/sampler-user-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const AppRoutes: Routes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
//  {
//   path: 'dashboard',
//   component: DashboardComponent,
//  },
   {
    path: 'adminPlatform',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  },
  {
    path: 'adminSampler',
    component: SamplerUserLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('app/layouts/sampler-user-layout/sampler-user-layout.module').then(m => m.SamplerUserLayoutModule)
      }
    ]
  },
   {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
   },
  //  {
  //   path: '**',
  //   redirectTo: 'login'
  // }
  // , {
  //   path: '',
  //   component:LoginComponent,
  //   redirectTo: 'login'
  // }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true,
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }