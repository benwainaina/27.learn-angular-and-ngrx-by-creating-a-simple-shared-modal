import { TResponseStatus } from '../../../../shared/src/lib/state-manager/interfaces';

export const profileFeatureKey = 'profile';

export interface IUser {
  /**
   * fullname of the user
   */
  fullname: string;

  /**
   * email of the user
   */
  email: string;
}

export interface IProfileState {
  /**
   * user details
   */
  user?: IUser;

  /**
   * status for whether the profile is being updated
   */
  isUpdatingProfile: boolean;

  /**
   * status for updating the profile
   */
  updateProfileStatus?: TResponseStatus;
}
