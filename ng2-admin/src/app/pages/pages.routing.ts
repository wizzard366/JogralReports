import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes
import { AuthGuard } from './services/oauth/auth.guard.component';
// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'livedashboard',
    loadChildren: 'app/pages/sellers/live_dashboard/liveDashboard.module#LiveDashboardModule'
  },
  {
    path: 'pages',
    component: Pages,
    
    children: [
      { path: '', redirectTo: 'reportes', pathMatch: 'full' },
      // { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'precios', loadChildren: 'app/pages/precios/precios.module#PreciosModule', canActivate: [AuthGuard]},
      { path: 'reportes', loadChildren: 'app/pages/reports/reports.module#ReportsModule', canActivate: [AuthGuard]},
      { path: 'laboratorios', loadChildren: 'app/pages/laboratories/laboratories.module#LaboratoriesModule', canActivate: [AuthGuard]},
      { path: 'vendedores', loadChildren: 'app/pages/sellers/sellers.module#SellersModule', canActivate: [AuthGuard]},
      { path: 'clientes', loadChildren: 'app/pages/clients/clients.module#ClientsModule', canActivate: [AuthGuard]},
/*      { path: 'components', loadChildren: 'app/pages/components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: 'app/pages/forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule' }*/
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
