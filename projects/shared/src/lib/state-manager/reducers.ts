import { createReducer, on } from '@ngrx/store';
import { sharedState } from './state';
import * as Actions from './actions';
import { produce } from 'immer';

export const sharedReducers = createReducer(
  sharedState,
  on(Actions.ActionSetModalData, (state, action) =>
    produce(state, (draft) => {
      draft.modalData = action.data;
    })
  )
);
