import { createAction, props } from '@ngrx/store';
import * as ActionNames from './actionNames';
import { IDynamicKey } from '../../../../shared/src/lib/interfaces';
import { IUser } from './interfaces';
import { TResponseStatus } from '../../../../shared/src/lib/state-manager/interfaces';

export const ActionUpdateProfile = createAction(
  ActionNames.ActionNameUpdateProfile,
  props<{ payload: IDynamicKey }>()
);

export const ActionSetNewProfile = createAction(
  ActionNames.ActionNameSetNewProfile,
  props<{ updatedProfile: IUser }>()
);

export const ActionSetUpdateProfileStatus = createAction(
  ActionNames.ActionNameSetUpdateProfileStatus,
  props<{ status: TResponseStatus }>()
);

export const ActionDeleteProfile = createAction(
  ActionNames.ActionNameDeleteProfile
);

export const ActionSetDeleteProfileStatus = createAction(
  ActionNames.ActionNameSetDeleteProfileStatus,
  props<{ status: TResponseStatus }>()
);
