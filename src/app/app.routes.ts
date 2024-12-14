import { Routes } from '@angular/router';
import { ProfileEffects } from '../../projects/profile/src/lib/state-manager/effects';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { profileFeatureKey } from '../../projects/profile/src/lib/state-manager/interfaces';
import { profileReducers } from '../../projects/profile/src/lib/state-manager/reducers';

export const routes: Routes = [
  {
    path: 'profile',
    loadComponent: () =>
      import('../../projects/profile/src/lib/profile.component').then(
        (c) => c.ProfileComponent
      ),
    providers: [
      provideEffects([ProfileEffects]),
      provideState({
        name: profileFeatureKey,
        reducer: profileReducers,
      }),
    ],
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
