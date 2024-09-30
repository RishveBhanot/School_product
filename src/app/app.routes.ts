import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { MainLayoutComponent } from './components/shared/main-layout/main-layout.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: "full" },
    {
        path: 'login',
        loadComponent: () => import('./components/login/login.component').then(c => c.LoginComponent)
    },
    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [authGuard],
        children: [
          { path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent) },
          { path: 'students', loadChildren: () => import('./components/students/students.component').then(m => m.StudentsComponent) },
        //   { path: 'settings', loadComponent: () => import('./settings.component').then(m => m.SettingsComponent) },
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
      },
];
