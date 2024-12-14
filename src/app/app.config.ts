import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { sharedFeatureKey } from '../../projects/shared/src/lib/state-manager/interfaces';
import { sharedReducers } from '../../projects/shared/src/lib/state-manager/reducers';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    provideEffects([]),
    provideStore({
      [sharedFeatureKey]: sharedReducers,
    }),
  ],
};
