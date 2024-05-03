import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { UnauthGuard } from './guards/unauth.guard';
import { LoginComponent } from './components/login/login.component';

export const AppRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'security',
        loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule),
      },
      {
        path: 'genero',
        loadChildren: () => import('./modules/genero/genero.module').then(m => m.GeneroModule),
      },
      {
        path: 'faqs',
        loadChildren: () => import('./modules/faq/faq.module').then(m => m.FaqModule),
      },
      {
        path: 'ofertas',
        loadChildren: () => import('./modules/offer/offer.module').then(m => m.OfferModule),
      },
      {
        path: 'plan',
        loadChildren: () => import('./modules/plan/plan.module').then(m => m.PlanModule),
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];
