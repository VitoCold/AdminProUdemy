import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { titulo: 'DashBoard' }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: { titulo: 'Progress' }
      },
      {
        path: 'promesas',
        component: PromesasComponent,
        data: { titulo: 'Promesas' }
      },
      {
        path: 'graficas1',
        component: Graficas1Component,
        data: { titulo: 'Gráficas' }
      },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs' } },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: { titulo: 'Ajustes' }
      },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];

export const PagesRoutingModule = RouterModule.forChild(pagesRoutes);
