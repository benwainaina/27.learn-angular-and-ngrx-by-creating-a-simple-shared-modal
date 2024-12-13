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

@Component({
  selector: 'lib-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: 'profile.component.html',
  styleUrl: 'profile.component.scss',
})
export class ProfileComponent {
  public profileForm = new FormGroup({
    fullname: new FormControl('Ben Wainaina', [Validators.required]),
    email: new FormControl('benandengineering@youtube.com', [
      Validators.required,
    ]),
    password: new FormControl('123', [Validators.required]),
    confirmPassword: new FormControl('123', [Validators.required]),
  });
  private _dispatchActionUtility = dispatchActionUtility();

  public onUpdateProfile(): void {
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
