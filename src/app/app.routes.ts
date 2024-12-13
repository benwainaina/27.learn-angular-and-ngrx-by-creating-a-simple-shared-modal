import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'profile',
    loadComponent: () =>
      import('../../projects/profile/src/lib/profile.component').then(
        (c) => c.ProfileComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('../../projects/cart/src/lib/cart.component').then(
        (c) => c.CartComponent
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'profile' },
];
