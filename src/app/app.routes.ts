import { Routes } from '@angular/router';
import { authenticatedGuard } from './authenticated.guard';
import { adminGuard } from './admin.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((c) => c.ContactComponent),
  },
  {
    path: 'report',
    canActivate: [authenticatedGuard, adminGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./report/report.component').then((c) => c.ReportComponent),
      },
      {
        path: ':year',
        loadComponent: () =>
          import('./report/report.component').then((c) => c.ReportComponent),
      },
      {
        path: ':year/:country',
        loadComponent: () =>
          import('./report/report.component').then((c) => c.ReportComponent),
      },
    ],
  },
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('./unauthorized/unauthorized.component').then(
        (c) => c.UnauthorizedComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];
