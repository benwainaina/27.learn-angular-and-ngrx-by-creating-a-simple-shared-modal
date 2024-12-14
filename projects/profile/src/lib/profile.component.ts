import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { dispatchActionUtility } from '../../../shared/src/lib/utilities/dispatchAction.utility';
import { ActionSetModalData } from '../../../shared/src/lib/state-manager/actions';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { DeleteProfileComponent } from './components/delete-profile/delete-profile.component';
import { MODAL_INJECTED_COMPONENT_NAMES } from '../../../shared/src/lib/modal/shared-modal/modal-component-mapping';
import { selectDataUtility } from '../../../shared/src/lib/utilities/selectData.utility';
import { selectUserDetails } from './state-manager/selectors';
import { Observable, take } from 'rxjs';
import { IDynamicKey } from '../../../shared/src/lib/interfaces';
import { IUser } from './state-manager/interfaces';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'lib-profile',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: 'profile.component.html',
  styleUrl: 'profile.component.scss',
})
export class ProfileComponent {
  public profileForm = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('1', [Validators.required]),
    confirmPassword: new FormControl('1', [Validators.required]),
  });
  public userDetails$: Observable<IUser>;
  private _dispatchActionUtility = dispatchActionUtility();
  private _selectDataUtility = selectDataUtility();

  constructor() {
    this.userDetails$ = this._selectDataUtility(selectUserDetails);
  }

  ngOnInit(): void {
    this._patchFormWithStoreData();
  }

  private _patchFormWithStoreData(): void {
    this.userDetails$.pipe(take(1)).subscribe({
      next: (details) => this.profileForm.patchValue(details as IDynamicKey),
    });
  }

  public onUpdateProfile(): void {
    if (!this.profileForm.valid) {
      return;
    }
    this._dispatchActionUtility(ActionSetModalData, {
      data: {
        component: MODAL_INJECTED_COMPONENT_NAMES.updateProfileComponent,
        payload: this.profileForm.value,
      },
    });
  }

  public onDeleteProfile(): void {
    this._dispatchActionUtility(ActionSetModalData, {
      data: {
        component: MODAL_INJECTED_COMPONENT_NAMES.deleteProfileComponent,
        payload: this.profileForm.value,
      },
    });
  }
}
