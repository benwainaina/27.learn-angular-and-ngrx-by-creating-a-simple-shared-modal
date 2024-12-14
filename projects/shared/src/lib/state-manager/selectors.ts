import { createSelector } from '@ngrx/store';
import { IAppState } from '../interfaces';

const sharedSlice = (appState: IAppState) => appState.shared;

/**
 * select modal data
 */
export const selectModalData = createSelector(
  sharedSlice,
  (slice) => slice.modalData
);

/**
 * select the user token
 */
export const selectUserToken = createSelector(
  sharedSlice,
  (slice) => slice.userToken
);
