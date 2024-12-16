import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatLatestFrom } from '@ngrx/operators';
import * as ProfileActions from './actions';
import { selectDataUtility } from '../../../../shared/src/lib/utilities/selectData.utility';
import { selectUserToken } from '../../../../shared/src/lib/state-manager/selectors';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ApiService } from '../../../../shared/src/lib/api.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileEffects {
  private _actions$: Actions = inject(Actions);
  private _selectDataUtility = selectDataUtility();
  private _apiService: ApiService = inject(ApiService);

  /**
   * handler for updating profile in the server and receiving a response back
   */
  updateProfile$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ProfileActions.ActionUpdateProfile),
      concatLatestFrom(() => this._selectDataUtility(selectUserToken)),
      mergeMap(([action, token]) =>
        this._apiService
          .post('update_profile', { ...action.payload, token })
          .pipe(
            map(() =>
              ProfileActions.ActionSetNewProfile({
                updatedProfile: {
                  fullname: action.payload['fullname'],
                  email: action.payload['email'],
                },
              })
            ),
            catchError((err) =>
              of(
                ProfileActions.ActionSetUpdateProfileStatus({ status: 'error' })
              )
            )
          )
      )
    )
  );

  /**
   * when we have dispatched the action for setting the new profile data in the store,
   * we can mark here that the status was a success
   */
  onSetNewProfileData$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ProfileActions.ActionSetNewProfile),
      map(() =>
        ProfileActions.ActionSetUpdateProfileStatus({ status: 'success' })
      )
    )
  );

  /**
   * handler for deleting profile
   */
  deleteProfile$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ProfileActions.ActionDeleteProfile),
      concatLatestFrom(() => this._selectDataUtility(selectUserToken)),
      mergeMap(([_, userToken]) =>
        this._apiService.post('delete', { userToken }).pipe(
          map(() =>
            ProfileActions.ActionSetDeleteProfileStatus({ status: 'success' })
          ),
          catchError(() =>
            of(ProfileActions.ActionSetDeleteProfileStatus({ status: 'error' }))
          )
        )
      )
    )
  );
}
