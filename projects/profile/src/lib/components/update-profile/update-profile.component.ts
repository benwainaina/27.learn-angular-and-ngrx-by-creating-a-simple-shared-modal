import { Component, Input } from '@angular/core';
import { IDynamicKey } from '../../../../../shared/src/lib/interfaces';
import { dispatchActionUtility } from '../../../../../shared/src/lib/utilities/dispatchAction.utility';
import { ActionSetModalData } from '../../../../../shared/src/lib/state-manager/actions';
import {
  ActionSetUpdateProfileStatus,
  ActionUpdateProfile,
} from '../../state-manager/actions';
import { Observable } from 'rxjs';
import { TResponseStatus } from '../../../../../shared/src/lib/state-manager/interfaces';
import { selectDataUtility } from '../../../../../shared/src/lib/utilities/selectData.utility';
import {
  selectIsUpdatingProfile,
  selectUpdateProfileStatus,
} from '../../state-manager/selectors';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'lib-update-profile',
  standalone: true,
  imports: [AsyncPipe, NgTemplateOutlet],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.scss',
})
export class UpdateProfileComponent {
  private _dispatchActionUtility = dispatchActionUtility();
  private _selectDataUtility = selectDataUtility();

  @Input({ required: true })
  public payload!: IDynamicKey;

  public isUpdatingProfile$: Observable<TResponseStatus>;
  public updateProfileStatus$: Observable<TResponseStatus>;

  constructor() {
    this.updateProfileStatus$ = this._selectDataUtility(
      selectUpdateProfileStatus
    );
    this.isUpdatingProfile$ = this._selectDataUtility(selectIsUpdatingProfile);
  }

  ngOnInit(): void {
    this._resetAnyPreviousUpdateStatus();
  }

  private _resetAnyPreviousUpdateStatus(): void {
    this._dispatchActionUtility(ActionSetUpdateProfileStatus, {
      payload: { status: undefined },
    });
  }

  public updateProfile(): void {
    this._dispatchActionUtility(ActionUpdateProfile, { payload: this.payload });
  }

  public cancel(): void {
    this._dispatchActionUtility(ActionSetModalData, undefined);
  }
}
