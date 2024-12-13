import { createAction, props } from '@ngrx/store';
import * as ActionNames from './actionNames';
import { IModalData } from './interfaces';

/**
 * an action to set the modal data
 */
export const ActionSetModalData = createAction(
  ActionNames.ActionNameSetModalData,
  props<{ data?: IModalData }>()
);
