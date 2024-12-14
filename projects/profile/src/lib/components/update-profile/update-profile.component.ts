import { Component, Input } from '@angular/core';
import { IDynamicKey } from '../../../../../shared/src/lib/interfaces';
import { dispatchActionUtility } from '../../../../../shared/src/lib/utilities/dispatchAction.utility';
import { ActionSetModalData } from '../../../../../shared/src/lib/state-manager/actions';
import { ActionUpdateProfile } from '../../state-manager/actions';

@Component({
  selector: 'lib-update-profile',
  standalone: true,
  imports: [],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.scss',
})
export class UpdateProfileComponent {
  private _dispatchActionUtility = dispatchActionUtility();

  @Input({ required: true })
  public payload!: IDynamicKey;

  public updateProfile(): void {
    this._dispatchActionUtility(ActionUpdateProfile, { payload: this.payload });
  }

  public cancel(): void {
    this._dispatchActionUtility(ActionSetModalData, undefined);
  }
}
