import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: import('../app/app.component').then((c) => c.AppComponent),
  },
  { path: '**', redirectTo: '' },
];
