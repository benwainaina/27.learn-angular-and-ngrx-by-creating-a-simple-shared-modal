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
