import { Component, inject, Input } from '@angular/core';
import { dispatchActionUtility } from '../../../../../shared/src/lib/utilities/dispatchAction.utility';
import { selectDataUtility } from '../../../../../shared/src/lib/utilities/selectData.utility';
import { IDynamicKey } from '../../../../../shared/src/lib/interfaces';
import { filter, Observable, take } from 'rxjs';
import { TResponseStatus } from '../../../../../shared/src/lib/state-manager/interfaces';
import {
  selectDeleteProfileStatus,
  selectIsDeletingProfile,
} from '../../state-manager/selectors';
import {
  ActionDeleteProfile,
  ActionSetDeleteProfileStatus,
} from '../../state-manager/actions';
import { ActionSetModalData } from '../../../../../shared/src/lib/state-manager/actions';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-delete-profile',
  standalone: true,
  imports: [AsyncPipe, NgTemplateOutlet],
  templateUrl: './delete-profile.component.html',
  styleUrl: './delete-profile.component.scss',
})
export class DeleteProfileComponent {
  private _dispatchActionUtility = dispatchActionUtility();
  private _selectDataUtility = selectDataUtility();
  private _router: Router = inject(Router);

  @Input({ required: true })
  public payload!: IDynamicKey;

  public isDeletingProfile$: Observable<boolean>;
  public deleteProfileStatus$: Observable<TResponseStatus>;
  public redirectCountdown: number = 5;

  constructor() {
    this.deleteProfileStatus$ = this._selectDataUtility(
      selectDeleteProfileStatus
    );
    this.isDeletingProfile$ = this._selectDataUtility(selectIsDeletingProfile);
  }

  ngOnInit(): void {
    this._resetAnyPreviousDeleteStatus();
    this._redirectAfterDeleteAction();
  }

  private _resetAnyPreviousDeleteStatus(): void {
    this._dispatchActionUtility(ActionSetDeleteProfileStatus, {
      payload: { status: undefined },
    });
  }

  public deleteProfile(): void {
    this._dispatchActionUtility(ActionDeleteProfile, { payload: this.payload });
  }

  public cancel(): void {
    this._dispatchActionUtility(ActionSetModalData, undefined);
  }

  private _redirectAfterDeleteAction(): void {
    this.deleteProfileStatus$
      .pipe(
        filter((status) => status === 'success'),
        take(1)
      )
      .subscribe({
        next: () =>
          setInterval(() => {
            if (this.redirectCountdown > 1) {
              this.redirectCountdown -= 1;
              this._router.navigate(['']);
            }
          }, 1000),
      });
  }
}
