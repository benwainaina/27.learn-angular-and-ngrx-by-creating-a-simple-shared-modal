import { createSelector } from '@ngrx/store';
import { IAppState } from '../../../../shared/src/lib/interfaces';

const profileSlice = (appState: IAppState) => appState.profile;

/**
 * select user details
 */
export const selectUserDetails = createSelector(
  profileSlice,
  (slice) => slice.user
);
