import { createReducer, on } from '@ngrx/store';
import { profileState } from './state';
import * as Actions from './actions';
import { produce } from 'immer';

export const profileReducers = createReducer(
  profileState,
  on(Actions.ActionUpdateProfile, (state, action) =>
    produce(state, (draft) => {
      draft.isUpdatingProfile = true;
      draft.updateProfileStatus = undefined;
    })
  ),
  on(Actions.ActionSetNewProfile, (state, action) =>
    produce(state, (draft) => {
      draft.user = action.updatedProfile;
    })
  ),
  on(Actions.ActionSetUpdateProfileStatus, (state, action) =>
    produce(state, (draft) => {
      draft.isUpdatingProfile = false;
      draft.updateProfileStatus = action.status;
    })
  )
);
