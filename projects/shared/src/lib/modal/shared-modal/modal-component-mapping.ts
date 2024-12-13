import { DeleteProfileComponent } from '../../../../../profile/src/lib/components/delete-profile/delete-profile.component';
import { UpdateProfileComponent } from '../../../../../profile/src/lib/components/update-profile/update-profile.component';

export enum MODAL_INJECTED_COMPONENT_NAMES {
  updateProfileComponent = 'updateProfileComponent',
  deleteProfileComponent = 'deleteProfileComponent',
}

export const MODAL_INJECTED_COMPONENTS_MAPPING: {
  [key in MODAL_INJECTED_COMPONENT_NAMES]: any;
} = {
  updateProfileComponent: UpdateProfileComponent,
  deleteProfileComponent: DeleteProfileComponent,
};
