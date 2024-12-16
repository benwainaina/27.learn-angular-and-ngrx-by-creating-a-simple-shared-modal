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

/**
 * select updating profile status
 */
export const selectIsUpdatingProfile = createSelector(profileSlice, (slice) => {
  return slice.isUpdatingProfile;
});

/**
 * select response for updating the status
 */
export const selectUpdateProfileStatus = createSelector(
  profileSlice,
  (slice) => slice.updateProfileStatus
);
