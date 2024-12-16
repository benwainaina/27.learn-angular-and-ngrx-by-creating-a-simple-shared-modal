import { IDynamicKey } from '../interfaces';

export type TResponseStatus = 'success' | 'error' | undefined;

export interface IModalData {
  /**
   * angular component will be passed in
   */
  component: any;

  /**
   * payload which can be of any type
   */
  payload: IDynamicKey;
}

export const sharedFeatureKey = 'shared';

export interface ISharedState {
  /**
   * data to be passed into the shared overlay
   */
  modalData?: IModalData;

  /**
   * user token, which will be used by all parts
   * of the different application features to
   * authenticate with the backend.
   *
   * for example updating profile, creating a cart
   * etc
   */
  userToken: string;
}
